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

function SingleResult({ image, firstString, secondString }) {
  function updateFormAddrData(fullAddr) {
    return fullAddr.split(',');
  }

  return (
    // <CardActionArea component={Link} to={route}>
    <Card sx={{ maxWidth: '100%', minWidth: '100%' }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={image}
        />
        <Box>
          <CardContent sx={{ flex: '1 0 auto', justifyContent: 'flex-start', textAlign: 'left' }}>
            <Typography variant="h6" component="div" color="dark-blue" sx={{ textTransform: 'capitalize' }}>
              {firstString}
            </Typography>
            <Typography data-testid="location-details" color="text.secondary" component="div">
              {updateFormAddrData(secondString).map((addrPart) => (
                <p key={addrPart}>{addrPart}</p>
              ))}
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
  image: PropTypes.string.isRequired,
};

export default SingleResult;
