import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { CssBaseline, Container, makeStyles } from '@material-ui/core';

import Home from './components/Home';
import Feed from './components/Feed';

import background from './assets/background.jpg'

const useStyles = makeStyles({
  homeColumn: {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    backgroundPosition: 'center center'
  },
  column: {
    backgroundColor: 'black',
  }
})

function App() {
  const { location } = useHistory();
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={location.pathname === '/' ? classes.homeColumn : classes.column } maxWidth='md' >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/feed'>
          <Feed />
        </Route>
      </Container>
    </React.Fragment>
  );
}

export default App;
