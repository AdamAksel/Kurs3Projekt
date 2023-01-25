import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SearchInput() {
  return (
    <div className="Navbar-search">
    <div className="search_button">
        <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="searchIcon_search"
            />
            
    <input className="Navbar-search-input" />
    <button className="Navbar-search-button">Search</button>
    </div>
  </div>
  )
}
