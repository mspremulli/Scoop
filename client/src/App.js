import React from 'react';
import './App.css';
import './Login.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login'; // Import the Login component
import Dashboard from './Dashboard'; // Import the Dashboard component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Use the Routes component to define your routes */}
        <Routes>
          {/* Define the login route */}
          <Route path="/" element={<Login />} />

          {/* Define the dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
