import { faCalendar, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
        <nav className="Navbar-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="calender__link">
            <FontAwesomeIcon icon={faCalendarDays}  className="calendar_logo"/>
              <NavLink to="/Calendar">Calendar</NavLink>
            </li>

            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
          </ul>
        </nav>
  
      {/* <div className="Navbar-div-container"> */}
        {/* <Sidebar /> */}
        <main className="Navbar-main">
          <Outlet />
        </main>
      {/* </div> */}
    </>
  );
};

export default Navbar;
