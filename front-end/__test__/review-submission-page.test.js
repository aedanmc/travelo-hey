import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router-dom';
import LocationDetails from '../src/components/review-submission-page/ReviewSubmissionPage';
import ReviewSubmissionPage from '../src/components/review-submission-page/ReviewSubmissionPage';

test('renders correctly', () => {
  const history = createMemoryHistory();
  
  const customRender = (ui) => {
    return render(ui, { wrapper: MemoryRouter });
  }
  const { getByTestId } = customRender(
    <ReviewSubmissionPage/>
  );
});