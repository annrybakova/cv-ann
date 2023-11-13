// import { render, screen } from '@testing-library/react';
// import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../pages/Home/home';
import InnerPage from '../pages/Inner/inner';

test('renders HomePage when the route is /', () => {
  render(
      <App />
  );
  expect(screen.getByText("Programmer. Creative. Innovator")).toBeDefined();
  expect(screen.queryByText('About me')).toBeNull();
  const button = screen.getByText('Know more');
  expect(button).toBeInTheDocument();

  expect(button).toHaveClass('knowMore-btn');
  expect(button.closest('a')).toHaveAttribute('href', '/inner');
});
