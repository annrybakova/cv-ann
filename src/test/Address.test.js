import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import {describe, expect, test} from '@jest/globals';
import {Address} from '../components/Address';

const contactData = {
    phone: '123-456-7890',
    email: 'test@example.com',
    linkedin: 'https://www.linkedin.com/in/testuser',
    facebook: 'https://www.facebook.com/testuser',
  };
  
  describe('Address Component', () => {
    it('should render contact information', () => {
      const { getByText, getByRole } = render(<Address />);
  
      expect(getByText('Contacts')).toBeInTheDocument();
      expect(getByText(contactData.phone)).toBeInTheDocument();
      expect(getByText(contactData.email)).toBeInTheDocument();
      expect(getByText(contactData.linkedin)).toBeInTheDocument();
      expect(getByText(contactData.facebook)).toBeInTheDocument();
  
      const phoneLink = getByRole('link', { name: contactData.phone });
      const emailLink = getByRole('link', { name: contactData.email });
      const linkedinLink = getByRole('link', { name: contactData.linkedin });
      const facebookLink = getByRole('link', { name: contactData.facebook });
  
      expect(phoneLink).toHaveAttribute('href', `tel:${contactData.phone}`);
      expect(emailLink).toHaveAttribute('href', `mailto:${contactData.email}`);
      expect(linkedinLink).toHaveAttribute('href', contactData.linkedin);
      expect(facebookLink).toHaveAttribute('href', contactData.facebook);
    });
  });