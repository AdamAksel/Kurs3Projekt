import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ImageHeader() {
  return (
    <div className="image_header">
      <div className="Navbar-search-image">
        <img
          src="https://images.squarespace-cdn.com/content/v1/570d339f8a65e2e984e265fc/1572563255064-HRM7IPO57ZW0CU7B1YJ6/https___cdn.evbuc.com_images_62445254_85974847449_1_original.jpg?format=1000w"
          alt="vegas"
          className="Navbar-search-image"
        />
      </div>
      <div className="search_input">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="searchIcon_search"
        />

        <input className="Navbar-search-input" />
      </div>
    </div>
  );
}
