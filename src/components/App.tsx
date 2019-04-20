import { AppBar, createStyles, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import { useFolderList } from '../hooks/useFolderList';
import { FolderList } from './FolderList';

export const styles = createStyles({
  root: {
    paddingTop: '64px',
  },
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
