import React, { useState } from 'react';
import './TuduApp.css'; // Import the CSS file

function TuduApp() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const inputChange = (e) => {
    setText(e.target.value);
  };

  const addClick = () => {
    setDisplayText(text);
    setText('');
  };

  const enterPress = (e) => {
    if (e.key === 'Enter') {
      addClick();
    }
  };

  return (
    <div className="tudu-container">
      <input
        className="tudu-input"
        type="text"
        value={text}
        onChange={inputChange}
        onKeyDown={enterPress}
        placeholder="Enter your task"
      />
      <button className="tudu-button" onClick={addClick}>Add</button>
      <p className="tudu-display">{displayText}</p>
    </div>
  );
}

export default TuduApp;
