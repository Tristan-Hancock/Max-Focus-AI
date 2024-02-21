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
 "YOUR URL",
 "API KEY"
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
