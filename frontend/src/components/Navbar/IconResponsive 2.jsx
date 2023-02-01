import {
  faCalendarAlt,
  faCircleUser,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

export default function IconResponsive() {
  return (
    // <div>
    <ul className="navbar__nav__responsive">
      <li>
        <div className="navbar__nav__home">
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouseUser} className="faHome" />
          </NavLink>
        </div>
      </li>

      <li className="faCalendar">
        <NavLink to="/Calendar">
          <FontAwesomeIcon icon={faCalendarAlt} className="faCalendar" />
        </NavLink>
      </li>

      <li className="faUser">
        <NavLink to="/Login">
          <FontAwesomeIcon icon={faCircleUser} className="faUser" />
        </NavLink>
      </li>
    </ul>
  );
}
