import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import InnerPage from '../pages/Inner/inner';
import store from '../store'

window.scrollTo = jest.fn();

describe('InnerPage component', () => {
  it('renders the InnerPage component with all sections', () => {
    render(
    <Provider store={store}>
        <InnerPage />
    </Provider>);

    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Feedback')).toBeInTheDocument();

    fireEvent.click(screen.getByClassName('scroll-btn'));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });


});
