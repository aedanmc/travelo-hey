import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'react-router-dom';

// TODO: Add styling through useTheme

export default function SingleResult({ image, title, subtitle, body, route }) {
  return (
    <CardActionArea component={Link} to={route}>
      <Card sx={{ display: 'flex', width: '60%' }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={image}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <CardContent sx={{ flex: '1 0 auto', justifyContent: 'flex-start', textAlign: 'left' }}>
            <Typography data-testid="location-title" component="div">
              {title}
            </Typography>
            <Typography data-testid="location-subtitle" color="text.secondary" component="div">
              {subtitle}
            </Typography>
            <Typography data-testid="location-details" color="text.secondary" component="div">
              {body}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
}
