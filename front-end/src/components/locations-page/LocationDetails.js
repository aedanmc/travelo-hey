import * as React from 'react';
import './LocationDetails.css';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function LocationDetails({
  image, name, address, phone, link, equalityScore, numReviews, googleRating, numRatings }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img alt={name} src={image} />
        </Grid>
        <Grid item xs={6}>
          <Typography color="text.secondary" component="div">{name}</Typography>
          <Typography color="text.secondary" component="div">{address}</Typography>
          <Typography color="text.secondary" component="div">{phone}</Typography>
          {// TODO: Make this link a button instead
          }
          <Link to={link} color="text.secondary" component="div">Website</Link>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" component="div">{equalityScore}</Typography>
          <Typography color="text.secondary" component="div">{numReviews}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" component="div">{googleRating}</Typography>
          <Typography color="text.secondary" component="div">{numRatings}</Typography>
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
};
