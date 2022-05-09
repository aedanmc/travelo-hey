import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import axios from 'axios';
// import NameSearch from './name-search';
// import FilterSearch from './filter-search';
import SingleResult from '../general/SingleResult';

function SearchPage() {
  const [locations, setLocations] = React.useState([]);

  // TODO: Set up useEffect() to render data on page load
  // TODO: In useEffect(), make a call to API using fetch/axios

  // const classes = useStyles();

  // TODO questions:
  // how do we prevent errors?
  // how do we prevent race conditions with data fetching in useEffect?

  /**
   * Retrieves the data required to display featured posts exactly ones
   */
  React.useEffect(() => {
    const getLocations = async () => {
      try {
        const locationResponse = await axios.get('https://cse403-sp22-travelo-hey.uw.r.appspot.com/');
        const { result } = locationResponse.data;
        const items = [];
        const keys = Object.keys(result);
        keys.forEach((key) => {
          items.push(result[key]);
        });
        setLocations(items);
      } catch (err) {
        alert(err);
      }
    };
    getLocations();
  }, []);

  /**
   * Returns the content for the page, including a list of locations fetched
   * from the Travelo-Hey API.
   */
  return (
    <Container>
      <Stack container spacing={2}>
        {locations.map((item) => (
          <SingleResult
            key={item.place_id}
            image="http://via.placeholder.com/640x360"
            title={item.name}
            subtitle={item.formatted_phone_number}
            body={item.formatted_address}
          />
        ))}
        {/* Map a list of <SingleResult/>s
                with fetched API data here */}
        {/* They should have their onClick set to navigate
                to a router <Link /> in react-router-dom
                that points to a page that uses the location
                id as a URL parameter */}
      </Stack>
    </Container>
  );
}

export default SearchPage;
