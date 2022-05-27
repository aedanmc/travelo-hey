import * as React from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Container';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { Container } from '@mui/material';

/**
 * Functional component for filtering required fields to display businesses data
 * in the landing and search page for the Travelo-Hey! web app
 *
 * @param countries         a list that contains names of all countries
 * @param activities        a list of possible activities
 * @param onClick           a action to retrieve city and activity to send it back to parent
 * @returns {JSX.Element}   a dependent dropdown menu
 */
export default function FilterSearch({ countries, activities, onClick }) {
  // A list of states and cities
  const [state, setStates] = React.useState([]);
  const [city, setCities] = React.useState([]);

  // The country, state and city selected by the user
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedActivity, setSelectedActivity] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');

  /**
   * Retrieves a list of states located in the country selected by the user,
   * and stores it in the internal state object
   *
   * @param event onClick
   */
  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    setSelectedCountry(event.target.value);

    async function getStates() {
      try {
        await axios.post('http://localhost:8080/states', { country: countryName })
          .then((response) => {
            const { states } = response.data;
            const items = [];
            const keys = Object.keys(states);
            keys?.forEach((key) => {
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

  /**
   * Retrieves a list of cities located in the state selected by the user,
   * and stores it in the internal city object
   *
   * @param event onClick
   */
  const handleStateChange = (event) => {
    const stateName = event.target.value;

    async function getCities() {
      try {
        await axios.post('http://localhost:8080/cities', { state: stateName })
          .then((response) => {
            const { cities } = response.data;
            const items = [];
            const keys = Object.keys(cities);
            keys?.forEach((key) => {
              items.push(cities[key]);
            });
            setCities(items);
          });
      } catch (err) {
        console.log(err);
      }
    }
    getCities();
  };

  /**
   * Get the city selected by the user
   *
   * @param event onChange
   */
  const handleCitySelected = (event) => {
    setSelectedCity(event.target.value);
  };

  /**
   * get the activity selected by the user
   *
   * @param event onChange
   */
  const handleActivitySelected = (event) => {
    setSelectedActivity(event.target.value);
  };

  /**
   * Retrieves a list of businesses located at a particular city, with a particular
   * activity type chosen by the user and send list back to parent using the
   * onClick action parameter
   *
   */
  const handleSearch = () => {
    const getBusinesses = async () => {
      try {
        const lowerCaseActivity = selectedActivity.toLowerCase();
        const locationResponse = await axios.post('http://localhost:8080/search', {
          activity: lowerCaseActivity,
          city: selectedCity,
        });
        const { results } = locationResponse.data;
        const items = [];
        const keys = Object.keys(results);
        keys?.forEach((key) => {
          items.push(results[key]);
        });
        onClick(items);
      } catch (err) {
        console.log(err);
      }
    };
    getBusinesses();
  };

  return (
    <Container maxWidth="lg" sx={{ alignContent: 'space-around', marginTop: 5, padding: 6, paddingBottom: 12, borderStyle: 'solid', borderRadius: 5, borderColor: 'lightgray' }}>
      <Stack direction="row" spacing={1}>
        <FormControl required sx={{ minWidth: '20%', marginTop: '3%', marginLeft: '1%', marginRight: '1%' }}>
          <InputLabel required id="select-country-label">Country</InputLabel>
          <Select
            labelId="select-country-label"
            label="Country"
            value={selectedCountry}
            onChange={handleCountryChange}
            defaultValue=""
            required
          >
            {countries?.map((c) => <MenuItem key={c.name} value={c.name}>{c.name}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl required sx={{ minWidth: '20%', marginTop: '3%', marginLeft: '1%', marginRight: '1%' }}>
          <InputLabel id="select-state-label">State</InputLabel>
          <Select
            labelId="select-state-label"
            label="State"
            onChange={handleStateChange}
            defaultValue=""
            required
          >
            {state?.map((s) => <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl required sx={{ minWidth: '20%', marginTop: '3%', marginLeft: '1%', marginRight: '1%' }}>
          <InputLabel id="select-city-label">City</InputLabel>
          <Select
            labelId="select-city-label"
            label="City"
            value={selectedCity}
            onChange={handleCitySelected}
            defaultValue=""
            required
          >
            {city?.map((ci) => <MenuItem key={ci.name} value={ci.name}>{ci.name}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl required sx={{ minWidth: '20%', marginTop: '3%', marginLeft: '1%', marginRight: '1%' }}>
          <InputLabel id="select-activity-label">Activity</InputLabel>
          <Select
            labelId="select-activity-label"
            label="Activity"
            value={selectedActivity}
            onChange={handleActivitySelected}
            defaultValue=""
            required
          >
            {activities?.map((a) => <MenuItem key={a} value={a}>{a}</MenuItem>)}
          </Select>
        </FormControl>
        <Button variant="outlined" sx={{ marginTop: 5.5 }} startIcon={<SearchIcon />} onClick={handleSearch}>
          Search
        </Button>
      </Stack>
    </Container>
  );
}

/**
 * List of required parameters passed to this function
 */
FilterSearch.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activities: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
