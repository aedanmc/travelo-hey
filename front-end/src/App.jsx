import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './components/search-page/SearchPage';
import NavBar from './components/general/NavBar';
import LocationPage from './components/locations-page/LocationPage';

// TODO: set up nested routing for different top level pages
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/business/*" element={<LocationPage />} />
        <Route path="/*" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
