import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function CountryDetails({
  image, name,
  safetyRank, safetyScore, countryNotes,
  countryWorkers, countryDiscProtection,
  countryCrimViolence, countryAdoption,
  countryGoodPlace, countryTransgender,
  countrySameSex, countryPropaganda,
  countryMarriage }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img alt={name} src={image} />
        </Grid>
        <Grid item xs={6}>
          <Typography color="text.secondary" component="div" data-testid="country-name">{name}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-safety">{`Country safety score: ${safetyScore}`}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-rank">{`Overall Safety Rank:${safetyRank}`}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-same-gender-marriage">{`Same-gender marriage: ${countryMarriage}`}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="text.secondary" component="div" data-testid="country-notes">{countryNotes}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-disc">{countryDiscProtection}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-workers">{countryWorkers}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-good">{`Percentage of residents who say ${name} is a good place to live: ${countryGoodPlace}`}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-transgender">{countryTransgender}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-propaganda">{countryPropaganda}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-same-sex-legal">{`Legality of same sex relationships: ${countrySameSex ? 'unknown' : countrySameSex}`}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-violence">{countryCrimViolence}</Typography>
          <Typography color="text.secondary" component="div" data-testid="country-adopt">{`Level of adoption recognition: ${countryAdoption}`}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

CountryDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  countryWorkers: PropTypes.string.isRequired,
  countryPropaganda: PropTypes.string.isRequired,
  countryDiscProtection: PropTypes.string.isRequired,
  countryCrimViolence: PropTypes.string.isRequired,
  countryAdoption: PropTypes.string.isRequired,
  countryGoodPlace: PropTypes.string.isRequired,
  countryTransgender: PropTypes.string.isRequired,
  countrySameSex: PropTypes.string.isRequired,
  safetyRank: PropTypes.string.isRequired,
  safetyScore: PropTypes.string.isRequired,
  countryNotes: PropTypes.string.isRequired,
  countryMarriage: PropTypes.string.isRequired,
};
