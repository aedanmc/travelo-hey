import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

// Single TH review with equality score, calculated by summing responses for each question
export default function SingleReviewTravelo({ equalityScore, relativeTime, text }) {
  return (
    <div>
      <Card sx={{ display: 'flex', width: '200%', alignItems: 'center', justifyContent: 'center' }}>
        <CardContent>
          <Typography data-testid="review-text" component="div">
            {text}
          </Typography>
          <Typography variant="h4" data-testid="equalityScore" component="div">
            {equalityScore}
          </Typography>
          <Typography data-testid="review-time" component="div">
            {relativeTime}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SingleReviewTravelo.propTypes = {
  equalityScore: PropTypes.number,
  relativeTime: PropTypes.string,
  text: PropTypes.string,
};

SingleReviewTravelo.defaultProps = {
  equalityScore: 0,
  relativeTime: 'January 1, 1970',
  text: 'Placeholder review text',
};
