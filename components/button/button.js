import React from 'react';
import './button.css';

export const DeepButton = ({ 
  label = "Button", 
  variant = "Primary", 
  size = "XLarge",
  onClick 
}) => {
  // Logic: Check if the user selected the "Disabled" variant
  const isDisabled = variant.toLowerCase() === 'disabled';
  
  // Logic: Combine classes, e.g., "deep-button disabled xlarge"
  const classes = `deep-button ${variant.toLowerCase()} ${size.toLowerCase()}`;

  return (
    <button 
      className={classes} 
      onClick={isDisabled ? null : onClick} // Disable the click function
      disabled={isDisabled}                // Real HTML disabled state
    >
      <span className="button-text">{label}</span>
    </button>
  );
};

export default DeepButton;
