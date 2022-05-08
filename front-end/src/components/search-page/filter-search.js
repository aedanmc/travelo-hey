import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

// TODO: receive props passed down with a list of:
// 1. Countries
// 2. Cities
// 3. Activities
// For each <Select>, populate with <MenuItem>s using props data.
// Each item needs a key

export default function FilterSearch({ countryArray, cityArray, activityArray }) {
  const [country, setCountry] = React.useState('');

  return (
    <div>
      <FormControl>
        <InputLabel id="select-country-label">Country</InputLabel>
        <Select
          labelId="select-country-label"
          value={country}
          label="Country"
        >
          {/* TODO: add <MenuItem/>s here to populate countries */}
        </Select>
        <InputLabel id="select-city-label">City</InputLabel>
        <Select
          labelId="select-city-label"
          value={city}
          label="City"
        >
          {/* TODO: add <MenuItem/>s here to populate cities */}
        </Select>
        <InputLabel id="select-activity-label">Activity</InputLabel>
        <Select
          labelId="select-activity-label"
          value={activity}
          label="Activity"
        >
          {/* TODO: add <MenuItem/>s here to populate activities */}
        </Select>
      </FormControl>
      <Button variant="outlined" startIcon={<SearchIcon />}>
        Search
      </Button>
    </div>
  );
}
