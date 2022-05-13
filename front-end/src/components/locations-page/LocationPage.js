import * as React from 'react';
import './LocationPage.css';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LocationDetails from './LocationDetails';
import SingleReview from '../general/SingleReview';
// mport { isTemplateHead } from 'typescript';

function LocationPage() {
  // grab place_id aka locationID in SearchPage.js
  console.log(useParams());
  const [id] = [useParams()];
  // const [locations, setLocations] = React.useState([]);
  // TODO: const for reviews and setReviews; extract from location
  const [location, setLocation] = React.useState([]);
  // const [reviews, setReviews] = React.useState([]);

  // FOR BETA RELEASE ONLY
  const hardCodedReviews = [
    [
      'Kimberly Pham',
      'https://www.google.com/maps/contrib/109479845758910778779/reviews',
      'en',
      'https://lh3.googleusercontent.com/a-/AOh14GjuC6lgfkqb46Z8huNLYs4dnyu0x05Lfco4Pw63cDM=s128-c0x00000000-cc-rp-mo-ba6',
      '5',
      'in the last week',
      'Love the fact that this place has wonderful outdoor seatings with an incredible cozy family vibe. The indoor setting seems to be pretty cool and comfortable, especially by the bar. We love the food here. Everything we had is delicious and fresh. We consider this a hidden gem in the Eastlake area. No reservation is accepted but usually, plenty of tables are available. No parking garage/ only street parking.',
      '1651442641',
    ],
    [
      'Joshua Kemper',
      'https://www.google.com/maps/contrib/104471502176307681430/reviews',
      'en',
      'https://lh3.googleusercontent.com/a-/AOh14GjqyhwzORT1f2437Ja7FQFMLSvE1vF9QJg1X0_QPA=s128-c0x00000000-cc-rp-mo',
      '5',
      'a month ago',
      'I came here with some coworkers and I showed up early. The bartender was awesome at welcoming me and letting me know where I could go while I waited for the rest of my group. The margaritas we had were awesome and I loved the chips & guac. Definitely going back!',
      '1647553957',
    ],
    [
      'Mark Lavery',
      'https://www.google.com/maps/contrib/104717300262470684657/reviews',
      'en',
      'https://lh3.googleusercontent.com/a/AATXAJwo51H0nItuzHg2MBMy2l_l7BBv9crwHy2lavOj=s128-c0x00000000-cc-rp-mo',
      '5',
      'a year ago',
      'Beautiful view with great service.  Manager Dustin was terrific, courteous & professional.',
      '1599400178',
    ],
    [
      'Jennifer Stefanik',
      'https://www.google.com/maps/contrib/116224092582494413566/reviews',
      'en',
      'https://lh3.googleusercontent.com/a/AATXAJzZ-0cSJziNU0gnIDmiLZw4U2u2417CWGu7XMGU=s128-c0x00000000-cc-rp-mo-ba2',
      '5',
      '2 months ago',
      'This place is a staple with my fiancé and I. We have come here for years for the great drinks and amazing deck/views. Food is good too and consistent. The staff have always been friendly. They also offer outdoor dining (with see through plastic walls/heaters) during the winter, which has been nice for the pandemic.',
      '1644298772',
    ],
    [
      'Justin Siebert',
      'https://www.google.com/maps/contrib/113415252828826523936/reviews',
      'en',
      'https://lh3.googleusercontent.com/a-/AOh14Gibxf5B90TCLzIKlFQ5AlEMnbJI6AzoD1hG5jaALw=s128-c0x00000000-cc-rp-mo-ba2',
      '4',
      '2 weeks ago',
      'The ppl and food are ok. I go here mostly to sit outside on a nice day. I think it’s crazy that three people can each have an entree and one drink/beer a price and the bill is like $140 plus tip (of course I still tipped over 20%) for lunch, but you have to order through QR which is fine, however, you also have to get your own plates, water, and silverware. Only the best for Seattle /s',
      '1650302788',
    ],
  ];

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
            // setReviews(items[key].reviews);
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
    /* <div>
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
    </div> */
    // FOR BETA RELEASE ONLY
    <div>
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
    </div>
  );
}

export default LocationPage;
