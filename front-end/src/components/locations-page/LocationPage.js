import * as React from 'react';
import './LocationPage.css';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LocationDetails from './LocationDetails';
import SingleReview from '../general/SingleReview';

function LocationPage() {
  // grab place_id aka locationID in SearchPage.js
  const { id } = useParams();
  // const [locations, setLocations] = React.useState([]);
  // TODO: const for reviews and setReviews; extract from location
  const [location, setLocation] = React.useState([]);

  // TODO: check that the id is a valid location.place_id

  // fetch location data, store location that matches id
  React.useEffect(() => {
    const getLocations = async () => {
      try {
        const locationResponse = await axios.get('http://localhost:8080');
        const { result } = locationResponse.data;
        // const items = [];
        const keys = Object.keys(result);
        keys.forEach((key) => {
          if (result[key].place_id === id) {
            // items.push(result[key]);
            setLocation(result[key]);
          }
        });
        // setLocations(items);
      } catch (err) {
        alert(err);
      }
    };
    getLocations();
  }, []);

  // failsafe in case location does not exist in fetched data
  // TODO: redirect/useHistory to go back to previous page?
  if (typeof location === 'undefined') {
    return (
      // <Redirect to='/'/>
      <div>
        <Typography variant="h1">ERROR: location not found</Typography>
      </div>
    );
  }

  const { reviews } = location.reviews;

  return (
    <div>
      <LocationDetails
        // image={location.photos}
        image="/broken-image.jpg"
        name={location.name}
        address={location.formatted_address}
        phone={location.formatted_phone_number}
        link={location.website}
        equalityScore={location.equality_rating}
        numReviews={location.equality_ratings_total}
        googleRating={location.rating}
        numRatings={location.user_ratings_total}
      />
      {reviews.map((review) => (
        <SingleReview
          name={review.author_name}
          pic={review.profile_photo_url}
          link={review.author_url}
          rating={review.rating}
          relativeTime={review.relative_time_description}
          text={review.text}
        />
      ))}
      ;
    </div>
  );
}

export default LocationPage;
