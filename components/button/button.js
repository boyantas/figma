import React from 'react';
import './button.css';

export const DeepButton = ({ 
  label = "Button", 
  variant = "Secondary", // Matches your Figma 'Variant'
  size = "XLarge",       // Matches your Figma 'Size'
  iconPrepend = false, 
  iconAppend = false,
  onClick 
}) => {
  // This builds a name like: "deep-button secondary xlarge"
  const classes = `deep-button ${variant.toLowerCase()} ${size.toLowerCase()}`;

  return (
    <button className={classes} onClick={onClick}>
      {iconPrepend && <span className="icon-slot">★</span>}
      <span className="button-text">{label}</span>
      {iconAppend && <span className="icon-slot">★</span>}
    </button>
  );
};

export default DeepButton;
