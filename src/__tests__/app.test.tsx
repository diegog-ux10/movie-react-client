import { render, fireEvent } from '@testing-library/react';

import App from '../App';

import '@testing-library/jest-dom';


test('renders learn Vite + React text', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Vite \+ React/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders count is 0 initially', () => {
    const { getByText } = render(<App />);
    const countElement = getByText(/count is 0/i);
    expect(countElement).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
    const { getByText } = render(<App />);
    const countButton = getByText(/count is 0/i);
    fireEvent.click(countButton);
    const incrementedCountElement = getByText(/count is 1/i);
    expect(incrementedCountElement).toBeInTheDocument();
});
