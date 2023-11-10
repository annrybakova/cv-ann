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
import HomePage from '../pages/Home/home';
import InnerPage from '../pages/Inner/inner';

test('renders HomePage when the route is /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('Programmer. Creative. Innovator')).toBeInTheDocument();
  expect(screen.queryByText('About me')).toBeNull();
});

test('renders InnerPage when the route is /inner', () => {
  render(
    <MemoryRouter initialEntries={['/inner']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('About me')).toBeInTheDocument();
  expect(screen.queryByText('Programmer. Creative. Innovator')).toBeNull();
});
