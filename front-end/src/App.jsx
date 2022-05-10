import React from 'react';
import './App.css';
import SearchPage from './components/search-page/SearchPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: set up nested routing for different top level pages
function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

export default App;
