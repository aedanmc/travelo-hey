/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './components/search-page/SearchPage';
import NavBar from './components/general/NavBar';
import LocationPage from './components/locations-page/LocationPage';
import ReviewSubmissionPage from './components/review-submission-page/ReviewSubmissionPage';

// TODO: set up nested routing for different top level pages
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchPage debug={false} />} />
        <Route path="/business/:place_id" element={<LocationPage />}>
          <Route path="/review" element={<ReviewSubmissionPage />} />
        </Route>
        <Route path="*" element={<main><p>There&apos;s nothing here!</p></main>} />
      </Routes>
    </div>
  );
}

export default App;
