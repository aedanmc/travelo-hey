import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationDetails from '../src/components/locations-page/LocationDetails';

test('renders the correct content', () => {
  const { getByTestId } = render(
    <LocationDetails
      image="http://via.placeholder.com/640x360"
      name="Little Water Cantina"
      address="2865 Eastlake Ave E, Seattle, Wa 98102, USA"
      phone="(206) 466-6171"
      link="http://www.littlewatercantina.com"
      equalityScore="3.1"
      numReviews="328"
      googleRating="4"
      numRatings="632"
      country="Country: United States of America"
      countrySafety="Safety Score: B+"
    />,
  );
  
    const title = getByTestId('location-title');
  
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Little Water Cantina');
  });