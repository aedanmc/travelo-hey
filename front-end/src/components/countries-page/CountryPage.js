import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// import axios from 'axios';
// import {
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from 'react-router-dom';
// import PropTypes from 'prop-types';
import SingleResult from '../general/SingleResult';
import sampleData from './SampleCountry';

function CountriesPage() {
  // TODO: Add data fetching --> avoid data race with fix from https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
  // TODO: Add state management with hooks
  // TODO: fill in static layout
  // TODO if time: add styling

  const country = sampleData;
  return (
    <Container width="100%" sx={{ margin: 2 }}>
      <Stack container="true" spacing={2} alignItems="center" direction="column" sx={{ margin: 2 }}>
        <SingleResult
          firstString={country.name}
          secondString={country.safetyScore}
          thirdString={country.lgbtqSafetyIndex}
        />
      </Stack>
    </Container>
  );
}

export default CountriesPage;
