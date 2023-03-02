import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import { ContextProvider } from './components/context/Context';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <ContextProvider>
		<Router>
        <App />
		</Router>
    </ContextProvider>
     
    
    );

reportWebVitals();