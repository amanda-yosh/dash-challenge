import { render, screen } from '@testing-library/react';
import Analytics from './Analytics';

describe('Analytics', () => {
  test('renders received props', () => {
    render(<Analytics />);

    const titleElement = screen.getByText(/Analytics/i);
    expect(titleElement).toBeInTheDocument();
  });
});
