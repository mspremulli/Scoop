import React from 'react';
import './App.css';
import './components/Login.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Homepage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        {/* Use the Routes component to define your routes */}
        <Routes>
          {/* Define the login route */}
          <Route path="/" element={<HomePage />} />
        
          <Route path="/login" element={<Login />} />

          {/* Define the dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
