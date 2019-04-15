import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ipcRenderer } from 'electron';


const FileList: React.FunctionComponent = () => {
  const [folders, setFolders] = React.useState<string[]>([]);

  React.useEffect(() => {
    ipcRenderer.on('folder-list-answer', (event, args) => {
      console.log(args)
      setFolders(args);
    });

    ipcRenderer.send('folder-list-request');
  }, [])

  return (
    <ul>
      {folders.map((folder) => {
        <li>{folder}</li>
      })}
    </ul>
  )
}

ReactDom.render(
  <div>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Alexandrie -- test
        </Typography>
      </Toolbar>
    </AppBar>
    <FileList/>
  </div>,

  document.getElementById('app')
);