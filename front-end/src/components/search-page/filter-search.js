import * as React from 'react';
import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Container';

// TODO: receive props passed down with a list of:
// 1. Countries
// 2. Cities
// 3. Activities
// For each <Select>, populate with <MenuItem>s using props data.
// Each item needs a key

export default function FilterSearch() {
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [activity, setActivity] = React.useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
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
          value={country}
          label="Country"
          onChange={handleCountryChange}
        >
          {/* TODO: add <MenuItem/>s here to populate countries */}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-city-label">City</InputLabel>
        <Select
          labelId="select-city-label"
          value={city}
          label="City"
          onChange={handleCityChange}
        >
          {/* TODO: add <MenuItem/>s here to populate cities */}
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