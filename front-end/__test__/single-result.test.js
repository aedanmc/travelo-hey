import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SingleResult from '../src/components/general/SingleResult';

// TODO: update test to allow for props
test('SingleResult renders the correct content', () => {
  const { getByTestId } = render(
    <SingleResult
      image="../src/quebec-church.jpg"
      name="Lorem Ipsum"
      contact="Lorem Ipsum"
      address="Lorem Ipsum"
    />,
  );

  const title = getByTestId('location-title');

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Lorem Ipsum');
});
