import React from 'react';
import { render, screen } from '@testing-library/react';
import Heatmap from './Heatmap';

describe('Heatmap', () => {
  test('renders title and size', () => {
    render(<Heatmap />);
  });
});
