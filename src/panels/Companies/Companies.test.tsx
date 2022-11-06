import { render, screen } from '@testing-library/react';
import Companies from './Companies';

describe('CompaniesCard', () => {
  test('renders received props', () => {
    render(<Companies />);

    const titleElement = screen.getByText(/Companies/i);
    expect(titleElement).toBeInTheDocument();
  });
});
