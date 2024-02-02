import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <Link to="/about" onClick={toggleSidebar}>About</Link>
        <Link to="/login" onClick={toggleSidebar}>Login</Link>
        <Link to="/signup" onClick={toggleSidebar}>SignUp</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
