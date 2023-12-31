import React from 'react';
import './App.css';
import './components/Login.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Homepage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Questions from './components/Questions';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        {/* Use the Routes component to define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/questions" element={<Questions /> } />
          <Route path="/aboutus" element={<AboutUs /> } />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
