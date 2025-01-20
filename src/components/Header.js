import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header className={`App-header ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>Fitness Tracker</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </header>
  );
}

export default Header;
