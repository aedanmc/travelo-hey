import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';

export default function ReviewInputRating({ name, control, options, id, question, setRating }) {
  const generateRadioOptions = () => {
    options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <FormControl>
          <FormLabel id={id}>{question}</FormLabel>
          <RadioGroup value={value} onChange={handleRating}>
            {generateRadioOptions()}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}

ReviewInputRating.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(useForm.control).isRequired,
  options: [].isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  setRating: PropTypes.func.isRequired,
};
