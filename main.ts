import { app, BrowserWindow, ipcMain } from 'electron';
import * as fs from 'fs';

function createWindow() {
  const applicationMainWindow = new BrowserWindow({width: 800, height: 600});

  applicationMainWindow.loadFile('./dist/index.html');
}

export const requestHandler = {
  requestFolderList: () => {
    return '';
  }
};

//ipcMain.on('folder-list-request', requestHandler.requestFolderList);
//app.on('ready', createWindow);

export const environment = {
  basePath: '/tmp/alexandrie',
};

export function loadBasePath() {
  if (!fs.existsSync(environment.basePath)) {
    fs.mkdirSync(environment.basePath);
  }
}

