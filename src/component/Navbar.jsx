
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const handleLogout = () =>{
    console.log("Logout")
    localStorage.removeItem('loggedIn')
    window.location.reload()

    window.location.href = '/login';
      }
    return (
      <div className='navbar-section'>
          <NavLink to='/' className='navbar-item'>Home</NavLink>
          <NavLink to='/login' className='navbar-item'>Login</NavLink>
          <NavLink to='/user' className='navbar-item'>User</NavLink>
          <NavLink className='navbar-item' onClick={handleLogout}>Logout</NavLink>
      </div>
    )
}

export default Navbar;