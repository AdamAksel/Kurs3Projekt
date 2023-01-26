import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SearchInput = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredEvents = events.filter(event =>
      event.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredEvents);
  };

  return (
    <div className="Navbar-search">
      <div className="search_button">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="searchIcon_search"
        />
        <input
          className="Navbar-search-input"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="Navbar-search-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {searchResults.length === 0 ? <p>No results found</p> : searchResults.map(event => (
          <div key={event.id}>{event.artist}</div>
        ))}
      </div>
    </div>
  );
};