import React from 'react';

const Button = ({ icon, text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
