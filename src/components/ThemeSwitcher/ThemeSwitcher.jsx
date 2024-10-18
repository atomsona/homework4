import React from 'react';
import './ThemeSwitcher.css';

function ThemeSwitcher({ toggleTheme, darkMode }) {
  return (
    <div>
      <button className="theme-button" onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
