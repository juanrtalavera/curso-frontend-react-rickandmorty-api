import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ authenticated, logoutUser}) => {
  return (
    <div className='navbar'>
        <ul>
        <img src='https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png' className='imagen_navbar'></img>
            <li id='navbar-elements'>
                <Link to='/'>Home</Link>
            </li>
            <li id='navbar-elements'>
                <Link to='/characters'>Characters</Link>
            </li>
            <div id='lognav'>
              {authenticated ? (
              <li>
              <p className='logout' onClick={logoutUser}>Logout</p>
              </li>
              ) : (<Link to="/login" className='login'>Login</Link>)}
            </div>
        </ul>
    </div>
  )
}

export default Navbar