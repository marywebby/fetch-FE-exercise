import React, {useState} from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import 'semantic-ui-css/semantic.min.css';
// import DogCard from './components/pages/SearchPage';
import SearchPage from './components/pages/SearchPage';
// import Nav from './components/protected';

function App() { 

// const [isLoggedIn, setIsLoggedIn] = useState(true);

return (
  <Router>
    <div className='background'>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/search"
          element={<SearchPage/>}
        />
      </Routes>
    </div>
  </Router>
);
}

export default App;


 