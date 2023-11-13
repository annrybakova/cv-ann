import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ScrollToTopBtn from '../components/Button/btn-up';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: jest.fn(() => <span>MockFontAwesomeIcon</span>),
}));

describe('ScrollToTopBtn component', () => {
  it('should render ScrollToTopBtn and trigger scrollToTop on click', () => {

    render(<ScrollToTopBtn />);

    
    const button = screen.getByClassName('scroll-btn');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(document.querySelector('.content').scrollTop).toBe(0);

    expect(screen.getByText('MockFontAwesomeIcon')).toBeInTheDocument();
  });
});
