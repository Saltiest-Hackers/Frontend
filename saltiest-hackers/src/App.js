import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { CssBaseline, Container, makeStyles } from '@material-ui/core';
import  PrivateRoute  from './components/PrivateRoute';

import Home from './components/Home';
import Feed from './components/Feed';
import Saved from './components/Saved';
import Nav from './components/Nav';
import Commenter from './components/Commenter';

import background from './assets/background.jpg'
import SaltiestUsers from './components/SaltiestUsers';


const useStyles = makeStyles({
  homeColumn: {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    backgroundPosition: 'center center'
  },
  column: {
    minHeight: '100vh',
    backgroundColor: 'black',
  }
})

function App() {
  // const { location } = useHistory();
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Router>
          <Nav/>
          <Container maxWidth='md' >
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
