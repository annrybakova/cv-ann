import React from 'react';
import { render, screen } from '@testing-library/react';
import Expertise from '../components/Expertise/experience';
import '@testing-library/jest-dom/extend-expect';

describe('Expertise component', () => {
  it('renders the expertise component with provided data', () => {
    const expertiseData = [
      {
        info: {
          company: 'ABC Inc',
          job: 'Software Engineer',
          description: 'Worked on XYZ project',
        },
        date: 'January 2022 - Present',
      },
    ];

    render(<Expertise data={expertiseData} />);

    expect(screen.getByText('ABC Inc')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Worked on XYZ project')).toBeInTheDocument();
    expect(screen.getByText('January 2022 - Present')).toBeInTheDocument();

  });
});
