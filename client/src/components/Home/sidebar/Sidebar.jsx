import React, { useState } from 'react';
import { doSignOut } from '../../../Firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    doSignOut().then(() => {
      navigate('/login');
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Open'} Menu
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
          <path d="M2 5h20v2H2V5zm0 6h20v2H2v-2zm0 6h20v2H2v-2z"/>
        </svg>
      </button>
      <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <ul className="sidebar-menu">
          <li><NavLink to="/Home" className="sidebar-link">User Profile</NavLink></li>
          <li><NavLink to="/Home/Diet" className="sidebar-link">Diet Recommendations</NavLink></li>
          <li><NavLink to="/Home/Today's Meal" className="sidebar-link">Today's Meal</NavLink></li>
          <li><NavLink to="/Home/Food" className="sidebar-link">Food</NavLink></li>
        </ul>
        <div className="sidebar-footer">
          <button className="signout-btn" onClick={handleSignOut}>
            <svg viewBox="0 0 512 512" className="signout-icon">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9v-62.1h-128c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96H96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96V128C0 75 43 32 96 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
