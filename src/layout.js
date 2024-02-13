// Layout.js
import React from 'react';
import Sidebar from './sidebar'; // Assuming Sidebar is in the same directory

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main> {/* This is where the page content will go */}
    </div>
  );
};

export default Layout;
