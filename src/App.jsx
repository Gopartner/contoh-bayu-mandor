// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Contact from './components/Contact'; // Import halaman lain sesuai kebutuhan
import About from './components/About';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk login status

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        handleLogout={handleLogout}
        onMenuItemClick={(content) => {
          // Handle menu item click if necessary
          console.log(content);
        }}
      />
      <main className="pt-16"> {/* Add padding to avoid content overlapping with the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* Tambahkan rute lain sesuai kebutuhan */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;

