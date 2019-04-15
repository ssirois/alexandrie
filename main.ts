import { app, BrowserWindow, ipcMain } from 'electron';

function createWindow() {
  const applicationMainWindow = new BrowserWindow({width: 800, height: 600});

  applicationMainWindow.loadFile('./dist/index.html');
}


ipcMain.on('folder-list-request', (event) => { event.sender.send('folder-list-answer', ['this is the list of folder']); });
app.on('ready', createWindow);

export const environment = {
  basePath: '/tmp/alexandrie',
};
