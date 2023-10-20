import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, text }) => {
  return (
    <button className="custom-button">
      {icon && <FontAwesomeIcon icon={icon} />} {text}
    </button>
  );
}

export default Button;
