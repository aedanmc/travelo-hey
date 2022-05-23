import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import axios from 'axios';
import {
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
// import NameSearch from './name-search';
import PropTypes from 'prop-types';
import SingleResult from '../general/SingleResult';
import FilterSearch from './FilterSearch';
import LocationPage from '../locations-page/LocationPage';
import getStaticLocations from './TestData';

function SearchPage({ debug }) {
  const [locations, setLocations] = React.useState([]);
  const [countriesList, setCountries] = React.useState([]);
  const [activitiesList, setActivities] = React.useState([]);

  const getInitialLocations = async () => {
    try {
      const locationResponse = await axios.get('http://localhost:8080/countries');
      console.log(locationResponse);
      const { result } = locationResponse.data;
      const items = [];
      const keys = Object.keys(result);
      keys.forEach((key) => {
        items.push(result[key]);
      });
      setLocations(items);
    } catch (err) {
      // TODO: come up with another way to handle errors
      alert(err);
    }
  };

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
   * Retrieves the data required to display featured posts exactly once.
   */
  React.useEffect(() => {
    if (debug) {
      setLocations(getStaticLocations());
    } else {
      getInitialLocations();
    }
    getCountries();
    getActivities();
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
      />
      <Container maxWidth="lg" sx={{ marginTop: 3, padding: 2 }}>
        <Stack container="true" spacing={4} alignItems="center" direction="row" sx={{ margin: 2 }}>
          {locations.map((item) => (
            <Link key={item.place_id} to={`/business/?place_id=${item.place_id}&form_addr=${item.formatted_address}`}>
              <SingleResult
                image="http://via.placeholder.com/640x360"
                name={item.name}
                contact={item.formatted_phone_number}
                address={item.formatted_address}
              />
            </Link>
          ))}
        </Stack>
        <Routes>
          <Route path="/business" element={<LocationPage />} />
        </Routes>
        <Outlet />
      </Container>
    </>

  );
}

SearchPage.propTypes = {
  debug: PropTypes.bool.isRequired,
};

export default SearchPage;
