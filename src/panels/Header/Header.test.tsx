import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './Header';

describe('App', () => {
  test('renders Header component', () => {
    render(<Header />);
  
    expect(screen.getByText('OVERVIEW')).toBeInTheDocument()
    expect(screen.getByText(/PART/)).toBeInTheDocument()
    expect(screen.getByText(/widgets/i)).toBeInTheDocument()
    expect(screen.getByText(/apis/i)).toBeInTheDocument()

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveClass('header__menu-burguer');
    expect(buttons[1]).toHaveAttribute('aria-label', 'modal-message');
    expect(buttons[2]).toHaveAttribute('aria-label', 'modal-user');
  });
});
