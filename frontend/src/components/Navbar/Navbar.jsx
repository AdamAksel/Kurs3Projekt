import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faCoffee,
  faHamburger,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

/*
<NavLink
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              to='/'
            >
              <i className='lni lni-home'></i> Home
            </NavLink>
*/
const Navbar = () => {
  return (
    <>
      <header className="Navbar-sticky">
        <nav className="Navbar-nav">
          <div className="Navbar-nav-item">
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              <i className="lni lni-home"></i>
            </NavLink>
          </div>

          <NavLink
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Calendar"
          >
            <i class="lni lni-calendar"></i>
          </NavLink>
          <NavLink
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Login"
          >
            <div className="login">
              <FontAwesomeIcon icon={faCircleUser} className="icon iconUser" />
              <FontAwesomeIcon icon={faBars} className="icon iconBars" />
            </div>
            {/* <i class="lni lni-user"></i> */}
          </NavLink>
        </nav>
      </header>
      <header className="Navbar-header">
        <div className="Navbar-search-image">
          <div className="Navbar-search">
            <input className="Navbar-search-input" />
            <button className="Navbar-search-button">Search</button>
          </div>
        </div>
      </header>
      <div className="Navbar-div-container">
        <Sidebar />
        <main className="Navbar-main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Navbar;
