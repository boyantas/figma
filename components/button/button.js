import React from 'react';
import './button.css';

export const DeepButton = ({ 
  label = "Button", 
  variant = "Primary", 
  size = "Medium", 
  onClick 
}) => {
  return (
    <button 
      className={`deep-button ${variant.toLowerCase()} ${size.toLowerCase()}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default DeepButton;
