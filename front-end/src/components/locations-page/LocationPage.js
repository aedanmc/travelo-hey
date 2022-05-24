import * as React from 'react';
import './LocationPage.css';
import Typography from '@mui/material/Typography';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import LocationDetails from './LocationDetails';
import SingleReview from '../general/SingleReview';
// mport { isTemplateHead } from 'typescript';

function LocationPage() {
  // grab place_id aka locationID in SearchPage.js
  const url = new URLSearchParams(window.location.search);
  const id = url.get('place_id');
  console.log(id);
  // TODO: const for reviews and setReviews; extract from location
  const [location, setLocation] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  // TODO: check that the id is a valid location.place_id

  // fetch location data, store location that matches id
  React.useEffect(() => {
    const getLocations = async () => {
      try {
        const locationResponse = await axios.get('http://localhost:8080');
        const [items] = [locationResponse.data.result];
        console.log(items);
        // console.log(data.result);
        // const items = [];
        const keys = Object.keys(items);
        keys.forEach((key) => {
          console.log(items[key]);
          console.log(items[key].place_id);
          console.log(id);
          if (items[key].place_id === id) {
            // items.push(result[key]);
            setLocation(items[key]);
            setReviews(items[key].reviews);
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
  // const { reviews } = location.reviews;

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
    // FOR BETA RELEASE ONLY
    /* <div>
      <LocationDetails
        image="http://via.placeholder.com/640x360"
        name="Little Water Cantina"
        address="2865 Eastlake Ave E, Seattle, Wa 98102, USA"
        phone="(206) 466-6171"
        link="http://www.littlewatercantina.com"
        equalityScore="3.1"
        numReviews="328"
        googleRating="4"
        numRatings="632"
        country="Country: United States of America"
        countrySafety="Safety Score: B+"
      />
      {hardCodedReviews.map((review) => (
        <SingleReview
          name={review[0]}
          pic={review[2]}
          link={review[1]}
          rating={review[4]}
          relativeTime={review[5]}
          text={review[6]}
        />
      ))}
      </div> */
  );
}

export default LocationPage;
