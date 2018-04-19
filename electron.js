import {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  powerMonitor,
  protocol,
  Tray,
} from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import path from 'path';
import Config from './config.json';
import Raven from 'raven';
import Positioner from 'electron-positioner';
import Store from 'electron-store';
import open from 'open';
import { registerDebugShortcut } from './utils/debug-shortcut';
import { loadAnalytics, checkHeartbeat } from './utils/analytics';

const store = new Store();
let mainWindow;
let updateAvailable = false;
let tray = null;

//-------------------------------------------------------------------
// Logging
//-------------------------------------------------------------------
// autoUpdater.logger = log;
// autoUpdater.logger.transports.file.level = 'info';
// log.info('App starting...');
// Raven.config('https://e254805a5b5149d48d6561ae035dd19c:26a8736adf7c4ae08464ac3483eca1d2@sentry.io/260576').install();

//-------------------------------------------------------------------
// Main app logic
//-------------------------------------------------------------------
const showStatus = (text) => {
  log.info(text);

  if (text === 'Update downloaded') updateAvailable = true;

  mainWindow.webContents.send('update', {
    updateAvailable,
    updateInfo: text,
  });
};

function createWindow() {
  // -------------
  // Auto Updating
  // -------------
  autoUpdater.checkForUpdatesAndNotify();

  autoUpdater.on('checking-for-update', () => showStatus('Checking for update...'));
  autoUpdater.on('update-available', () => showStatus('Update available.'));
  autoUpdater.on('update-not-available', () => showStatus('No updates available.'));
  autoUpdater.on('error', err => showStatus(`Error while updating: ${err}`));

  autoUpdater.on('download-progress', (progress) => {
    let logMessage = `Download speed: ${progress.bytesPerSecond}`;
    logMessage = `${logMessage} - Downloaded ${progress.percent}%`;
    logMessage = `${logMessage} (${progress.transferred}/${progress.total})`;

    showStatus(logMessage);
  });

  autoUpdater.on('update-downloaded', () => {
    updateAvailable = true;
    showStatus('Update downloaded');
  });

  // ----------
  // App Window
  // ----------
  mainWindow = new BrowserWindow({
    width: 340,
    height: 435,
    transparent: true,
    frame: false,
    resizable: true,
    webPreferences: {
      devTools: true,
      webSecurity: false,
    },
  });

  mainWindow.setVisibleOnAllWorkspaces(true);
  app.dock.hide();
  tray = new Tray(path.join(__dirname, 'public', 'tray.png'));
  // tray.setTitle('Fetching...');

  // -------------
  // Miscellaneous
  // -------------
  registerDebugShortcut();
  loadAnalytics(app);
  checkHeartbeat(app, updateAvailable, autoUpdater);

  // --------------------------
  // Init & Positioning Methods
  // --------------------------
  tray.setToolTip('Crypto Bar');
  // mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  mainWindow.loadURL('http://localhost:8080/');
  const positioner = new Positioner(mainWindow);
  let bounds = tray.getBounds();
  positioner.move('trayCenter', bounds);

  // ---------------------
  // Load User Preferences
  // ---------------------
  const userPreferences = store.get('preferences') || Config.defaultPreferences;
  store.set('preferences', userPreferences);

  // ---------------------
  // Handle Sleep / Resume
  // ---------------------
  powerMonitor.on('suspend', () => mainWindow.webContents.send('suspend', 'suspended'));
  powerMonitor.on('resume', () => mainWindow.webContents.send('resume', 'resumed'));

  // -------------------
  // App Window Behavior
  // -------------------
  mainWindow.on('blur', () => mainWindow.hide());
  mainWindow.on('show', () => tray.setHighlightMode('always'));
  mainWindow.on('hide', () => tray.setHighlightMode('never'));
  mainWindow.on('closed', () => mainWindow = null);

  tray.on('click', () => {
    bounds = tray.getBounds();
    positioner.move('trayCenter', bounds);
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  // ----------------
  // Renderer Exports
  // ----------------
  exports.store = store;
  exports.app = app;
  exports.open = open;
  exports.tray = tray;
}

// -------------
// App Lifecycle
// -------------
app.on('ready', createWindow);
app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
