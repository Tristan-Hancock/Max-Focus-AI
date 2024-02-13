import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate here
import './Sidebar.css';
import { AiFillProfile } from "react-icons/ai";
import './icons.css';
import { FaUser } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { CgBorderStyleSolid } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";



function Sidebar({ isOpen, toggleSidebar }) {

  const [isHovered, setIsHovered] = useState(false);
  let navigate = useNavigate(); // Initialize the navigate function

  const handleLoginNavigation = () => {
    toggleSidebar(); // This will close the sidebar if it's a collapsible sidebar
    navigate('/Login'); // Navigate to the login route
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
    <button
      className="toggle-button"
      onClick={toggleSidebar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <FaArrowLeft className="icon-hovered" /> : <CgBorderStyleSolid />}
    </button>
   <nav className="sidebar-nav">
   <Link to="/about" onClick={toggleSidebar}>
       <div className="icon-container">
        
         <IoMdHome  className="sidebar-icon" />

         <span>Home</span>
       </div>
     </Link>
    
     <Link to="/About" onClick={toggleSidebar}>
       <div className="icon-container">
         <AiFillProfile className="sidebar-icon"/> 
         <span>About</span>
       </div>
     </Link>
    
        <Link to="/Login" onClick={handleLoginNavigation}>


        <div className="icon-container">
         <IoLogIn className="sidebar-icon"/> 
         <span>Login</span>
       </div>



        </Link>
        <Link to="/signup" onClick={toggleSidebar}>

        <div className="icon-container">
         <FaUser className="sidebar-icon"/> 
         <span>Sign up</span>
       </div>


        </Link>

      </nav>
    </aside>
  );
}

export default Sidebar;
