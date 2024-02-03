import React, { useState } from 'react';
import axios from 'axios';
import logo from './logofill.png';
import './App.css';
import Sidebar from './sidebar'; // Import the Sidebar component
import About from './About'; 
import Login from './Login'; 
import SignUp from './signUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  

  const [task, setTask] = useState('');
  const [output, setOutput] = useState(''); // New state variable for the output
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add this line
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Add this function
  

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
  

    // Use environment variable or secure method to store your OpenAI API key
    const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; //add this after UI is done

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'gpt-3.5-turbo-16k-0613',
          prompt: task,
          temperature: 0.5,
          max_tokens: 100,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          }
        }
      );

      setOutput(response.data.choices[0].text); // Update the output state with the response
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setOutput('Failed to get response from Max AI.'); // Handle error
    }
  setTask('')
  };
  return (
    <BrowserRouter> {/* Assuming Router is BrowserRouter imported correctly */}
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" className="App-logo" />
        </header>
        <div className="sidebar-container">
        <div className="sidebarbutton">
       
        </div>
  
         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        
        <Routes>
          <Route path="/about" element={<About />}
           />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add more routes as needed */}
        </Routes>
  
        <main className="App-body">
          <div className="task-input-container">
            <h2 className="task-input-header">
              Got too many things to do? Don't know where to start?
            </h2>
            <h3 className="task-input-2">We can help you</h3>
          </div>
          <div className="output-container">
            <h3>test response</h3>
            <div className='responsebox'><p>{output}</p></div>
          </div>
        </main>
        
        <div className="input-container">
          <form onSubmit={handleTaskSubmit}>
            <input
              type="text" 
              className="task-bar" 
              placeholder="Tell me your tasks"
              value={task}
              onChange={(e) => setTask(e.target.value)} 
            />
          </form>
        </div>
        
        <footer className="App-footer">
          <a
            className="TrisContact"
            href="https://techtris.in/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me- Tristan Hancock
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
  
  }

export default App;
