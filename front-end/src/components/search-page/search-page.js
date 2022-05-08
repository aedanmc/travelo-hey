import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import axios from 'axios';
import NameSearch from './name-search';
import FilterSearch from './filter-search';
import SingleResult from '../general/SingleResult';

function SearchPage() {
  const [locations, setLocations] = React.useState([]);

  // TODO: Set up useEffect() to render data on page load
  // TODO: In useEffect(), make a call to API using fetch/axios

  // const classes = useStyles();

  // TODO questions:
  // fetch or axios?
  // how do we prevent errors?
  // how do we prevent race conditions with data fetching in useEffect?

  React.useEffect(() => {
    const getLocations = async () => {
      try {
        const locationResponse = await axios.get('https://cse403-sp22-travelo-hey.uw.r.appspot.com/');
        setLocations(locationResponse.data);
      } catch (err) {
        alert(err);
      }
    };
    getLocations();
  }, []);

  return (
    <FilterSearch></FilterSearch>
    <Container>
      <Stack container spacing={2}>
        {locations.map((item) => (
          <SingleResult
            key={item.bid}
            image={item.image}
            title={item.name}
            subtitle={item.number}
            body=""
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
