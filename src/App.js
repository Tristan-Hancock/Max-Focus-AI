import logo from './logofill.png';
import './App.css';
import React, { useState } from 'react';
import OpenAI from "openai";

function App() {
  const [task, setTask] = useState('');

  const handleTaskSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action
    console.log(task); // For demonstration purposes
    setTask(''); // Clear the input field after submission
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
      </header>
      
      <main className="App-body">
        <div className="task-input-container">
          <h2 className="task-input-header">
            Got too many tasks? Don't know where to start? 
          </h2>
          <h3 className="task-input-2"> We can help you</h3>
        </div>
      </main>

      <div className="task-bar">
        <form onSubmit={handleTaskSubmit}>
          <input 
            type="text" 
            className="task-input-field" 
            placeholder="Enter a task..."
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
  )
}

export default App;
