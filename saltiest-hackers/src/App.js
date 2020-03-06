import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container, makeStyles } from '@material-ui/core';
import  PrivateRoute  from './components/PrivateRoute';

import Home from './components/Home';
import Feed from './components/Feed';
import Saved from './components/Saved';
import Nav from './components/Nav';
import Commenter from './components/Commenter';
import SaltiestUsers from './components/SaltiestUsers';


const useStyles = makeStyles({
  column: {
    minHeight: '100vh',
    backgroundColor: '#4b4b4b',
    paddingBottom: '1%',
  }
})

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Router>
          <Nav/>
          <Container maxWidth='md' className={classes.column}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <PrivateRoute path='/feed' component={Feed}/>
                <PrivateRoute path='/saved' component={Saved}/>
                <PrivateRoute path='/saltiest' component={SaltiestUsers}/>
                <PrivateRoute path='/commenter/:id' component={Commenter}/>
            </Switch>
          </Container>
        </Router>
    </React.Fragment>
  );
}

export default App;
