import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import LoginPage from './pages/login'
import ListPage from './pages/list'
import SimpleMap from './pages/simpleMap';

function App() {
  return (
    <Router>
      <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/list" component={ListPage} />
    <Route exact path="/map" component={SimpleMap} />
    </Switch>
    </Router>
  );
}

export default App;
