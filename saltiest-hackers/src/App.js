import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>

      </Route>
      <Route path='/register'>

      </Route>
    </div>
  );
}

export default App;
