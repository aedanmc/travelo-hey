import React from 'react';
import { render } from '../test-utils';
import axiosMock from '../__mocks__/axiosMock';
import SearchPage from '../src/components/search-page/SearchPage';
import '@testing-library/jest-dom';

// This test is subject to change since there is some refactoring to do with
// <SearchPage> and its data fetching.
test('SearchPage fetches data exactly once', async () => {
  axiosMock.get.mockImplementationOnce(() => {
    Promise.resolve({ result: {
      item1: {
        name: 'test',
        formatted_phone_number: '(800)-555-1212',
        formatted_address: '7777 Test Address Ave',
      },
    } });
  });
  render(<SearchPage />);

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});

test('SearchPage renders the correct number of SingleResult cards', async () => {

});
