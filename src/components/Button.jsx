import React from 'react';

const Button = ({ text, type = 'submit' }) => {
  return (
    <button className="btn outline px-1" type={type}>
      {text}
    </button>
  );
};

export default Button;
