import React from 'react';
import { render, screen } from '@testing-library/react';
import Feedback from '../components/Feedback';
import '@testing-library/jest-dom/extend-expect';

const FeedbackData = [
  {
    feedback: 'Great work!',
    reporter: {
      name: 'John Doe',
      photoUrl: 'path/to/photo.jpg',
      citeUrl: 'http://example.com/johndoe',
    },
  },
];

describe('Feedback component', () => {
  it('renders the Feedback component with provided data', () => {
    render(<Feedback data={FeedbackData} />);

    expect(screen.getByText('Great work!')).toBeInTheDocument();
    // expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByAltText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('somesite.com')).toHaveAttribute('href', 'http://example.com/johndoe');
  });
});
