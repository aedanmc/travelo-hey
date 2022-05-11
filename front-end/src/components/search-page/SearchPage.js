import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import axios from 'axios';
// import NameSearch from './name-search';
import SingleResult from '../general/SingleResult';
import image from '../../quebec-church.jpg';
import FilterSearch from './FilterSearch';

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
        const locationResponse = await axios.get('http://localhost:8080');
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
    <Container width="100%" sx={{ margin: 2 }}>
      <FilterSearch />
      <Stack container="true" spacing={2} alignItems="center" direction="column" sx={{ margin: 2 }}>
        {locations.map((item) => (
          <SingleResult
            key={item.place_id}
            image="http://via.placeholder.com/640x360"
            name={item.name}
            contact={item.formatted_phone_number}
            address={item.formatted_address}
          />
        ))}
        {/* Map a list of <SingleResult/>s
                with fetched API data here */}
        {/* They should have their onClick set to navigate
                to a router <Link /> in react-router-dom
                that points to a page that uses the location
                id as a URL parameter */}
        <SingleResult
          image={image}
          name="Lorem Ipsum"
          contact="Lorem Ipsum"
          address="Lorem Ipsum"
        />
      </Stack>
    </Container>
  );
}

export default SearchPage;
