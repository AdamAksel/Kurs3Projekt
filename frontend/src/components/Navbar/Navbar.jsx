
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import ImageHeader from "./ImageHeader";
import Calendar from "../Calendar/Calendar";
import { FaCalendarAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="navbar__nav">
      <div className="navbar__nav__logo">
        <NavLink to="/">
          <img src="./logo.svg" alt="vegas" className="navbar__nav__logo__icon" />
        </NavLink>
      </div>
      <div className="navbar__nav_calendar">
        <NavLink to="/Calendar" className="calendar_logo">
          <FaCalendarAlt className="calenderLogo" />
        </NavLink>
      </div>
      <div className="navbar__nav__home">
        <NavLink to="/">
        <FontAwesomeIcon icon={faHouseUser}  className="home_icon"/>
        </NavLink>
        </div>
      <div className="navbar__nav__login">
        <NavLink to="/Login">
          <div className="login">
            <FontAwesomeIcon icon={faCircleUser} className="icon iconUser" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 65 20"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        </NavLink>
        </div>
      </div>

      <ImageHeader />
    </div>
  );
};
export default Navbar;
