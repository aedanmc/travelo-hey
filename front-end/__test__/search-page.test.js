/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { render } from '../test-utils';
import BusinessSearchPage from '../src/components/business-search-page/BusinessSearchPage';
import '@testing-library/jest-dom';

/**
 *  Tests the initial mount of a SearchPage to ensure that it displays
 *  the correct content when first rendered.
 *  See src/components/search-page/TestData.js for the test data.
 */
test('SearchPage renders the correct number of SingleResult cards', () => {
  render(<BusinessSearchPage debug={true} />);

  // expect(screen.getAllByTestId('location-title')).toHaveLength(4);
});

// TODO: add tests for routing --> user clicks a card and navigates to another page

// TODO: add tests for searching --> user chooses some filters and presses enter
test('SearchPage displays items matching what user searched', () => {

});
