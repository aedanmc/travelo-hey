import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';

export default function ReviewInputRating({ name, control, options, id, question, setRating }) {
  // const generateRadioOptions = () => {
  //   const keys = Object.keys(options);
  //   keys.forEach((singleOption) => (
  //     <FormControlLabel
  //       value={singleOption.value}
  //       label={singleOption.label}
  //       control={<Radio />}
  //     />
  //   ));
  // };
  console.log(options);

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
            <FormControlLabel
              value="No"
              label={0}
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}

ReviewInputRating.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(useForm.control).isRequired,
  // option type error
  options: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  setRating: PropTypes.func.isRequired,
};
