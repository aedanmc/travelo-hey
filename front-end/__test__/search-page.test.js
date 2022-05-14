import React from 'react';
import { render } from '@testing-library/react';
import axiosMock from '../__mocks__/axiosMock';
import SearchPage from '../src/components/search-page/SearchPage';
import '@testing-library/jest-dom';

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
  const { getByText } = render(<SearchPage />);

  const name = getByText('test');
  expect(name).toBeInTheDocument();
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});

test('SearchPage renders the correct number of SingleResult cards', async () => {

});
