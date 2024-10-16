import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import './styles/App.css'; // Ensure you have some basic styles

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default App;
