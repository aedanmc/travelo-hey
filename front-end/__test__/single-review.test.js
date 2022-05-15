import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SingleReview from '../src/components/general/SingleReview';

test('renders correctly', () => {
  const { getByTestId } = render(
    <SingleReview
      name="John Smith"
      pic="http://via.placeholder.com/640x360"
      link="http://google.com"
      rating="3"
      relativeTime="3 weeks ago"
      text="This place was perfectly average. The food tasted exactly like fictional food would in a review written to test front-end component rendering"
    />
    );

    const { text } = getByTestId('review-text');
    const { rating } = getByTestId('rating');

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('This place was perfectly average. The food tasted exactly like fictional food would in a review written to test front-end component rendering');

    expect(rating).toBeInTheDocument();
    expect(rating).toHaveTextContent('3');
})