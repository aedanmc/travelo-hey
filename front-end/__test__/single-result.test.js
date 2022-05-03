import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SingleResult from '../src/components/general/SingleResult';



test("renders the correct content", () => {
    const { getByTestId } = render(<SingleResult />)

    const title = getByTestId('location-title')
    
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Lorem Ipsum");
})