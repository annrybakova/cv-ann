import React from 'react';

const Button = ({ icon, text }) => {
  return (
    <button className="custom-button">
      {icon}
      {text}
    </button>
  );
}

export default Button;
