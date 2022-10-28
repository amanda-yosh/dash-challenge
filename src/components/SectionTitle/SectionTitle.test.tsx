import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionTitle from './SectionTitle';

const props = {
  title: "I'm a title",
  size: 5,
}

describe('SectionTitle', () => {
  test('renders title and size', () => {
    render(<SectionTitle {...props }/>);

    const titleElement = screen.getByText(/a title/i);
    expect(titleElement).toBeInTheDocument();

    const sizeElement = screen.getByText(/5/i);
    expect(sizeElement).toBeInTheDocument();
  });
});
