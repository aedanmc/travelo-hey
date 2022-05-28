import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import axios from 'axios';
// import {
//   Link,
//   Outlet,
// } from 'react-router-dom';
// import PropTypes from 'prop-types';
import SingleResult from '../general/SingleResult';
import sampleData from './SampleCountry';
import CountrySearchBar from './CountrySearchBar';

function CountrySearchPage() {
  // TODO: Add state management with hooks
  // TODO if time: add styling
  const [selectedCountry, countrySelected] = React.useState('');
  const [countriesList, setCountries] = React.useState([]);
  const [countryDisplay, setCountryDisplay] = React.useState([]);

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

  React.useEffect(() => {
    getCountries();
  }, []);

  const handleSearch = () => {
    // TODO: add data fetching here in response to event
    async function getMatchingCountry() {
      try {
        await axios.get();
      } catch (err) {
        console.log(err);
      }
      setCountryDisplay();
    }
    getMatchingCountry();
  };

  const country = sampleData;
  return (
    <>
      <CountrySearchBar countries={countriesList} onClick={countrySelected} />
      <Container width="100%" sx={{ margin: 2 }}>
        <Stack container="true" spacing={2} alignItems="center" direction="column" sx={{ margin: 2 }}>
          {countryDisplay.map((item) => (
            <Link key={item.place_id} to={`/country/${item.place_id}`}>
              <SingleResult
                image={item.icon}
                firstString={item.name}
                secondString={item.formatted_address}
              />
            </Link>
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default CountrySearchPage;
