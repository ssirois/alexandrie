import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';

export const useFolderList = () => {
  const [folders, setFolders] = useState<string[]>([]);

  useEffect(() => {
    ipcRenderer.on('folder-list-answer', (event, args) => {
      setFolders(args);
    });
    ipcRenderer.send('folder-list-request');
  }, []);

  return folders;
};
