import logo from './logofill.png';
import './App.css';
import { Placeholder } from 'react-bootstrap';
import React, { useState } from 'react';
import OpenAI from "openai";

function App() {
  const [task, setTask] = useState('');

  const handleTaskSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action

    // Handle the task here (e.g., adding it to a list)
    console.log(task); // For demonstration purposes

    setTask(''); // Clear the input field after submission
  }

  return (
    <div className="App">
      <header className="App-header">
        {
                <img src={logo} alt="Logo" className="App-logo" />
        }
        
      </header>
      <main className="App-body">
  <div className="task-input-container">
    <h2 className="task-input-header">
      Tell Me Everything You Have To Get Done, We Will Help You Pick
    </h2>

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
</main>





      

      <footer className="App-footer">
        {
         <a
         className="TrisContact"
         href="https://techtris.in/#"
         target="_blank"
         rel="noopener noreferrer"
       >
         Contact Me-  Tristan Hancock
       </a>
        }
        
      </footer>
 
      </div>
   
  );
}

export default App;
