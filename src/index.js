import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from '@supabase/supabase-js';
import {SessionContextProvider} from '@supabase/auth-helpers-react';
import Login from './Login';

const supabaseUrl = 'https://gvdxnqjkbatwduccsbaf.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
//onst supabase = createClient(supabaseUrl, supabaseKey)
const root = ReactDOM.createRoot(document.getElementById('root'));
const supabase = createClient(
  "https://gvdxnqjkbatwduccsbaf.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2ZHhucWprYmF0d2R1Y2NzYmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxODk3MjAsImV4cCI6MjAyMzc2NTcyMH0.yISvLnzKT_l-uQb8WUPil19UpHoxceYr2pkJuewgww8"
);


root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient = {supabase}>
    <App />
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
