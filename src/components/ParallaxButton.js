// ParallaxButton.js
import React from 'react';
import './ParallaxButton.css'; // Certifique-se de que este caminho esteja correto

const ParallaxButton = ({ title }) => {
  return (
    <a className="btn btn-play btn-large" href="#" title={title}>{title}</a>
  );
};

export default ParallaxButton;
