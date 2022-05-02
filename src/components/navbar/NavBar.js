import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../avengers-logo.png';
import './navbar.css';


const NavBar = () => {
  return (
    <div className='navbar'>
        <Link to={'/heroes'}><img src={logo} alt="" /></Link>
    </div>
  )
}

export default NavBar