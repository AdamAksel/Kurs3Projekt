import React from 'react'
import SearchInput from './SearchInput'
import {events} from '../event-info'

export default function ImageHeader() {
  
  return (
    <div className="Navbar-header">
    <div className="Navbar-search-image">
    </div>
    <SearchInput events={events} />
  </div>
  )
}
