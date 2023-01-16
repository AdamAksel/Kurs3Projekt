import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'
import Sidebar from './Sidebar/Sidebar'

const Navbar = () => {
  return (
    <>
      <header className='Navbar-header'>
        <nav className='Navbar-nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Calendar'>Calendar</NavLink>
          <NavLink to='/Login'>Login</NavLink>
        </nav>
      </header>
      <div className='Navbar-div-container'>
        <Sidebar />
        <main className='Navbar-main'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Navbar
