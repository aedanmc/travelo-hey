import * as React from 'react';
import './LocationDetails.css';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function LocationDetails({
  image, name, address, phone, link, equalityScore, numReviews,
  googleRating, numRatings, country, countrySafety }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img alt={name} src={image} />
        </Grid>
        <Grid item xs={6}>
          <Typography color="text.secondary" component="div" data-testid="location-title">{name}</Typography>
          <Typography color="text.secondary" component="div" data-testid="location-address">{address}</Typography>
          <Typography color="text.secondary" component="div" data-testid="location-phone">{phone}</Typography>
          {// TODO: Make this link a button instead
          }
          <Link to={link} color="text.secondary" component="div" data-testid="location-link">Website</Link>
        </Grid>
        {// TODO: improve styling - text above reviews does not appear to be centered properly
        }
        <Grid item xs={6}>
          <Typography variant="h4" component="div" data-testid="location-google-rating">
            Google Rating:
            {googleRating}
          </Typography>
          <Typography color="text.secondary" component="div" data-testid="location-num-ratings">{numRatings}</Typography>
          <Typography color="text.secondary" component="div" data-testid="location-country">{country}</Typography>
          <Typography color="text.secondary" component="div" data-testid="location-country-safety">{countrySafety}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" component="div" data-testid="location-equality-score">
            Equality Score:
            {equalityScore}
          </Typography>
          <Typography color="text.secondary" component="div" data-testid="location-num-reviews">{numReviews}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

LocationDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  equalityScore: PropTypes.string.isRequired,
  numReviews: PropTypes.string.isRequired,
  googleRating: PropTypes.string.isRequired,
  numRatings: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  countrySafety: PropTypes.string.isRequired,
};
