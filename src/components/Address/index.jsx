import React, { useEffect, useState } from 'react';
import contactData from './contactData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Address = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <div className='contacts-links'>
        <p><FontAwesomeIcon icon={faPhone} /> <a href={`tel:${contactData.phone}`}>{contactData.phone}</a></p>
        <p><FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>
        <p><FontAwesomeIcon icon={faLinkedin} /> <a href={contactData.linkedin}>{contactData.shortLinkedin}</a></p>
        <p><FontAwesomeIcon icon={faFacebook} /> <a href={contactData.facebook}>{contactData.shortFacebook}</a></p>
      </div>
    </div>
  );
}

export default Address;
