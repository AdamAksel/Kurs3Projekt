import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar/Sidebar";
import { events } from "../event-info";
import { useState } from "react";
import StartCards from "../Cards/StartCards";


/*
<NavLink
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              to='/'
            >
              <i className='lni lni-home'></i> Home
            </NavLink>
*/
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
            <i className="lni lni-calendar"></i>
          </NavLink>
          <NavLink
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Login"
          >
            <i className="lni lni-user"></i>
          </NavLink>
        </nav>
      </header>
      <header className="Navbar-header">
        <div className="Navbar-search-image">
          <div className="Navbar-search-container">
            <div className="Navbar-search">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <input
                  className="Navbar-search-input"
                  type="text"
                  placeholder="Search..."
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
                <button className="Navbar-search-button" type="submit">
                  Search
                </button>
                <div
                  className={`search-results ${searchTerm ? "show" : "hide"}`}
                >
                  {events
                    .filter((value) => {
                      if (searchTerm === "") {
                        return;
                      } else if (
                        value.artist
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return value;
                      }
                    })
                    .map((value, key) => {
                      return <p key={value.date} >{value.artist}</p>;
                    })}
                </div>
              </form>
            </div>
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
