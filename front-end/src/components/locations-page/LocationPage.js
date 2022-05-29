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
  const [reviews, setReviews] = React.useState([]); // Travelo-Hey!-specific reviews

  const staticReviews = [
    ['1', '0', '1', '1', '0', '3', '1', 'March 28, 2022', 'They have some work to do, but is decently queer friendly!'],
    ['0', '0', '0', '0', '0', '1', '0', 'May 29, 2022', 'Avoid at all costs!'],
    ['1', '1', '1', '1', '1', '5', '1', 'June 30, 2021', 'The most queer-friendly place on earth!'],
    ['1', '0', '1', '1', '1', '', '1', 'April 1, 2022', 'I hope answering unsure does not break this page'],
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

        const reviewsResponse = await axios.post('http://localhost:8080/reviews', { place_id: id });
        const [elements] = [reviewsResponse.data.result];
        if (elements === undefined) {
          setReviews(undefined);
        } else {
          setReviews(elements.th_reviews);
        }
      } catch (err) {
        alert(err);
      }
    };
    getLocations();
  }, []);

  function calculateEqualityScore(review) {
    let sum = 0;
    if (review.inclusiveLanguages !== '') {
      sum += parseInt(review.inclusiveLanguages, 10);
    } else {
      sum += 0.5;
    }
    if (review.neutralRestrooms !== '') {
      sum += parseInt(review.neutralRestrooms, 10);
    } else {
      sum += 0.5;
    }
    if (review.queerBusinessPromotion !== '') {
      sum += parseInt(review.queerBusinessPromotion, 10);
    } else {
      sum += 0.5;
    }
    if (review.accessibility !== '') {
      sum += parseInt(review.inclusiveLanguages, 10);
    } else {
      sum += 0.5;
    }
    if (review.queerSignage !== '') {
      sum += parseInt(review.neutralRestrooms, 10);
    } else {
      sum += 0.5;
    }
    if (review.safety !== '') {
      sum += parseInt(review.queerBusinessPromotion, 10);
    } else {
      sum += 2.5;
    }
    if (review.recommendedBusiness !== '') {
      sum += parseInt(review.recommendedBusiness, 10);
    } else {
      sum += 0.5;
    }
    return (sum);
  }

  function calculateEqualityScoreStatic(staticReview) {
    let sum = 0;
    for (let i = 0; i < 7; i += 1) {
      if (staticReview[i] !== '') {
        sum += parseInt(staticReview[i], 10);
      } else if (i === 5) {
        sum += 2.5;
      } else {
        sum += 0.5;
      }
    }
    return sum;
  }

  function getStaticReviews() {
    return (
      <Grid container item xs={6} spacing={0.5}>
        {staticReviews.map((staticReview) => (
          <Grid item xs={12}>
            <SingleReviewTravelo
              equalityScore={
                calculateEqualityScoreStatic(staticReview)
              }
              relativeTime={staticReview[7]}
              text={staticReview[8]}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  function getDynamicReviews() {
    return (
      <Grid container item xs={6} spacing={0.5}>
        {reviews.map((review) => (
          <Grid item xs={12}>
            <SingleReviewTravelo
              equalityScore={
                calculateEqualityScore(review)
              }
              relativeTime={review.createdAt}
              text={review.review}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  function getTraveloReviews() {
    if (reviews === undefined) {
      return getStaticReviews();
    }
    return getDynamicReviews();
  }

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
          {
            getTraveloReviews()
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default LocationPage;
