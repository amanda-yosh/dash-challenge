import { render, screen } from '@testing-library/react';
import CompaniesCard from './CompaniesCard';

const props = {
  title: "I'm a companie card!",
  totalUsers: 3,
  tested: 0.45,
}

describe('CompaniesCard', () => {
  test('renders received props', () => {
    render(<CompaniesCard {...props}/>);

    const titleElement = screen.getByText(/a companie/i);
    expect(titleElement).toBeInTheDocument();

    const totalUsersElement = screen.getByText(/3/i);
    expect(totalUsersElement).toBeInTheDocument();

    const testedElement = screen.getByText(/0.45/i);
    expect(testedElement).toBeInTheDocument();
  });
});
