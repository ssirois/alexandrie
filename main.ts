import { app, BrowserWindow } from 'electron';

function createWindow() {
  const applicationMainWindow = new BrowserWindow({width: 800, height: 600});

  applicationMainWindow.loadFile('./dist/index.html');
}

app.on('ready', createWindow);

