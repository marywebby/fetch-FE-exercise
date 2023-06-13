import React from 'react';
import './index.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Search from './components/pages/Search';
import Home from './components/pages/Home';
import 'semantic-ui-css/semantic.min.css'

function App() { 
  return (
        <div className='home'> 
          <div className='loginHeader'>Login</div>
          <div>
            < Home />
          </div>
        </div>
  );
}

export default App;

