// Overlay.js
import React from 'react';
import './Overlay.css'; // Make sure to create a corresponding CSS file for styling

function Overlay({ isOpen, closeSidebar }) {
  return (
    <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeSidebar}></div>
  );
}

export default Overlay;
