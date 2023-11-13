import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Skills from '../components/Expertise/skills';
import store from "../store"


describe('Skills component', () => {
  it('renders the Skills component with provided data', () => {
    const skillsData = [
      { type: 'React', level: 80 },
      { type: 'Redux', level: 70 },
    ];

    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
  });

  it('renders the Skills component with edit panel visibility toggle', () => {

    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
    fireEvent.click(screen.getByText('Edit skills'));
    expect(screen.getByText('Skill range')).toBeInTheDocument();
  });
});
