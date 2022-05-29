import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router-dom';
import ReviewInputRating from '../src/components/review-submission-page/ReviewInputRating';

test('renders both ratings correctly', () => {
  const history = createMemoryHistory();
  
  const customRender = (ui) => {
    return render(ui, { wrapper: MemoryRouter });
  }
  const { getByTestId } = customRender(
    <div>
        <ReviewInputRating safety={false} uniqueID={'test'}/>
        <ReviewInputRating safety uniqueID={'test-2'}/>
    </div>
  );

  const yes = getByTestId('review-5-test');
  const no = getByTestId('review-15-test');
  const unsure = getByTestId('review-25-test');
  const vUnsafe = getByTestId('review-10-test-2');
  const unsafe = getByTestId('review-20-test-2');
  const neither = getByTestId('review-30-test-2');
  const safe = getByTestId('review-40-test-2');
  const vSafe = getByTestId('review-50-test-2');

  expect(yes).toBeInTheDocument();
  expect(no).toBeInTheDocument();
  expect(unsure).toBeInTheDocument();
  expect(vUnsafe).toBeInTheDocument();
  expect(unsafe).toBeInTheDocument();
  expect(neither).toBeInTheDocument();
  expect(safe).toBeInTheDocument();
  expect(vSafe).toBeInTheDocument();
});

// TODO: dynamic and static rendering tests