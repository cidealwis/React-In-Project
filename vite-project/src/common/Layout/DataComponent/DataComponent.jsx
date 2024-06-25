import React from 'react';
import './DataComponent.css';

function DataComponent({ image, title, text, buttonText }) {
  return (
    <div className="data-component">
      <img src={image} alt={title} className="data-image" />
      <div className="data-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="data-button">{buttonText}</button>
      </div>
    </div>
  );
}

export default DataComponent;
