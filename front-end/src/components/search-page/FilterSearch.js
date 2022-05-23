import * as React from 'react';
import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Container';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

// TODO: receive props passed down with a list of:
// 1. Countries
// 2. Cities
// 3. Activities
// For each <Select>, populate with <MenuItem>s using props data.
// Each item needs a key

export default function FilterSearch({ countries }) {
  const [state, setStates] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [activity, setActivity] = React.useState([]);

  const handleCountryChange = (event) => {
    const countryName = event.target.value;

    async function getStates() {
      try {
        await axios.post('http://localhost:8080/states', { country: countryName })
          .then((response) => {
            const { states } = response.data;

            const items = [];
            const keys = Object.keys(states);
            keys.forEach((key) => {
              items.push(states[key]);
            });
            setStates(items);
          });
      } catch (err) {
        console.log(err);
      }
    }
    getStates();
  };

  const handleStateChange = (event) => {
    const stateName = event.target.value;

    async function getCities() {
      try {
        await axios.post('http://localhost:8080/cities', { state: stateName })
          .then((response) => {
            const { cities } = response.data;

            const items = [];
            const keys = Object.keys(cities);
            keys.forEach((key) => {
              items.push(cities[key]);
            });
            setCity(items);
          });
      } catch (err) {
        console.log(err);
      }
    }
    getCities();
  };

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-country-label">Country</InputLabel>
        <Select
          labelId="select-country-label"
          label="Country"
          onChange={handleCountryChange}
        >
          {countries.map((c) => <MenuItem key={c.name} value={c.name}>{c.name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-state-label">State</InputLabel>
        <Select
          labelId="select-state-label"
          label="State"
          onChange={handleStateChange}
        >
          {state.map((s) => <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-city-label">City</InputLabel>
        <Select
          labelId="select-city-label"
          label="City"
        >
          {city.map((ci) => <MenuItem key={ci.name} value={ci.name}>{ci.name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-activity-label">Activity</InputLabel>
        <Select
          labelId="select-activity-label"
          value={activity}
          label="Activity"
          onChange={handleActivityChange}
        >
          {/* TODO: add <MenuItem/>s here to populate activities */}
        </Select>
      </FormControl>
      <Button variant="outlined" startIcon={<SearchIcon />}>
        Search
      </Button>
    </Stack>
  );
}

FilterSearch.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
