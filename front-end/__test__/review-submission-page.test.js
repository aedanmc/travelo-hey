import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router-dom';
import ReviewSubmissionPage from '../src/components/review-submission-page/ReviewSubmissionPage';

test('renders components correctly', () => {
  const history = createMemoryHistory();
  
  const customRender = (ui) => {
    return render(ui, { wrapper: MemoryRouter });
  }
  const { getByTestId } = customRender(
    <ReviewSubmissionPage debug/>
  );

  const title = getByTestId('review-submission-title');
  const input = getByTestId('review-review-content');
  const languages = getByTestId('review-inclusive-languages');
  const restrooms = getByTestId('review-neutral-restrooms');
  const promotions = getByTestId('review-business-promotions');
  const accessibility = getByTestId('review-accessibility');
  const signage = getByTestId('review-queer-signage');
  const safety = getByTestId('review-safety');
  const recommended = getByTestId('review-recommended-business');
  const submit = getByTestId('review-submission-submit');

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Write Your Review');
  expect(input).toBeInTheDocument();
  expect(languages).toBeInTheDocument();
  expect(restrooms).toBeInTheDocument();
  expect(promotions).toBeInTheDocument();
  expect(accessibility).toBeInTheDocument();
  expect(signage).toBeInTheDocument();
  expect(safety).toBeInTheDocument();
  expect(recommended).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});

// TODO: dynamic and static rendering tests