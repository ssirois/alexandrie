import { app, BrowserWindow } from 'electron';
import './index';

it('should be true', () => {
  expect(true).toBe(true);
});
afterAll(() => {
  app.exit();
});
describe('list folders', () => {
  it('should', () => {
    expect(BrowserWindow).toBe(true);
  });
  // let app: Application;
  // beforeEach(async () => {
  //   const electronPath = path.join(__dirname, 'node_modules', '.bin', 'electron.cmd');
  //   app = new Application({
  //     path: electronPath,
  //     args: ['./src/inde'],
  //   });
  //   await app.start();
  //   await app.client.waitUntilWindowLoaded();
  // });
  // afterEach(() => {
  //   return app.stop();
  // });
  // it('should be running', () => {
  //   expect(app.isRunning()).toBe(true);
  // });
  // it('should be visible', async () => {
  //   expect(await app.browserWindow.isVisible()).toBe(true);
  //   expect(await app.client.getWindowCount()).toBe(1);
  // });
  // it('should list folders', () => {
  //   return new Promise((resolve) => {
  //     app.electron.ipcRenderer.on('folder-list-answer', (_event: any, results: any) => {
  //       expect(results).toBeTruthy();
  //       resolve();
  //     });
  //     app.electron.remote.ipcMain.emit('folder-list-request');
  //     app.electron.ipcRenderer.send('folder-list-request');
  //   });
  // });
});
