import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router-dom';
import ReviewSubmissionPage from '../src/components/review-submission-page/ReviewSubmissionPage';

test('renders correctly', () => {
  const history = createMemoryHistory();
  
  const customRender = (ui) => {
    return render(ui, { wrapper: MemoryRouter });
  }
  const { getByTestId } = customRender(
    <ReviewSubmissionPage/>
  );

  // TODO: reconfigure test IDs for the various review submission page components
  const title = getByTestId('review-submission-title');
  // const input = getByTestId('review-submission-text');
  // const rating = getByTestId('review-submission-rating');
  // const submit = getByTestId('review-submission-submit');

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Write Your Review');
  // expect(input).toBeInTheDocument();
  // expect(rating).toBeInTheDocument();
  // expect(submit).toBeInTheDocument();
});