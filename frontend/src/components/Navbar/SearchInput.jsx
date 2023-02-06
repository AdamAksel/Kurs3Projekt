import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect,useContext } from "react";
import "./Navbar.css";
import { NavLink  } from "react-router-dom";
import GlobalContext from '../../GlobalContext.jsx'

export default function SearchInput() {
  const { concerts } = useContext(GlobalContext)
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchResults([]);

    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }

    let filteredEvents = [];
    concerts.forEach((element) => {
      if (element.name.toLowerCase().includes(searchTerm)) {
        filteredEvents.push({ value: element.name, id: element.id });
      }

      /*
      if (element.eventName.toLowerCase().includes(searchTerm)) {
        filteredEvents.push({ value: element.eventName, id: element.id });
      }
      */
    });

    

    setSearchResults(filteredEvents);
  };

  function clearSearch() {
    setSearchResults([]);
  }
  useEffect(() => {
    document.addEventListener("click", clearSearch);
    return () => {
      document.removeEventListener("click", clearSearch);
    };
  }, []);

  return (
    <div className="Navbar-search-container">
      <div className="Navbar-search">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="searchIcon_search"
        />
        <input
          className="Navbar-search-input"
          onChange={handleSearch}
          placeholder="Search..."
        />

        <div className="search-results">
          {searchResults.map((event) => {
            const key = `${event.id}-${event.value}`;

            return (
              <NavLink
                to={`/Event/${event.value}`}
                key={key}
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => clearSearch()}
              >
                <div className="search-results-links">{event.value}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
