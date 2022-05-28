/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BusinessSearchPage from './components/business-search-page/BusinessSearchPage';
import NavBar from './components/general/NavBar';
import LocationPage from './components/locations-page/LocationPage';
import CountrySearchPage from './components/countries-search-page/CountrySearchPage';


// TODO: set up nested routing for different top level pages
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BusinessSearchPage debug={false} />} />
        <Route path="/business/:place_id" element={<LocationPage />} />
        <Route path="/countries" element={<CountrySearchPage />} />
        <Route path="/country/:country_id" />
        <Route path="*" element={<main><p>There&apos;s nothing here!</p></main>} />
      </Routes>
    </div>
  );
}

export default App;
