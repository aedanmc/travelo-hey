import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from '@mui/material';
import PropTypes from 'prop-types';

export default function ReviewInputRating({ safety }) {
  const options = [
    { child: 10, choice: 'Yes', rating: 1 },
    { child: 20, choice: 'No', rating: 0 },
    { child: 30, choice: 'Unsure', rating: '' },
  ];
  const safetyOptions = [
    { child: 10, choice: 'Very unsafe', rating: 1 },
    { child: 20, choice: 'Unsafe', rating: 2 },
    { child: 30, choice: 'Neither', rating: 3 },
    { child: 40, choice: 'Safe', rating: 4 },
    { child: 50, choice: 'Very safe', rating: 5 },
  ];

  if (safety) {
    return (
      <>
        {safetyOptions.map((option) => (
          <FormControlLabel
            value={option.rating}
            label={option.choice}
            key={option.child}
            control={<Radio />}
          />
        ))}
      </>
    );
  }
  return (
    <>
      {options.map((option) => (
        <FormControlLabel
          value={option.rating}
          label={option.choice}
          key={option.child}
          control={<Radio />}
        />
      ))}
    </>
  );
}

ReviewInputRating.propTypes = {
  safety: PropTypes.bool.isRequired,
};
