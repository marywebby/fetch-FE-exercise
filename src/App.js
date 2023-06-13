import React, {useState} from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/pages/Search';
import Home from './components/pages/Home';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/protected';

function App() { 

const [isLoggedIn, setIsLoggedIn] = useState(true);

return (
  <Router>
    <div className='background'>
      <Routes>
        <Route
          path="/"
          element={<Home setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/search"
          element={
            <Nav isLoggedIn={isLoggedIn}>
              <Search />
            </Nav>
          }
        />
      </Routes>
    </div>
  </Router>
);
}

export default App;


 