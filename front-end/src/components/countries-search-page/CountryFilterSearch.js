import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Container';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container } from '@mui/material';

export default function CountryFilterSearch({ countries, onClick }) {
  const [selectedCountry, setSelectedCountry] = React.useState('');

  // TODO: Fix this data fetching issue once API doc is updated
  const handleSearch = () => {
    // TODO: add data fetching here in response to event
    async function getMatchingCountry() {
      try {
        const countryResponse = await axios.post('http://localhost:8080/country', { country: selectedCountry });
        const { country } = countryResponse.data;
        const items = [];
        const keys = Object.keys(country);
        keys.forEach((key) => {
          items.push(country[key]);
        });
        onClick(items);
      } catch (err) {
        console.log(err);
      }
    }
    console.log(selectedCountry);
    console.log(countries);
    getMatchingCountry();
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ alignContent: 'space-around', marginTop: 5, padding: 6, paddingBottom: 12, borderStyle: 'solid', borderRadius: 5, borderColor: 'lightgray' }}>
      <Stack direction="row" spacing={1}>
        <FormControl required sx={{ minWidth: '20%', marginTop: '3%', marginLeft: '1%', marginRight: '1%' }}>
          <InputLabel required id="select-country-label">Country</InputLabel>
          <Select
            labelId="select-country-label"
            label="Country"
            onChange={handleCountryChange}
            defaultValue=""
            value={selectedCountry}
            required
          >
            {countries.map((c) => <MenuItem key={c.name} value={c.name}>{c.name}</MenuItem>)}
          </Select>
        </FormControl>
        <Button variant="outlined" sx={{ marginTop: 5.5 }} startIcon={<SearchIcon />} onClick={handleSearch}>
          Search
        </Button>
      </Stack>
    </Container>
  );
}

CountryFilterSearch.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
