import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from '@mui/material';
import PropTypes from 'prop-types';

export default function ReviewInputRating({ safety, uniqueID }) {
  // React was unhappy that both options and safetyOptions did not have unique key identifiers
  // for each child in the list of RadioGroup
  // Each option choice for both yes/no answers and rating answers have a "child" prop
  // that is combined with the place's id in the key prop to ensure uniqueness
  // and satisfy the warning
  // note: might go in and reconfigure to include what question is being asked (i.e. restrooms)
  // since there will be multiple of these radio groups on a singular review page
  const options = [
    { child: 5, choice: 'Yes', rating: 1 },
    { child: 15, choice: 'No', rating: 0 },
    { child: 25, choice: 'Unsure', rating: '' },
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
            data-testid={`review-${option.child}-${uniqueID}`}
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
          data-testid={`review-${option.child}-${uniqueID}`}
        />
      ))}
    </>
  );
}

ReviewInputRating.propTypes = {
  safety: PropTypes.bool.isRequired,
  uniqueID: PropTypes.string.isRequired,
};
