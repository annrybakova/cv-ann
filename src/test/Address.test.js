import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import {describe, expect} from '@jest/globals';
import Address from '../components/Address';
import contactData from '../components/Address/contactData.json'
  
  describe('Address Component', () => {
    it('should render contact information', () => {
      const { getByText, getByRole } = render(<Address />);
  
      expect(getByText('Contacts')).toBeInTheDocument();
      expect(getByText(contactData.phone)).toBeInTheDocument();
      expect(getByText(contactData.email)).toBeInTheDocument();
      expect(getByText(contactData.shortLinkedin)).toBeInTheDocument();
      expect(getByText(contactData.shortFacebook)).toBeInTheDocument();
  
      const phoneLink = getByRole('link', { name: contactData.phone });
      const emailLink = getByRole('link', { name: contactData.email });
      const linkedinLink = getByRole('link', { name: contactData.shortLinkedin });
      const facebookLink = getByRole('link', { name: contactData.shortFacebook });
  
      expect(phoneLink).toHaveAttribute('href', `tel:${contactData.phone}`);
      expect(emailLink).toHaveAttribute('href', `mailto:${contactData.email}`);
      expect(linkedinLink).toHaveAttribute('href', contactData.linkedin);
      expect(facebookLink).toHaveAttribute('href', contactData.facebook);
    });
  });