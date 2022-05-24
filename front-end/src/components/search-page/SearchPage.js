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

/**
 * Functional component for rendering a dynamic version of the initial landing and search page
 * for the Travelo-Hey! web app.
 * @param { debug } debug: a testing flag for identifying
 * whether static or dynamic data fetching will be used.
 * @returns the initial landing page for Travelo-Hey!'s web app.
 */
function SearchPage({ debug }) {
  // Management of inital location data in a state object
  const [locations, setLocations] = React.useState([]);

  // const classes = useStyles();

  // TODO questions:
  // how do we prevent errors?
  // how do we prevent race conditions with data fetching in useEffect?

  /**
   * Asynchronous function for querying the Travelo-Hey! back-end server for
   * location data on initial page load.
   *
   * Intended for use as part of a useEffect() component mounting sequence.
   */
  const getInitialLocations = async () => {
    try {
      const locationResponse = await axios.get('http://localhost:8080');
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

  /**
   * Retrieves the data required to display featured posts exactly once and
   * stores it in the internal locations state object.
   */
  React.useEffect(() => {
    if (debug) {
      setLocations(getStaticLocations());
    } else {
      getInitialLocations();
    }
  }, []);

  /**
   * Returns the content for the page, including a list of locations fetched
   * from the Travelo-Hey API.
   */
  return (
    <Container width="100%" sx={{ margin: 2 }}>
      <FilterSearch />
      <Stack container="true" spacing={2} alignItems="center" direction="column" sx={{ margin: 2 }}>
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
        <Route path="/business/?place_id=:locationID&form_addr=:address" element={<LocationPage />} />
      </Routes>
      <Outlet />
    </Container>
  );
}

SearchPage.propTypes = {
  debug: PropTypes.bool.isRequired,
};

export default SearchPage;
