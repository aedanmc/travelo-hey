import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PropTypes from 'prop-types';

// import Link from 'react-router-dom';

// TODO: Add styling through useTheme

function SingleResult({ image, firstString, secondString, thirdString }) {
  return (
    <Card sx={{ display: 'flex', width: '50%', alignItems: 'flex-start' }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={image}
        />
        <Box>
          <CardContent sx={{ flex: '1 0 auto', justifyContent: 'flex-start', textAlign: 'left' }}>
            <Typography data-testid="location-title" component="div">
              {firstString}
            </Typography>
            <Typography data-testid="location-subtitle" color="text.secondary" component="div">
              {secondString}
            </Typography>
            <Typography data-testid="location-details" color="text.secondary" component="div">
              {thirdString}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

SingleResult.propTypes = {
  firstString: PropTypes.string.isRequired,
  secondString: PropTypes.string.isRequired,
  thirdString: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SingleResult;
