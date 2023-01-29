import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


export default function SearchInput({ events }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchResults([]);

    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }

    // let arrayTest = [];
    // for (let i = 0; i < events.length; i++) {
      
    //   if (events[i].artist.toLowerCase().includes(searchTerm)) {
    //     arrayTest.push({ value: events[i].artist, id: events[i].id });
    //   }
    //   if (events[i].eventName.toLowerCase().includes(searchTerm)) {
    //     arrayTest.push({ value: events[i].eventName, id: events[i].id });
    //   }
    // }

    let filteredEvents = [];
    events.forEach((element) => {
      
      if (element.artist.toLowerCase().includes(searchTerm)) {
        filteredEvents.push({ value: element.artist, id: element.id });
      }

      if (element.eventName.toLowerCase().includes(searchTerm)) {
        filteredEvents.push({ value: element.eventName, id: element.id });
      }
    });
    console.log(filteredEvents);
    setSearchResults(filteredEvents);
  };

  return (
    <div className="Navbar-search-container">
      <div className="Navbar-search">
        <div className="search_button">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="searchIcon_search"
          />
          <input
            className="Navbar-search-input"
            onChange={handleSearch}
            placeholder="Search..."
          />
          <button className="Navbar-search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="search-results">
          {searchResults.map((event) => {
            const key = `${event.id}-${event.value}`;

            return (
              <Link
                to={`/Event/${event.value}`}
                key={key}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="search-results-links">{event.value}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
