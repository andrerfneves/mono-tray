import { globalShortcut } from 'electron';

export const registerDebugShortcut = () => globalShortcut.register(
  'CommandOrControl+Shift+Control+Option+Space+D+F',
  () => {
    app.dock.show();
    mainWindow.webContents.openDevTools();
  },
);
