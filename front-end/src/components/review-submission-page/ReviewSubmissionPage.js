import * as React from 'react';
import './ReviewSubmissionPage.css';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RadioGroup } from '@mui/material';
import ReviewInputRating from './ReviewInputRating';

// TODO: routing
export default function ReviewSubmissionPage() {
  // const params = useParams();
  // const id = params.place_id;
  const user = (Math.floor(Math.random() * 11) + 1);

  const defaultValues = {
    userID: user,
    placeID: 'ChIJu9LYj-QUkFQRxb9K4D7e9bI',
    inclusiveLanguages: '',
    neutralRestrooms: '',
    queerBusinessPromotions: '',
    accessibility: '',
    queerSignage: '',
    safety: 5,
    recommendedBusiness: '',
    review: '',
  };

  const methods = useForm({ defaultValues });
  const { handleSubmit, control } = methods;

  async function postReview({ data }) {
    try {
      // const userIDTest = data.userID;
      // const place = data.placeID;
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
    // TODO: back-end post
    // TODO: redirection to home page after submit
    postReview(data);
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
          />
        )}
      />
      <Controller
        name="inclusiveLanguages"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <FormLabel id="inclusive-languages">Do they use gender-inclusive language?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="neutralRestrooms"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <FormLabel id="neutral-restrooms">Do they offer gender-neutral restrooms?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="queerBusinessPromotions"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <FormLabel id="business-promotions">Do they promote or associate with other queer businesses/events?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="accessibility"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <FormLabel id="access">Do they offer accessibility accommodations?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="queerSignage"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <FormLabel id="queer-signage">Do they have welcoming queer signage?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="safety"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <FormLabel id="safeness">As a queer person, how safe did you feel at this business?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="recommendedBusiness"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <FormLabel id="recommended-business">Would you recommend the business to a queer friend?</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              <ReviewInputRating
                safety={false}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Button onClick={handleSubmit(onSubmit)} variant="contained" data-testid="review-submission-submit">
        Submit
      </Button>
    </div>
  );
}
