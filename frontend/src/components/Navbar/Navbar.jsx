import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCircleUser} from "@fortawesome/free-solid-svg-icons";
import IconResponsive from "./IconResponsive";
import {events} from "../event-info.js";
import SearchInput from "./SearchInput.jsx";

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
                    <SearchInput events={events}/>
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
                                        <FontAwesomeIcon icon={faBars} className="icon iconBars"/>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                        <div className="responsive">
                            <IconResponsive/>
                        </div>
                    </nav>
                </div>
                <div className="nav_flex_2">
                </div>
            </header>
        </>
    );
};
export default Navbar;
