import React from 'react';
import './button.css';

export const DeepButton = ({ 
  label = "Button", 
  variant = "Primary", 
  size = "XLarge",
  onClick 
}) => {
  // Check if the variant is 'Disabled'
  const isDisabled = variant.toLowerCase() === 'disabled';
  
  const classes = `deep-button ${variant.toLowerCase()} ${size.toLowerCase()}`;

  return (
    <button 
      className={classes} 
      onClick={isDisabled ? null : onClick} // If disabled, do nothing on click
      disabled={isDisabled}                // Tells the browser it's off
    >
      <span className="button-text">{label}</span>
    </button>
  );
};

export default DeepButton;
