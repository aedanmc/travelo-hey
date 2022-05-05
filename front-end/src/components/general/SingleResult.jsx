import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image from '../../quebec-church.jpg';

// TODO: Add styling through useTheme and state through
// useState

export default function SingleResult() {
  return (
    <CardActionArea>
      <Card sx={{ display: 'flex', width: '60%' }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={image}
          alt="Old Quebec Church"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <CardContent sx={{ flex: '1 0 auto', justifyContent: 'flex-start', textAlign: 'left' }}>
            <Typography data-testid="location-title" component="div">
              Lorem Ipsum
            </Typography>
            <Typography data-testid="location-subtitle" color="text.secondary" component="div">
              Old Quebec
            </Typography>
            <Typography data-testid="location-details" color="text.secondary" component="div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
}
