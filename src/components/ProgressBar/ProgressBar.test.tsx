import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

const props = {
  bgcolor: "#6a1b9a",
  completed: 60,
}

describe('ProgressBar', () => {
  test('renders title and size', async () => {
    render(<ProgressBar {...props }/>);

    const titleElement = screen.getByText(props.completed + '%');
    expect(titleElement).toBeInTheDocument();

    const colorBg = await screen.findByTestId("progress-bar")
    expect(colorBg).toHaveStyle("background-color: " + props.bgcolor);
  });
});
