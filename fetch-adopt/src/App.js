import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/pages/Search';
import Home from './components/pages/Home';

function App() { 
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
      </React.Fragment>

  );
}

export default App;

