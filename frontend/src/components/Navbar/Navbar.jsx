import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "../Calendar/Calendar";
import { FaCalendarAlt, FaCalendarDay } from "react-icons/fa";
import ImageHeader from "./ImageHeader";
import IconResponsive from "./IconResponsive";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="nav_flex_1">
          <NavLink to="/">
            <img
              src="./logo.svg"
              alt="vegas"
              className="navbar__nav__logo__icon"
            />
          </NavLink>
          <nav className="navbar__nav">
            <ul className="navbar__nav__list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Calendar">Calendar</NavLink>
              </li>

              <li className="login_hover">
                <NavLink to="/Login">
                  <div className="login">
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      className="icon iconUser"
                    />
                    <FontAwesomeIcon icon={faBars} className="icon iconBars" />
                  </div>
                </NavLink>
              </li>
            </ul>
            <div className="responsive">
              <IconResponsive />
            </div>
          </nav>
        </div>
        <div className="nav_flex_2">
          <ImageHeader/>
        </div>
      </header>
    </>
  );
};
export default Navbar;
