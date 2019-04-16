import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  createStyles
} from '@material-ui/core';
import { FolderList } from './FolderList';
import { useFolderList } from '../hooks/useFolderList';

export const styles = createStyles({
  root: {
    paddingTop: '64px'
  }
});

export const App = () => {
  const folders = useFolderList();

  return (
    <div style={styles.root}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Alexandrie
          </Typography>
        </Toolbar>
      </AppBar>
      <FolderList folders={folders} />
    </div>
  );
};
