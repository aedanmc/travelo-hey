import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: set up nested routing for different top level pages
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route />
        
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
