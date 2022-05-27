import * as React from 'react';
import './ReviewSubmissionPage.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ReviewInputText from './ReviewInputText';
import ReviewInputRating from './ReviewInputRating';

export default function ReviewSubmissionPage() {
  const params = useParams();
  const id = params.place_id;
  const defaultValues = {
    textValue: '',
    ratingValue: 0,
  };
  const methods = useForm({ defaultValues });
  const { handleSubmit, control } = methods;

  async function postReview() {
    try {
      await axios.post('http://localhost:8080/reviews/new', { userID: 1,
        placeID: id,
        inclusiveLanguages: null,
        neutralRestrooms: null,
        queerBusinessPromotion: null,
        accessibility: null,
        queerSignage: null,
        safety: null,
        recommendedBusiness: null,
        review: null })
        .then((response) => {
          console.log(response);
          console.log(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const onSubmit = () => {
    React.useEffect(() => {
      postReview();
    }, []);
  };

  return (
    <Paper>
      <Typography variant="h6" data-testid="review-submission-title"> Write Your Review </Typography>
      <ReviewInputText name="textValue" control={control} label="Write details about your experience" data-testid="review-submission-text" />
      <ReviewInputRating name="ratingValue" control={control} data-testid="review-submission-rating" />
      <Button onClick={handleSubmit(onSubmit)} variant="contained" data-testid="review-submission-submit">
        Submit
      </Button>
    </Paper>
  );
}
