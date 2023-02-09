
import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ImageHeader from "./ImageHeader";
import IconResponsive from "./IconResponsive";
import { AuthContext } from "../context/authContext";

import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import IconResponsive from './IconResponsive'
import SearchInput from './SearchInput'


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <header className='header'>
        <div className='nav_flex_1'>
          <NavLink to='/'>
            <img
              src='./logo.svg'
              alt='Logo'
              className='navbar__nav__logo__icon'
            />
          </NavLink>
          <SearchInput />
          <nav className='navbar__nav'>
            <ul className='navbar__nav__list'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/Calendar/0'>Calendar</NavLink>
              </li>

              {currentUser ? (
                <li className="username">
                  <h4>{currentUser ? currentUser.email.split("@", 1): currentUser}</h4>
                  <div onClick={handleLogout}>logout</div>
                </li>
              ) : (
                <li className="login_hover">
                  <NavLink to="/Login">
                    <div className="login">
                      <FontAwesomeIcon
                        icon={faCircleUser}
                        className="icon iconUser"
                      />
                      <FontAwesomeIcon
                        icon={faBars}
                        className="icon iconBars"
                      />
                    </div>
                  </NavLink>
                </li>
              )}


              <li className='login_hover'>
                <NavLink to='/Login'>
                  <div className='login'>
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      className='icon iconUser'
                    />
                    <FontAwesomeIcon icon={faBars} className='icon iconBars' />
                  </div>
                </NavLink>
              </li>
            </ul>
            <div className='responsive'>
              <IconResponsive />
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Navbar
