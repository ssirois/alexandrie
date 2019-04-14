import { ipcRenderer } from 'electron';
import { requestHandler } from './main';
import { Application } from  'spectron';
import * as path from 'path';

it('should be true', () => {
  expect(true).toBe(true);
});

describe('list folders', () => {
  it('should list folders', async(() => {
    const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
    const app = new Application({
      path: electronPath,
      args: [path.join(__dirname, 'dist', 'main')]
    });

    app.start().then(() => {
      console.log('in context?');
      jest.spyOn(requestHandler, 'requestFolderList');
      ipcRenderer.send('folder-list-request', '/tmp/alexandrie');
      expect(requestHandler.requestFolderList).toHaveBeenCalledTimes(1);
    });
  }));
});

