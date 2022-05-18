import * as React from 'react';
import './ReviewSubmissionPage.css';
import { useForm } from "react-hook-form";
import { Button, Paper, Typography } from "@material-ui/core";
import { ReviewInputText } from "./ReviewInputText";
import { ReviewInputRating } from "./ReviewInputRating";
import { useForm } from "react-hook-form";


const defaultValues = {
  textValue: "",
  ratingValue: 0,
};

function ReviewSubmissionPage() {
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, control } = methods;
  // TODO: need to set up sending the submitted content to the back-end
  const onSubmit = (data) => console.log(data);

  return (
    <Paper>
      <Typography variant="h6" data-testid="review-submission-title"> Write Your Review </Typography>
      <ReviewInputText 
        name="textValue" 
        control={control} 
        label="Write details about your experience" 
        data-testid="review-submission-text"/>
      <ReviewInputRating 
        name="ratingValue" 
        control={control} 
        label="Rating Input" 
        data-testid="review-submission-rating"/>
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"} data-testid="review-submission-submit">
        Submit
      </Button>
    </Paper>
  );
}
export default ReviewSubmissionPage;