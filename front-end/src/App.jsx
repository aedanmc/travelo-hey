import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/search-page/SearchPage';
import NavBar from './components/general/NavBar';

// TODO: set up nested routing for different top level pages
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<NavBar />} />
          <Route exact path="*" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
