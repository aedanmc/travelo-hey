import * as React from 'react';
import './LocationPage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import LocationDetails from './LocationDetails';
import SingleReview from '../general/SingleReview';
import SingleReviewTravelo from '../general/SingleReviewTravelo';

function LocationPage() {
  // Grab place_id aka locationID in SearchPage.js
  const params = useParams();
  const id = params.place_id;
  const [location, setLocation] = React.useState([]);
  const [ratings, setRatings] = React.useState([]); // Google Places API ratings
  // const [reviews, setReviews] = React.useState([]); // Travelo-Hey!-specific reviews

  const staticReviews = [
    ['1', '0', '1', '1', '0', '3', '1', 'March 28, 2022', 'They have some work to do, but is decently queer friendly!'],
    ['0', '0', '0', '0', '0', '1', '0', 'May 29, 2022', 'Avoid at all costs!'],
    ['1', '1', '1', '1', '1', '5', '1', 'June 30, 2021', 'The most queer-friendly place on earth!'],
    ['1', '0', '1', '1', '1', 'null', '1', 'April 1, 2022', 'I hope answering unsure does not break this page'],
    ['1', '1', '0', '1', '0', '2', '0', 'June 1 2000', 'Meh'],
  ];

  // TODO: check that the id is a valid location.place_id

  // Fetch location data and review data, store location and reviews that match id
  React.useEffect(() => {
    const getLocations = async () => {
      try {
        const locationResponse = await axios.post('http://localhost:8080/business', { place_id: id });
        const [items] = [locationResponse.data.result];
        setLocation(items);
        setRatings(items.reviews);

        // const reviewsResponse = await axios.post('http://localhost:8080/reviews', { place_id: id });
        // const [elements] = [reviewsResponse.data.result];
        // setReviews(elements.th_reviews);
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
      <Grid container spacing={0.5}>
        <Grid container item xs={6}>
          {ratings.map((rating) => (
            <Grid item xs={12}>
              <SingleReview
                name={rating.author_name}
                pic={rating.profile_photo_url}
                link={rating.author_url}
                rating={rating.rating}
                relativeTime={rating.relative_time_description}
                text={rating.text}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={6} spacing={0.5}>
          {staticReviews.map((staticReview) => (
            <Grid item xs={12}>
              <SingleReviewTravelo
                equalityScore={
                  parseInt(staticReview[0], 10)
                  + parseInt(staticReview[1], 10)
                  + parseInt(staticReview[2], 10)
                  + parseInt(staticReview[3], 10)
                  + parseInt(staticReview[4], 10)
                  + parseInt(staticReview[5], 10)
                  + parseInt(staticReview[6], 10)
                }
                relativeTime={staticReview[7]}
                text={staticReview[8]}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* {reviews.map((review) => (
        // Is this a good name to use for component?
        // TODO: look into more elegant solution to calculating equality score
        // TODO: create some TH-specific reviews to test that they appear properly
        <SingleReviewTravelo
          equalityScore={
            parseInt(review.inclusiveLanguages, 10)
            + parseInt(review.neutralRestrooms, 10)
            + parseInt(review.queerBusinessPromotion, 10)
            + parseInt(review.accessibility, 10)
            + parseInt(review.queerSignage, 10)
            + parseInt(review.safety, 10)
            + parseInt(review.recommendedBusiness, 10)
          }
          relativeTime={review.createdAt}
          text={review.review}
        />
        ))} */}
    </div>
  );
}

export default LocationPage;
