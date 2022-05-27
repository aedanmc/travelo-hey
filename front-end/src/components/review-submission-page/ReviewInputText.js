import TextField from '@mui/material/TextField';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

export default function ReviewInputText({ name, control, label, setReview }) {
  const handleReview = (event) => {
    setReview(event.target.value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <TextField onChange={handleReview} variant="filled" value={value} multiline rows={10} label={label} />
      )}
    />
  );
}

ReviewInputText.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(useForm.control).isRequired,
  label: PropTypes.string.isRequired,
  setReview: PropTypes.func.isRequired,
};
