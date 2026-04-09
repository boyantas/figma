import React from 'react';
import './button.css';

export const DeepButton = ({ 
  label = "Button", 
  onClick, 
  variant = "Primary", 
  size = "Medium", 
  iconPrepend = false,
  iconAppend = false 
}) => {
  // This automatically creates names like "deep-button secondary xlarge"
  const buttonClass = `deep-button ${variant.toLowerCase()} ${size.toLowerCase()}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {iconPrepend && <span className="icon">★</span>}
      <span className="label">{label}</span>
      {iconAppend && <span className="icon">★</span>}
    </button>
  );
};

export default DeepButton;
