import React, { useState } from 'react';

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector('body');
    body?.classList.toggle('dark');
  };

  return (
    <button className={isDarkMode ? 'dark' : ''} onClick={toggleDarkMode}>
      {isDarkMode ? (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" fill="#fff" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M11.5 5.5C8.5 5.5 6 8 6 11c0 .6.1 1.2.4 1.8-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0 .6-.6 1-1.2 1.4-1.8.4.2.9.4 1.4.4 3 0 5.5-2.5 5.5-5.5S14.5 5.5 11.5 5.5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
          <path d="M22 12h-2c0-4.4-3.6-8-8-8V2c6.6 0 12 5.4 12 12z" />
        </svg>
      )}
    </button>
  );
};

export default ToggleButton;
