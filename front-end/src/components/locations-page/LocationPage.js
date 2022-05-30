import * as React from 'react';
import './LocationPage.css';
// import { useParams, Link, Outlet } from 'react-router-dom';
import { useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LocationDetails from './LocationDetails';
import SingleReview from '../general/SingleReview';
import SingleReviewTravelo from '../general/SingleReviewTravelo';
import logo from '../../img/travelo-hey_logo.png';

function LocationPage() {
  // Grab place_id aka locationID in SearchPage.js
  const params = useParams();
  const id = params.place_id;
  const [location, setLocation] = React.useState([]);
  const [ratings, setRatings] = React.useState([]); // Google Places API ratings
  const [reviews, setReviews] = React.useState([]); // Travelo-Hey!-specific reviews

  const staticReviews = [
    ['1', '0', '1', '1', '0', '3', '1', 'March 28, 2022', '(SAMPLE) They have some work to do, but is decently queer friendly!'],
    ['0', '0', '0', '0', '0', '1', '0', 'May 29, 2022', '(SAMPLE) Avoid at all costs!'],
    ['1', '1', '1', '1', '1', '5', '1', 'June 30, 2021', '(SAMPLE) The most queer-friendly place on earth!'],
    ['1', '0', '1', '1', '1', '', '1', 'April 12, 2022', '(SAMPLE) Great vibe, but mostly frequented by straight folks. Not particularly a safe nor dangerous space for LGBTQ+ folx.'],
    ['1', '1', '0', '1', '0', '2', '0', 'June 1, 2000', '(SAMPLE) Feels like they tried to be queer-friendly, but ultimately are missing a lot of key features, such as queer-friendly signage.'],
  ];

  // const navigate = useNavigate();
  // const newReview = () => {
  //   navigate(`/business/${id}/review`);
  // };

  // TODO: check that the id is a valid location.place_id

  // Fetch location data and review data, store location and reviews that match id
  React.useEffect(() => {
    const getLocations = async () => {
      try {
        const locationResponse = await axios.post(
          'http://localhost:8080/business',
          { place_id: id },
        );
        const [items] = [locationResponse.data.result];
        console.log(items);
        console.log(locationResponse);
        setLocation(items);
        setRatings(items.reviews);

        const reviewsResponse = await axios.post('http://localhost:8080/reviews', { place_id: id });
        const [elements] = [reviewsResponse.data.result];
        if (elements) {
          setReviews(elements.th_reviews);
        } else {
          setReviews(undefined);
        }
      } catch (err) {
        alert(err);
      }
    };
    getLocations();
  }, []);

  // calculates the equality score for dynamic reviews. If someone has answered Unsure to a
  // question, the score is calculated to be the mean of the possible scores
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

  // Retrieves static reviews to display equality information for locations
  // without submitted reviews, and for testing purposes
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

  // Retrieves a location's TH-specific reviews submitted by other users of the web app.
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

  // failsafe in case chosen location has no TH-created reviews
  // populates with static reviews instead.
  function getTraveloReviews() {
    if (reviews) {
      return getDynamicReviews();
    }
    return getStaticReviews();
  }

  // Failsafe in case location does not exist in fetched data
  // TODO: redirect/useHistory to go back to previous page?

  return (
    <div>
      <LocationDetails
        image={logo}
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
      <Grid item xs={12} spacing={0.5}>
        <Button variant="contained" href={`../business/${location.place_id}/review`} sx={{ marginTop: 3, marginBottom: 3 }}>
          Post a Review
        </Button>
      </Grid>
      <Outlet />
    </div>
  );
}
export default LocationPage;
