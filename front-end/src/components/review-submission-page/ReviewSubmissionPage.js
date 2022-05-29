import * as React from 'react';
import './ReviewSubmissionPage.css';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RadioGroup } from '@mui/material';
import ReviewInputRating from './ReviewInputRating';

export default function ReviewSubmissionPage({ debug }) {
  const params = useParams();
  var id = params.place_id;
  if (debug) {
    id = 'test';
  }
  // random user ID generator 
  const user = (Math.floor(Math.random() * 11) + 1);

  // default form value and structure given
  // note: passed if values have no changes
  const defaultValues = {
    userID: user,
    place_ID: id,
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

  // POST request to back-end
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

  const onSubmit = (data) => {
    console.log(data);
    postReview(data);
    // potential SnackBar/toast message upon successful post?
    navigate('/');
    // note: using <Link> to="/" did not redirect page properly
  };

  return (
    <div>
      <Typography variant="h6" data-testid="review-submission-title"> Write Your Review </Typography>
      <Controller
        name="review"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
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
      <Controller
        name="inclusiveLanguages"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl data-testid="review-inclusive-languages">
            <FormLabel id="inclusive-languages">Do they use gender-inclusive language?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
                uniqueID={id}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="neutralRestrooms"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl data-testid="review-neutral-restrooms">
            <FormLabel id="neutral-restrooms">Do they offer gender-neutral restrooms?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
                uniqueID={id}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="queerBusinessPromotions"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl data-testid="review-business-promotions">
            <FormLabel id="business-promotions">Do they promote or associate with other queer businesses/events?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
                uniqueID={id}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="accessibility"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl data-testid="review-accessibility">
            <FormLabel id="access">Do they offer accessibility accommodations?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
                uniqueID={id}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="queerSignage"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl data-testid="review-queer-signage">
            <FormLabel id="queer-signage">Do they have welcoming queer signage?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
                uniqueID={id}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="safety"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl data-testid="review-safety">
            <FormLabel id="safeness">As a queer person, how safe did you feel at this business?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety
                uniqueID={id}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="recommendedBusiness"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl data-testid="review-recommended-business">
            <FormLabel id="recommended-business">Would you recommend the business to a queer friend?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
                uniqueID={id}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        data-testid="review-submission-submit"
      >
        Submit
      </Button>
    </div>
  );
}
