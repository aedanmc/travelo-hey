import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Container';
import axios from 'axios';
// import axiosConn from 'global/axiosConn';
import MenuItem from '@mui/material/MenuItem';
// import { MenuItem } from '@mui/material';

// TODO: receive props passed down with a list of:
// 1. Countries
// 2. Cities
// 3. Activities
// For each <Select>, populate with <MenuItem>s using props data.
// Each item needs a key

export default function FilterSearch() {
  const [countries, setCountry] = useState([]);
  const [states, setStates] = React.useState([]);
  const [cities, setCity] = React.useState([]);

  const [activity, setActivity] = React.useState([]);

  const handleCountryChange = (event) => {
    const countryName = event.target.value.name;

    async function fetchData() {
      axios.post('http://localhost:8080/states', { country: countryName })
        .then((r) => {
          setStates(r.data.state);
        });
    }
    fetchData();
  };

  const handleStateChange = (event) => {
    const stateName = event.target.value.name;

    async function fetchData() {
      axios.post('http://localhost:8080/cities', { state: stateName })
        .then((r) => {
          setCity(r.data.cities);
          console.log(r.data.cities);
        });
    }
    fetchData();
  };

  console.log(cities);

  const handleCityChange = (event) => {
    // setCity(event.target.value);
    console.log(event.target.value);
  };

  const handleActivityChange = () => {
    async function fetchData() {
      axios.get('http://localhost:8080/activities')
        .then((r) => {
          setActivity(r.data.activities);
        });
    }
    fetchData();
  };

  useEffect(() => {
    async function fetchData() {
      await axios.get('http://localhost:8080/countries')
        .then((r) => {
          setCountry(r.data);
        });
    }
    fetchData();
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-country-label">Country</InputLabel>
        <Select
          labelId="select-country-label"
          label="Country"
          onChange={handleCountryChange}
        >
          {countries.map((name) => <MenuItem key={name.name} value={name}>{name.name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-state-label">State</InputLabel>
        <Select
          labelId="select-state-label"
          label="State"
          onChange={handleStateChange}
        >
          {states.map((name) => <MenuItem key={name.name} value={name}>{name.name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-city-label">City</InputLabel>
        <Select
          labelId="select-city-label"
          label="City"
          onChange={handleCityChange}
        >
          {cities.map((name) => <MenuItem key={name} value={name}>{name.name}</MenuItem>)}
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
          {activity.map((name) => <MenuItem key={name} value={name}>{name.name}</MenuItem>)}
        </Select>
      </FormControl>
      <Button variant="outlined" startIcon={<SearchIcon />}>
        Search
      </Button>
    </Stack>
  );
}
