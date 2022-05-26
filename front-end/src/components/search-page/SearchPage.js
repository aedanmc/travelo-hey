import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
// import NameSearch from './name-search';
import PropTypes from 'prop-types';
import SingleResult from '../general/SingleResult';
import FilterSearch from './FilterSearch';
import getStaticLocations from './TestData';

/**
 * Functional component for rendering a dynamic version of the initial landing and search page
 * for the Travelo-Hey! web app.
 * @param { debug } debug: a testing flag for identifying
 * whether static or dynamic data fetching will be used.
 * @returns the initial landing page for Travelo-Hey!'s web app.
 */
function SearchPage({ debug }) {
  const [countriesList, setCountries] = React.useState([]);
  const [activitiesList, setActivities] = React.useState([]);

  const [searchBusiness, setSearchBusiness] = React.useState([]);

  // For testing purposes, we want to retrieve business from the businesses.json file
  const [locations, setLocations] = React.useState([]);

  async function getCountries() {
    try {
      await axios.get('http://localhost:8080/countries')
        .then((response) => {
          const { countries } = response.data;
          const items = [];
          const keys = Object.keys(countries);
          keys.forEach((key) => {
            items.push(countries[key]);
          });

          setCountries(items);
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function getActivities() {
    try {
      await axios.get('http://localhost:8080/activities')
        .then((response) => {
          const { activities } = response.data;
          setActivities(activities);
        });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Retrieves the data required to display featured posts exactly once and
   * stores it in the internal locations state object.
   */
  React.useEffect(() => {
    if (debug) {
      setLocations(getStaticLocations());
      console.log(locations);
    } else {
      getCountries();
      getActivities();
    }
  }, []);

  /**
   * Returns the content for the page, including a list of locations fetched
   * from the Travelo-Hey API.
   */
  return (
    <>
      <FilterSearch
        countries={countriesList}
        activities={activitiesList}
        onClick={setSearchBusiness}
      />
      <Container sx={{ marginTop: 3, padding: 2, width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {searchBusiness.map((item) => (
            <Grid item xs={6}>
              <Link key={item.place_id} to={`/business/${item.place_id}`}>
                <SingleResult
                  image={item.icon}
                  name={item.name}
                  address={item.formatted_address}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Outlet />
      </Container>
    </>

  );
}

SearchPage.propTypes = {
  debug: PropTypes.bool.isRequired,
};

export default SearchPage;
