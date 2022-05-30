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

export default function ReviewSubmissionPage({ debug }) {
  const params = useParams();
  let id = params.place_id;
  if (debug) {
    id = 'test';
  }
  // random user ID generator
  const user = (Math.floor(Math.random() * 11) + 1);

  // default form value and structure given
  // note: passed if values have no changes
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

  // function renderLanguages(onChange, value) {
  //   return (
  //     <FormControl data-testid="review-inclusive-languages">
  //       <Grid container columnSpacing={2}>
  //         <Grid item sx={{ marginTop: 1 }}>
  //           <FormLabel id=inclusive-languages">Do they use gender-inclusive language?</FormLabel>
  //         </Grid>
  //         <Grid item>
  //           <RadioGroup value={value} onChange={onChange}>
  //             <ReviewInputRating
  //               safety={false}
  //               uniqueID={id}
  //             />
  //           </RadioGroup>
  //         </Grid>
  //       </Grid>
  //     </FormControl>
  //   );
  // }

  // function renderRestrooms(onChange, value) {
  //   return (
  //     <FormControl data-testid="review-neutral-restrooms">
  //       <Grid container columnSpacing={2}>
  //         <Grid item sx={{ marginTop: 1 }}>
  //           <FormLabel id="neutral-restrooms">Do they offer gender-neutral restrooms?</FormLabel>
  //         </Grid>
  //         <Grid item>
  //           <RadioGroup value={value} onChange={onChange}>
  //             <ReviewInputRating
  //               safety={false}
  //               uniqueID={id}
  //             />
  //           </RadioGroup>
  //         </Grid>
  //       </Grid>
  //     </FormControl>
  //   );
  // }

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
  // function renderAccessibility(onChange, value) {
  //   return (
  //   );
  // }
  // function renderSignage(onChange, value) {
  //   return (
  //   );
  // }
  // function renderRecommended(onChange, value) {
  //   return (
  //   );
  // }

  // <FormControl data-testid="review-business-promotions">
  //               <Grid container columnSpacing={2}>
  //                 <Grid item sx={{ marginTop: 1 }}>
  //                   <FormLabel id="business-promotions">Do they promote or associate with other
  // queer businesses/events?</FormLabel>
  //                 </Grid>
  //                 <Grid item>
  //                   <RadioGroup value={value} onChange={onChange}>
  //                     <ReviewInputRating
  //                       safety={false}
  //                       uniqueID={id}
  //                     />
  //                   </RadioGroup>
  //                 </Grid>
  //               </Grid>
  //             </FormControl>

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
        <Grid item xs={12} sx={{ marginLeft: 2, marginRight: 2 }}>
          <Controller
            name="neutralRestrooms"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-neutral-restrooms', 'neutral-restrooms', 'Do they offer gender-neutral restrooms?', false)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: 2, marginRight: 2 }}>
          <Controller
            name="queerBusinessPromotions"
            control={control}
            render={({ field: { onChange, value } }) => (
              renderQuestion(onChange, value, 'review-business-promotions', 'business-promotions', 'Do they promote or associate with other queer businesses/events?', false)
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: 2, marginRight: 2 }}>
          <Controller
            name="accessibility"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl data-testid="review-accessibility">
                <Grid container columnSpacing={2}>
                  <Grid item sx={{ marginTop: 1 }}>
                    <FormLabel id="access">Do they offer accessibility accommodations?</FormLabel>
                  </Grid>
                  <Grid item>
                    <RadioGroup value={value} onChange={onChange}>
                      <ReviewInputRating
                        safety={false}
                        uniqueID={id}
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: 2, marginRight: 2 }}>
          <Controller
            name="queerSignage"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl data-testid="review-queer-signage">
                <Grid container columnSpacing={2}>
                  <Grid item sx={{ marginTop: 1 }}>
                    <FormLabel id="queer-signage">Do they have welcoming queer signage?</FormLabel>
                  </Grid>
                  <Grid item>
                    <RadioGroup value={value} onChange={onChange}>
                      <ReviewInputRating
                        safety={false}
                        uniqueID={id}
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: 2, marginRight: 2 }}>
          <Controller
            name="safety"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl data-testid="review-safety">
                <Grid container columnSpacing={2}>
                  <Grid item sx={{ marginTop: 1 }}>
                    <FormLabel id="safeness">As a queer person, how safe did you feel at this business?</FormLabel>
                  </Grid>
                  <Grid item>
                    <RadioGroup value={value} onChange={onChange}>
                      <ReviewInputRating
                        safety
                        uniqueID={id}
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: 2, marginRight: 2 }}>
          <Controller
            name="recommendedBusiness"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl data-testid="review-recommended-business">
                <Grid container columnSpacing={2}>
                  <Grid item sx={{ marginTop: 1 }}>
                    <FormLabel id="recommended-business">Would you recommend the business to a queer friend?</FormLabel>
                  </Grid>
                  <Grid item>
                    <RadioGroup value={value} onChange={onChange}>
                      <ReviewInputRating
                        safety={false}
                        uniqueID={id}
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: 2, marginRight: 2 }}>
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
