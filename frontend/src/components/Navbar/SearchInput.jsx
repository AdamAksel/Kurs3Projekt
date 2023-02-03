import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useState, useEffect} from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

export default function SearchInput({events}) {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchResults([]);

        if (searchTerm === "") {
            setSearchResults([]);
            return;
        }

        let filteredEvents = [];
        events.forEach((element) => {
            if (element.artist.toLowerCase().includes(searchTerm)) {
                filteredEvents.push({value: element.artist, id: element.id});
            }

            if (element.eventName.toLowerCase().includes(searchTerm)) {
                filteredEvents.push({value: element.eventName, id: element.id});
            }
        });

        setSearchResults(filteredEvents);

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
        <div className="Navbar-search">

            <input
                className="Navbar-search-input"
                onChange={handleSearch}
                placeholder="Search..."
                />
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="searchIcon_search"
            />

            <div className="search-results">
                {searchResults.map((event) => {
                    const key = `${event.id}-${event.value}`;

                    return (
                        <NavLink
                            to={`/Event/${event.value}`}
                            key={key}
                            style={{textDecoration: "none", color: "black"}}
                            onClick={() => clearSearch()}
                        >
                            <div className="search-results-links">{event.value}</div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}
