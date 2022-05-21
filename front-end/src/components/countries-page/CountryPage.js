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
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import SingleResult from '../general/SingleResult';
import sampleData from './SampleCountry';

function CountriesPage() {
  // TODO: Add data fetching --> avoid data race with fix from https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
  // TODO: Add state management with hooks
  // TODO: fill in static layout
  // TODO if time: add styling

  const [continent, setContinent] = React.useState('North America');

  const handleContinentChange = (event) => {
    setContinent(event.target.value);
  };

  const handleApplyFilters = () => {
    // TODO: add data fetching here in response to event
  };

  const country = sampleData;
  return (
    <Container width="100%" sx={{ margin: 2 }}>
      <Stack container="true" spacing={3} alignItems="center" direction="row" sx={{ margin: 3 }}>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Continent</FormLabel>
          <RadioGroup
            row
            aria-labelledby="continent-radio-group"
            name="row-radio-buttons-group"
            onChange={handleContinentChange}
            value={continent}
          >
            <FormControlLabel value="Asia" control={<Radio />} label="Asia" />
            <FormControlLabel value="Africa" control={<Radio />} label="Africa" />
            <FormControlLabel value="Oceania" control={<Radio />} label="Oceania" />
            <FormControlLabel value="Europe" control={<Radio />} label="Europe" />
            <FormControlLabel value="North America" control={<Radio />} label="North America" />
            <FormControlLabel value="South America" control={<Radio />} label="South America" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="outlined"
          startIcon={<SearchIcon />}
          onClick={handleApplyFilters}
        >
          Search
        </Button>
      </Stack>
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
