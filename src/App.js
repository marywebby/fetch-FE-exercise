import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/pages/Search';
import Home from './components/pages/Home';

function App() { 
  return (
      <Router>
        <div>
          {/* <GigProvider> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/search" element={<Search />} /> */}
            {/* <Route
              path="/profile/:userId"
              element={<GigProfile />}
              getKey={(params) => params.userId}
            /> */}
          </Routes>
          {/* </GigProvider> */}
        </div>
      </Router>
  );
}

export default App;

