import * as React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RadioGroup } from '@mui/material';
import ReviewInputRating from './ReviewInputRating';

/**
 * Functional component for rendering a dynamic version of the review submission page
 * for the Travelo-Hey! web app.
 *
 * @param { debug } debug: a testing flag for identifying
 * whether static or dynamic data fetching will be used.
 * @returns the review submission page for Travelo-Hey!'s web app.
 */
export default function ReviewSubmissionPage({ debug }) {
  const params = useParams();
  let id = params.place_id;
  if (debug) {
    id = 'test';
  }
  // random user ID generator
  // user IDs in server range from 1-11
  const user = (Math.floor(Math.random() * 11) + 1);

  // default form value and structure given
  // note: passed if form values have no changes
  const defaultValues = {
    userID: user,
    place_id: id,
    inclusiveLanguages: '',
    neutralRestrooms: '',
    queerBusinessPromotions: '',
    accessibility: '',
    queerSignage: '',
    safety: 5,
    recommendedBusiness: '',
    review: '',
  };

  // setting up control and navigation for form
  const methods = useForm({ defaultValues });
  const { handleSubmit, control } = methods;
  const navigate = useNavigate();

  /**
  * Sends the review submission to the database
  *
  * @returns {Promise<void>} reviews object in the database
  */
  async function postReview(data) {
    try {
      const response = await axios.post(
        'http://localhost:8080/reviews/new',
        data,
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  // submits review to database and redirects user to home page
  const onSubmit = (data) => {
    console.log(data);
    postReview(data);
    // note: using <Link> to="/" did not redirect page properly
    navigate('/');
  };

  // creates a singular radio/multiple choice form question and label
  // for each required rating question
  /**
  * Creates a singular rating multiple choice question that contributes to the equality rating
  *
  * @returns the radio options and question to be answered
  */
  function renderQuestion(onChange, value, testID, formID, question, safety) {
    return (
      <FormControl data-testid={testID}>
        <Grid container columnSpacing={2}>
          <Grid item sx={{ marginTop: 1 }}>
            <FormLabel id={formID}>{question}</FormLabel>
          </Grid>
          <Grid item>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={safety}
                uniqueID={id}
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </FormControl>
    );
  }

  /**
  * Returns the content for the review submission page, including all 7 equality rating
  * questions and the text input field for an experience comment. 
  */
  return (
    <Container>
      <Typography variant="h6" data-testid="review-submission-title" sx={{ marginTop: 2, marginBottom: 2 }}> Write Your Review </Typography>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sx={{ marginLeft: 2, marginRight: 2 }}>
          <Controller
            name="inclusiveLanguages"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-inclusive-languages', 'inclusive-languages', 'Do they use gender-inclusive language?', false)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Controller
            name="neutralRestrooms"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-neutral-restrooms', 'neutral-restrooms', 'Do they offer gender-neutral restrooms?', false)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Controller
            name="queerBusinessPromotions"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-business-promotions', 'business-promotions', 'Do they promote or associate with other queer businesses/events?', false)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Controller
            name="accessibility"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-accessibility', 'access', 'Do they offer accessibility accommodations?', false)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Controller
            name="queerSignage"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-queer-signage', 'queer-signage', 'Do they have welcoming queer signage?', false)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Controller
            name="safety"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-safety', 'safeness', 'As a queer person, how safe did you feel at this business?', true)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Controller
            name="recommendedBusiness"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-recommended-business', 'recommended-business', 'Would you recommend the business to a queer friend?', false)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Controller
            name="review"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{ width: '70%' }}
                onChange={onChange}
                value={value}
                variant="filled"
                multiline
                rows={10}
                label="Write details about your experience"
                data-testid="review-review-content"
              />
            )}
          />
        </Grid>
      </Grid>
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        data-testid="review-submission-submit"
        sx={{ marginTop: 3, marginBottom: 3 }}
      >
        Submit
      </Button>
    </Container>
  );
}

ReviewSubmissionPage.propTypes = {
  debug: PropTypes.bool.isRequired,
};
