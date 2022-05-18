import React from "react";
import { Controller } from "react-hook-form";
import Rating from '@mui/material/Rating';

export default function ReviewInputRating({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        // TODO: double check that this is sufficient for a <Rating> component
        <Rating onChange={onChange} value={value} name="half-rating" defaultValue={2.5} precision={0.5} />
      )}
    />
  );
}