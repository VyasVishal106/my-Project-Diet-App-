import React from 'react'
import { doSignOut } from '../../Firebase/auth';
import { NavLink, Link, useNavigate, Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';








  


const Home = () => {
  



  return (
    <div className='HomeMain'>
      <Sidebar/>
      <Outlet />


        
    </div>
  )
}

export default Home
