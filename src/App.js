import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios';
import logo from './logofill.png';
import './App.css';
import Sidebar from './sidebar'; // Import the Sidebar component
import About from './About'; 
import Login from './Login'; 
import SignUp from './signUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;


function App() {
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading status
  const [task, setTask] = useState('');
  const [output, setOutput] = useState(''); // New state variable for the output
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add this line
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Add this function
  
  async function callOpenAIAPI() {
    setIsLoading(true); // Start loading
    console.log("Calling OpenAI");
  
    const API_BODY = {
      model: 'gpt-3.5-turbo',
      messages: [{
        role: "system",
        content: 'You are a productive coach, you help people select a task on what they need to get done, you help people who don\'t know what to do next, you select a task for them to do based on what could be the most important, ONLY RESPOND WITH THE ORDER IN WHICH TASKS SHOULD BE COMPLETED AND NOTHING ELSE, start the sentence with "I think you should\n " and then display the answers one below the other in a list ' + task,

      }, {
        role: "user",
        content: task,
      }],
      temperature: 0.5,
      max_tokens: 40,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.REACT_APP_OPENAI_API_KEY, // Ensure your API key is correctly included
        },
        body: JSON.stringify(API_BODY)
      });
  
      if (!response.ok) { // Check if the response was ok (status in the range 200-299)
        console.error('API request failed with status', response.status);
        const errorInfo = await response.text(); // Attempt to read response text
        console.error('Failure response body:', errorInfo);
        return; // Exit the function or handle the error appropriately
      }
  
      const data = await response.json(); // Correctly await the parsing of the JSON
      if (data.choices && data.choices.length > 0) {
        const responseText = data.choices[0].message.content; // Assuming the response structure matches your expectations
        setOutput(responseText); // Update the output state variable
        setTask('');
      } else {
        console.error('No choices in response:', data);
      }
    } catch (error) {
      console.error('Error during API call:', error);
    } finally{
      setIsLoading(false); // Stop loading once the call is completed or fails
    }
  }
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
   
  }
  return (
    <BrowserRouter>
  <div className="App">
    <header className="App-header">
      <img src={logo} alt="Logo" className="App-logo" />
    </header>

    <div className="sidebar-container">
      <div className="sidebarbutton"></div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>

    

    <main className="App-body">
      <div className="task-input-container">
        <h2 className="task-input-header">
          Overwhelmed with tasks? Let Max AI help you prioritize, organize, and efficiently manage your to-do list
        </h2>
        <h3 className="task-input-2">One Task At A Time</h3>
      </div>
      <div className="output-container">
        <div className='responsebox'>
          <p>{output}</p>
        </div>
      </div>
    </main>
    <div className="animations">
      {isLoading && (
        <div className="loader">
          <div className="square" id="sq1"></div>
          <div className="square" id="sq2"></div>
          <div className="square" id="sq3"></div>
          <div className="square" id="sq4"></div>
          <div className="square" id="sq5"></div>
          <div className="square" id="sq6"></div>
          <div className="square" id="sq7"></div>
          <div className="square" id="sq8"></div>
          <div className="square" id="sq9"></div>
        </div>
      )}
    </div>

    <div className="input-container">
      <form onSubmit={handleTaskSubmit} className="sender-area">
        <div className="input-place">
          <input
            onChange={(e) => setTask(e.target.value)}
            placeholder="Start typing..."
            className="send-input"
            value={task}
          />
          <button onClick={callOpenAIAPI} className="send">
          <svg className="send-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#6B6C7B" d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"/>
        </svg>
          </button>
        </div>
      </form>
    </div>

    <footer className="App-footer">
    <a className="TrisContact"href="https://techtris.in/#"target="_blank" rel="noopener noreferrer"> Contact-Tristan Hancock</a>
          
          <div class="card">
    <a href="#" class="socialContainer containerOne">
    <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
     </a>

    <a href="#" class="socialContainer containerTwo">
     <svg class="socialSvg twitterSvg" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
  
   <a href="https://www.linkedin.com/in/tristan-hancock-b54570223/" class="socialContainer containerThree">
    <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
    </a>

    <a href="#" class="socialContainer containerFour">
     <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
      </a>
       </div>
    </footer>
  </div>
</BrowserRouter>
  );
  
  }

export default App;
