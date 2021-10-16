import React from 'react';
const Button = ({ icon, text, onClick }) => {
  return (
    <div className='btn' onClick={onClick}>
      <p className='btn-icon'>{icon}</p>
      <p className='btn-text'>{text}</p>
    </div>
  );
};

export default Button;
