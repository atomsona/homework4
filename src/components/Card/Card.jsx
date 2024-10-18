import React, { useState } from 'react';
import './Card.css';

function Card({ title, image, description }) {
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [showTitle, setShowTitle] = useState(true);

  const buttonClick = (e) => {
    e.stopPropagation(); 
    setButtonVisible(false);
    setShowTitle(false);
  };

  const cardClick = () => {
    if (!isButtonVisible) {
      setShowTitle(true);
      setButtonVisible(true);
    }
  };

  return (
    <div className="card" onClick={cardClick}>
      {showTitle && <h2 className="card-title">{title}</h2>}
      <img className="card-image" src={image} alt={title} />
      <p className="card-description">{description}</p>
      {isButtonVisible && (
        <button className="card-button" onClick={buttonClick}>
          Hide Title
        </button>
      )}
    </div>
  );
}

export default Card;
