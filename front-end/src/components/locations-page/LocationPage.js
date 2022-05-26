import * as React from 'react';
import './LocationPage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LocationDetails from './LocationDetails';
import SingleReview from '../general/SingleReview';

function LocationPage() {
  // Grab place_id aka locationID in SearchPage.js
  const params = useParams();
  const id = params.place_id;
  // TODO: const for reviews and setReviews; extract from location
  const [location, setLocation] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  // TODO: check that the id is a valid location.place_id

  // Fetch location data, store location that matches id
  React.useEffect(() => {
    const getLocations = async () => {
      try {
        const locationResponse = await axios.post('http://localhost:8080/business', { place_id: id });
        const [items] = [locationResponse.data.result];
        setLocation(items);
        setReviews(items.reviews);
      } catch (err) {
        alert(err);
      }
    };
    getLocations();
  }, []);

  // Failsafe in case location does not exist in fetched data
  // TODO: redirect/useHistory to go back to previous page?

  return (
    <div>
      <LocationDetails
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
