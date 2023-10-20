import React from 'react';
import contactData from './contactData.json';

const Address = () => {

  // const handleEmailClick = () => {
  //   window.location.href = `email:${contactData.email}`;
  // }

  // const handlePhoneClick = () => {
  //   window.location.href = `tel:${contactData.phone}`;
  // }

  return (
    <div>
      <h2>Contacts</h2>
      <p>Phone: <a href={`tel:${contactData.phone}`}>{contactData.phone}</a></p>
      <p>Email: <a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>
      <p>LinkedIn: <a href={contactData.linkedin}>{contactData.linkedin}</a></p>
      <p>Facebook: <a href={contactData.facebook}>{contactData.facebook}</a></p>
    </div>
  );
}

export default Address;
