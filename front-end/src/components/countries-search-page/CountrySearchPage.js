import * as React from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import sampleData from './SampleCountry';
import CountrySearchBar from './CountryFilterSearch';
import traveloHeyLogo from '../../img/travelo-hey_logo.png';
import CountryDetails from './CountryDetails';

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
      <Container sx={{ marginTop: 3, padding: 2, width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {countryDisplay?.map((item) => (
            <CountryDetails
              image={traveloHeyLogo}
              name={item.name}
              safetyRank={item.rank}
              safetyScore={item.safetyScore}
              countryNotes={item.notes}
              countryWorkers={item.workerProtections}
              countryDiscProtection={item.protectionsAgainstDiscrimination}
              countryCrimViolence={item.criminalizationOfViolence}
              countryAdoption={item.adoptionRecognition}
              countryTransgender={item.transgenderLaws}
              countrySameSex={item.illegalSameSexRelationship}
              countryPropaganda={item.propagandaMoralityLaws}
              countryMarriage={item.legalizedMarriage}
            />
          ))}
        </Grid>
        <Outlet />
      </Container>
    </>
  );
}

export default CountrySearchPage;
