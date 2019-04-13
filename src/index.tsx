import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

ReactDom.render(
  <AppBar>
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Alexandrie
      </Typography>
    </Toolbar>
  </AppBar>,
  document.getElementById('app')
);

