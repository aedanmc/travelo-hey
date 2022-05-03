import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SingleResult } from '../src/components/general/SingleResult';
import { expect } from 'chai';



test("renders the correct content", () => {
    const { getByTestId } = render(<SingleResult />)

    const title = getByTestId('location-title')
    
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Lorem Ipsum");
})