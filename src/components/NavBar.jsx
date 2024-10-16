import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = ({ isNavOpen, toggleNav }) => {
  return (
    <div className={`nav-panel ${isNavOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleNav}>
        {isNavOpen ? '←' : '→'}
      </button>
      <h2 className="nav-heading">🎯 Dashboard</h2>
      <h2 className="nav-heading">🗂️ My Budgets</h2>
      <ul>
        <li>August 2024</li>
        <li>September 2024</li>
      </ul>
      <button className="add-budget-button">+ Add Budget</button>
    </div>
  );
};

export default Navbar;
