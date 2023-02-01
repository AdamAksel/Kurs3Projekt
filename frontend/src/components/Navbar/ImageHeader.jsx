import React from 'react'
import SearchInput from './SearchInput'
import {events} from '../event-info'

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
   
    <SearchInput events={events} />
    </div>
 
  )
  
}
