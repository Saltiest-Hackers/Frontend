import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import  PrivateRoute  from './components/PrivateRoute';

import Home from './components/Home';
import Feed from './components/Feed';

function App() {
  return (
    // <React.Fragment>
      // <CssBaseline />
      // <Container maxWidth='md' >
    <Router>
    <Switch>
        <Route exact path='/' component={Home}/>

        <PrivateRoute path='/feed' component={Feed}/>

    </Switch>
    </Router>
  );
}

export default App;
