import React from 'react';
import google from './google.png';
import supabase from './supabase.png';
import openai from './gpt.jpg';
import tris from './TristanPfp.jpeg';
import './About.css';
import logo from './logofill.png';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './sidebar'; // Import the Sidebar component
import { useState } from 'react';

function AboutPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add this line
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Add this function
  
  return (
    <div className="about-page">
      <div className="sidebar-container">
      
      <div className="sidebarbutton"></div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} 
      />
    </div>
      <div className="intro">

      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
      </header>

        <h1>About Max Focus AI</h1>
      </div>
      <div className="content">
        <p>Max Focus 2.0 now allows you to add these tasks to your #googlecalendar, making it easier to keep track of what needs to be done.</p>
        <p>Connecting my #react Web App to #googlecalendar using #supabase and #googlecalendarapi. Max Focus AI utilizes #gpt4 to analyze tasks given by the user to provide a productive response, aiding the user with their complex tasks.</p>
        <p>This web app can be particularly beneficial for people facing #adhdstruggles, offering a clear focus on the most optimal approach to completing tasks. By leveraging Google authentication, users can securely log in to their accounts, granting access to send requests to the Google Calendar API.</p>
      </div>
      <img src={tris} alt="Tristan Profile" className="circular-image" />

      <div className="image-container">
    <img src={supabase} alt="Supabase" className="circular-image" />
    <img src={google} alt="Google" className="circular-image" />
    <img src={openai} alt="OpenAI" className="circular-image" />
  </div>

    </div>
  );
}

export default AboutPage;
