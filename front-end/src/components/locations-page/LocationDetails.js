import * as React from 'react';
import './LocationDetails.css';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function LocationDetails({
  image, name, address, phone, link, equalityScore, numReviews,
  googleRating, numRatings }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img alt={name} src={image} width="200" height="114" />
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
  image: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  link: PropTypes.string,
  equalityScore: PropTypes.number,
  numReviews: PropTypes.string,
  googleRating: PropTypes.number,
  numRatings: PropTypes.number,
};

LocationDetails.defaultProps = {
  image: '',
  name: '',
  address: '',
  phone: '',
  link: '',
  equalityScore: 0,
  numReviews: '',
  googleRating: 0,
  numRatings: 0,
};
