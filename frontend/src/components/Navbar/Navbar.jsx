import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ImageHeader from "./ImageHeader";
import IconResponsive from "./IconResponsive";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="nav_flex_1">
          <Link to="/">
            <img
              src="./logo.svg"
              alt="vegas"
              className="navbar__nav__logo__icon"
            />
          </Link>
          <nav className="navbar__nav">
            <ul className="navbar__nav__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Calendar">Calendar</Link>
              </li>

              <li className="login_hover">
                <Link to="/Login">
                  <div className="login">
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      className="icon iconUser"
                    />
                    <FontAwesomeIcon icon={faBars} className="icon iconBars" />
                  </div>
                </Link>
              </li>
            </ul>
            <div className="responsive">
              <IconResponsive />
            </div>
          </nav>
        </div>
        <div className="nav_flex_2">
          <ImageHeader />
        </div>
      </header>
    </>
  );
};
export default Navbar;
