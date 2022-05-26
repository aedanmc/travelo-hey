import * as React from 'react';
import './LocationPage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LocationDetails from './LocationDetails';
import SingleReview from '../general/SingleReview';
import SingleReviewTravelo from '../general/SingleReviewTravelo';

function LocationPage() {
  // Grab place_id aka locationID in SearchPage.js
  const params = useParams();
  const id = params.place_id;
  
  const [location, setLocation] = React.useState([]);
  const [ratings, setRatings] = React.useState([]); // Google Places API ratings
  const [reviews, setReviews] = React.useState([]); // Travelo-Hey!-specific reviews

  // TODO: check that the id is a valid location.place_id

  // Fetch location data and review data, store location and reviews that match id
  React.useEffect(() => {
    const getLocations = async () => {
      try {
        const locationResponse = await axios.post('http://localhost:8080/business', { place_id: id });
        const [items] = [locationResponse.data.result];
        setLocation(items);
        setRatings(items.reviews);

        const reviewsResponse = await axios.post('http://localhost:8080/reviews', { place_id: id });
        const [elements] = [reviewsResponse.data.result];
        setReviews(elements.th_reviews);
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
      {ratings.map((rating) => (
        <SingleReview
          name={rating.author_name}
          pic={rating.profile_photo_url}
          link={rating.author_url}
          rating={rating.rating}
          relativeTime={rating.relative_time_description}
          text={rating.text}
        />
      ))}
      ;
      {reviews.map((review) => (
        // Is this a good name to use for component?
        // TODO: look into more elegant solution to calculating equality score
        // TODO: create some TH-specific reviews to test that they appear properly
        <SingleReviewTravelo
          equalityScore={
            (parseInt(review.inclusiveLanguages, 10)
            + parseInt(review.neutralRestrooms, 10)
            + parseInt(review.queerBusinessPromotion, 10)
            + parseInt(review.accessibility, 10)
            + parseInt(review.queerSignage, 10)
            + parseInt(review.safety, 10)
            + parseInt(review.recommendedBusiness, 10)).toString()
          }
          relativeTime={review.createdAt}
          text={review.review}
        />
      ))}
    </div>
  );
}

export default LocationPage;
