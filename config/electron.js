// @flow

import {
  app,
  BrowserWindow,
  // ipcMain,
  // Menu,
  powerMonitor,
  // protocol,
  Tray,
} from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import path from 'path';
// import Raven from 'raven';
import Positioner from 'electron-positioner';
import Store from 'electron-store';
import open from 'open';
import Config from './config.json';
import { registerDebugShortcut } from '../utils/debug-shortcut';
import { loadAnalytics, checkHeartbeat } from '../utils/analytics';

const store = new Store();
let mainWindow: Object;
let updateAvailable = false;
let tray: Object = {};

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
  // log.info(text);

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
    width: 370,
    height: 485,
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
  tray = new Tray(path.join(__dirname, '../public', 'tray.png'));
  // tray.setTitle('Fetching...');

  // -------------
  // Miscellaneous
  // -------------
  registerDebugShortcut(app, mainWindow);
  loadAnalytics(app, log);
  checkHeartbeat(app, updateAvailable, autoUpdater, log);

  // --------------------------
  // Init & Positioning Methods
  // --------------------------
  tray.setToolTip('Mono Tray');
  mainWindow.loadURL(`file://${__dirname}/build/index.html`);
  // mainWindow.loadURL('http://localhost:8080/');
  // mainWindow.loadURL('https://mono-tray.now.sh/');
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
  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('blur', () => mainWindow.hide());
  mainWindow.on('show', () => tray.setHighlightMode('always'));
  mainWindow.on('hide', () => tray.setHighlightMode('never'));
  // $FlowFixMe
  mainWindow.on('closed', () => { mainWindow = null; });

  tray.on('click', () => {
    bounds = tray.getBounds();
    positioner.move('trayCenter', bounds);

    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
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
