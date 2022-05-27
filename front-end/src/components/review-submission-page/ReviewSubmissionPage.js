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

  const [languages, setInclusiveLanguages] = React.useState('');
  const [restrooms, setNeutralRestrooms] = React.useState('');
  const [promotion, setQueerBusinessPromotion] = React.useState('');
  const [access, setAccessibility] = React.useState('');
  const [signage, setQueerSignage] = React.useState('');
  const [safeness, setSafety] = React.useState('');
  const [recommend, setRecommendedBusiness] = React.useState('');
  const [text, setReview] = React.useState('');

  const defaultValues = {
    userID: 1,
    placeID: 'test_place_id_2',
    inclusiveLanguages: null,
    neutralRestrooms: null,
    queerBusinessPromotion: null,
    accessibility: null,
    queerSignage: null,
    safety: null,
    recommendedBusiness: null,
    review: null,
  };

  const options = {
    yes: 1,
    no: 0,
    unsure: null,
  };

  const safetyOptions = {
    veryUnsafe: 1,
    unsafe: 2,
    neither: 3,
    safe: 4,
    verySafe: 5,
  };

  const methods = useForm({ defaultValues });
  const { handleSubmit, control } = methods;

  async function postReview() {
    try {
      // TODO: ask back-end about user ID since no longer having sign-in
      await axios.post('http://localhost:8080/reviews/new', {
        userID: 1,
        placeID: id,
        inclusiveLanguages: languages,
        neutralRestrooms: restrooms,
        queerBusinessPromotion: promotion,
        accessibility: access,
        queerSignage: signage,
        safety: safeness,
        recommendedBusiness: recommend,
        review: text })
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
      <ReviewInputText
        name="review"
        control={control}
        label="Write details about your experience"
        setReview={setReview}
        data-testid="review-submission-text"
      />
      <ReviewInputRating
        name="inclusiveLanguages"
        control={control}
        options={options}
        id="inclusive-languages"
        question="Do they use gender-inclusive language?"
        setRating={setInclusiveLanguages}
        data-testid="review-submission-language"
      />
      <ReviewInputRating
        name="neutralRestrooms"
        control={control}
        options={options}
        id="neutral-restrooms"
        question="Do they offer gender-neutral restrooms?"
        setRating={setNeutralRestrooms}
        data-testid="review-submission-restroom"
      />
      <ReviewInputRating
        name="queerBusinessPromotions"
        control={control}
        options={options}
        id="business-promotions"
        question="Do they promote or associate with other queer businesses/events?"
        setRating={setQueerBusinessPromotion}
        data-testid="review-submission-promotions"
      />
      <ReviewInputRating
        name="accessibility"
        control={control}
        options={options}
        id="accessibility"
        question="Do they offer accessibility accommodations?"
        setRating={setAccessibility}
        data-testid="review-submission-accessibility"
      />
      <ReviewInputRating
        name="queerSignage"
        control={control}
        options={options}
        id="queer-signage"
        question="Do they have welcoming queer signage?"
        setRating={setQueerSignage}
        data-testid="review-submission-signage"
      />
      <ReviewInputRating
        name="safety"
        control={control}
        options={safetyOptions}
        id="safety"
        question="As a queer person, how safe did you feel at this business?"
        setRating={setSafety}
        data-testid="review-submission-safety"
      />
      <ReviewInputRating
        name="recommendedBusiness"
        control={control}
        options={options}
        id="recommended-business"
        question="Would you recommend the business to a queer friend?"
        setRating={setRecommendedBusiness}
        data-testid="review-submission-recommended"
      />
      <Button onClick={handleSubmit(onSubmit)} variant="contained" data-testid="review-submission-submit">
        Submit
      </Button>
    </Paper>
  );
}
