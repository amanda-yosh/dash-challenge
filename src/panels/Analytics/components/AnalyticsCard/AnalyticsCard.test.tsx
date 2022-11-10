import { render, screen } from '@testing-library/react';
import AnalyticsCard from './AnalyticsCard';
import { SiIntercom } from 'react-icons/si';

const props = {
  Logo: SiIntercom,
  title: "I'm a analytics card!",
  subtitle: "I'm a subtitle",
  sectionName: "section",
  boxText: "I'm a white box",
}

describe('AnalyticsCard', () => {
  test('renders received props', () => {
    render(<AnalyticsCard {...props}/>);

    const titleElement = screen.getByText(/a analytics/i);
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = screen.getByText(/subtitle/i);
    expect(subtitleElement).toBeInTheDocument();

    const boxTextElement = screen.getByText(/white box/);
    expect(boxTextElement).toBeInTheDocument();
  });
});
