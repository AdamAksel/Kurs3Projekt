import React, { useState } from "react";
import { events } from "../event-info";

function ArtistSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
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
      <div className={`search-results ${searchTerm ? "show" : "hide"}`}>
        {events
          .filter((value) => {
            if (searchTerm === "") {
              return;
            } else if (
              value.artist.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((value, key) => {
            return <p key={value.date}>{value.artist}</p>;
          })}
      </div>
    </form>
  );
}

export default ArtistSearch;
