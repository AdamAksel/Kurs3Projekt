import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function SearchInput({ events }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //   const handleSearch = () => {
  //     const filteredEvents = events.filter((event) => {
  //       if (searchTerm == "") {
  //         return;
  //       } else if (
  //         event.artist.toLowerCase().includes(searchTerm.toLowerCase())
  //       ) {
  //         return event
  //       }
  //     });
  //     setSearchResults(filteredEvents);
  //   };

  //   return (
  //     <div className="Navbar-search">
  //       <div className="search_button">
  //         <FontAwesomeIcon
  //           icon={faMagnifyingGlass}
  //           className="searchIcon_search"
  //         />
  //         <input
  //           className="Navbar-search-input"
  //           onChange={(e) => setSearchTerm(e.target.value)}
  //           placeholder="Search..."
  //         />
  //         <button className="Navbar-search-button" onClick={handleSearch}>
  //           Search
  //         </button>
  //       </div>
  //       <div className="search-results">
  //         {searchResults.length === 0  && searchTerm !== "" ? (

  //           <p >No results found</p>
  //         ) : (
  //           searchResults.map((event) => (
  //             <div key={event.date}>{event.artist}</div>
  //           ))
  //         )}
  //       </div>
  //     </div>
  //   );
  // }

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredEvents = events.filter((event) => {
      if (searchTerm == "") {
        return;
      } else if (
        event.artist.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return event;
      }
    });
    setSearchResults(filteredEvents);
  };

  return (
    <div className="nene">
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
        {searchResults.length === 0 && searchTerm !== "" ? (
          <p>No results found</p>
        ) : (
          searchResults.map((event) => (
            <Link
              to={`/search-results/${event.id}`}
              key={event.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="search-results-links">{event.artist}</div>
            </Link>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
