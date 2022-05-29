import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function CountryDetails({
  image, name,
  safetyRank, safetyScore, countryNotes,
  countryWorkers, countryDiscProtection,
  countryCrimViolence, countryAdoption,
  countryTransgender,
  countrySameSex, countryPropaganda,
  countryMarriage }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            alt={name}
            src={image}
            height="350px"
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'left', justifyContent: 'space-evenly', mt: 7 }}>
          <Typography color="dark-blue" data-testid="country-name" variant="h1" component="div" sx={{ textTransform: 'capitalize' }}>{name}</Typography>
          <Typography color="text.secondary" component="div" variant="h3" data-testid="country-safety">{`Country safety score: ${safetyScore}`}</Typography>
          <Typography color="text.secondary" component="div" variant="h3" data-testid="country-rank">{`Overall Safety Rank:${safetyRank}`}</Typography>
          <Typography color="text.secondary" component="div" variant="h4" data-testid="country-same-gender-marriage">{`Same-gender marriage: ${countryMarriage}`}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'flex-start', textAlign: 'left' }}>
          <Typography color="text.secondary" component="div" variant="h5" data-testid="country-notes">{`General notes: ${countryNotes === null ? 'none' : countryNotes}`}</Typography>
          <Typography color="text.secondary" component="div" variant="h5" data-testid="country-disc">{`Protection against discrimination: ${countryDiscProtection}`}</Typography>
          <Typography color="text.secondary" component="div" variant="h5" data-testid="country-workers">{`Worker protections: ${countryWorkers}`}</Typography>
          <Typography color="text.secondary" component="div" variant="h5" data-testid="country-transgender">{`Transgender Rights in ${name}: ${countryTransgender}`}</Typography>
          <Typography color="text.secondary" component="div" variant="h5" data-testid="country-propaganda">{countryPropaganda}</Typography>
          <Typography color="text.secondary" component="div" variant="h5" data-testid="country-same-sex-legal">{`Legality of same sex relationships: ${countrySameSex === null ? 'unknown' : countrySameSex}`}</Typography>
          <Typography color="text.secondary" component="div" variant="h5" data-testid="country-violence">{`Overall criminalization of violent crime: ${countryCrimViolence}`}</Typography>
          <Typography color="text.secondary" component="div" variant="h5" data-testid="country-adopt">{`Level of adoption recognition: ${countryAdoption}`}</Typography>
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
  countryTransgender: PropTypes.string.isRequired,
  countrySameSex: PropTypes.string.isRequired,
  safetyRank: PropTypes.string.isRequired,
  safetyScore: PropTypes.string.isRequired,
  countryNotes: PropTypes.string.isRequired,
  countryMarriage: PropTypes.string.isRequired,
};
