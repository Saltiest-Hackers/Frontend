import React from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md' >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/feed'>

        </Route>
      </Container>
    </React.Fragment>
  );
}

export default App;
