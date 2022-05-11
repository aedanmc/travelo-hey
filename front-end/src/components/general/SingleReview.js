import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// TODO: ensure styling is correct

// TODO: get rating to right-align within CardContent

// TODO: ensure rating as h4 is proper size
export default function SingleReview({ name, pic, link, rating, relativeTime, text }) {
  return (
    <div>
      <Card sx={{ display: 'flex', width: '50%', alignItems: 'flex-start' }}>
        <CardHeader>
          <Link to={link}>
            avatar=
            <Avatar
              alt={name}
              src={pic}
            />
            title=
            {name}
          </Link>
          subheader=
          {relativeTime}
        </CardHeader>
        <CardContent>
          <Typography data-testid="review-text" component="div">
            {text}
          </Typography>
          <Typography variant="h4" data-testid="rating" component="div">
            {rating}
          </Typography>
        </CardContent>
      </Card>
      <Route
        path={link}
        component={() => {
          window.location.replace({ link });
          return null;
        }}
      />
    </div>
  );
}

SingleReview.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  relativeTime: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
