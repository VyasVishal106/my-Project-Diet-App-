import React from 'react';
import { NavLink } from 'react-router-dom';

const ZeroText = () => {
  return (
    <div className="LeftZero">
      <h1 className="headtext">The Automatic Meal Planner</h1>
      <p className="NText">It is smart and easy to use, allowing you to save time, and offers even more possibilities.</p>
      <div className='ButtonsClass'>
        <NavLink className="buttonZeroOne" to={'/SignUp'} onClick={() => console.log("Create Account clicked")}>Create Account</NavLink>
        <NavLink className="buttonZeroTwo" to={'/login'} onClick={() => console.log("Login clicked")}>Login</NavLink>
      </div>
    </div>
  );
}

export default ZeroText;
