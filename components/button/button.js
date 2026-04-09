
export const DeepButton = () => {
  return <button className="deep-button">Click Me</button>;
};
import React from 'react';
import './button.css';

/**
 * DeepButton component based on Figma designs
 */
export const DeepButton = ({ label = "Button", onClick }) => {
  return (
    <button className="deep-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default DeepButton;
