import React from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';

import Home from './components/Home';
import Feed from './components/Feed';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md' >
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
