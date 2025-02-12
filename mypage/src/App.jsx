// src/App.jsx
import React from 'react';
import CombinedPage from './components/CombinedPage';
import IndexPage from './components/IndexPage';

function App() {
  return (
    <div>
      <h1>Welcome to the Simple React App</h1>
      <CombinedPage /> {/* Render CombinedPage here */}
      <IndexPage />    {/* Render IndexPage here */}
    </div>
  );
}

export default App;
