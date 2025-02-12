// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Make sure to import the styles
import App from './App';  // Import the App component

// Make sure to render into the root div from index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
