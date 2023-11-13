import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from '../components/Portfolio';

const mockPortfolioData = [
  {
    title: 'Project 1',
    description: 'Description 1',
    category: 'all',
    link: '/project-1',
    picture: 'path/to/image-1.jpg',
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    category: 'code',
    link: '/project-2',
    picture: 'path/to/image-2.jpg',
  },
];

jest.mock('../components/Portfolio/portfolioData.json', () => mockPortfolioData);

describe('Portfolio component', () => {
  it('renders the Portfolio component with provided data', () => {
    render(<Portfolio />);

    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('filters items when a category button is clicked', () => {
    render(<Portfolio />);

    fireEvent.click(screen.getByText('Code'));

    expect(screen.getByText('Project 1')).not.toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });
});
