import { ipcRenderer } from 'electron';
//import { requestHandler } from './main';
//import { Application } from  'spectron';
//import * as path from 'path';

it('should be true', () => {
  expect(true).toBe(true);
});

/*
it('should be visible', async () => {
  const isVisible = await app.browserWindow.isVisible();
  console.log(isVisible);
  expect (isVisible).toBe(true);
});
*/

describe('list folders', () => {
    /*
  let app;
  beforeEach(async () => {
    const electronPath = path.join(__dirname, 'node_modules', '.bin', 'electron');

    app = new Application({
      path: electronPath,
      args: [path.join(__dirname, 'dist', 'main')]
    });
    await app.start();
  });
    */

    /*
  it('should list folders', () => {
    return new Promise((resolve) => {
      ipcRenderer.on('folder-list-answer', (event, results) => {
        expect(results).toBeTruthy();
        resolve();
      });

      ipcRenderer.send('folder-list-request');
    });
  });
  */
});

