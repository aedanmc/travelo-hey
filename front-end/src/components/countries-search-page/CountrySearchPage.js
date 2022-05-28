import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import SingleResult from '../general/SingleResult';
// import sampleData from './SampleCountry';
import CountrySearchBar from './CountryFilterSearch';
import traveloHeyLogo from '../../img/travelo-hey_logo.png';

function CountrySearchPage() {
  // TODO: Add state management with hooks
  // TODO if time: add styling
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

  return (
    <>
      <CountrySearchBar countries={countriesList} onClick={setCountryDisplay} />
      <Container width="100%" sx={{ margin: 2 }}>
        <Stack container="true" spacing={2} alignItems="center" direction="column" sx={{ margin: 2 }}>
          {countryDisplay?.map((item) => (
            <Link key={item.name} to={`/country/${item.name}`}>
              <SingleResult
                image={traveloHeyLogo}
                firstString={item.name}
                secondString={item.safetyScore}
              />
            </Link>
          ))}
        </Stack>
        <Outlet />
      </Container>
    </>
  );
}

export default CountrySearchPage;
