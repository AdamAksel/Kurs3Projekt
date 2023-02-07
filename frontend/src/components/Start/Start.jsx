import React, { useContext, useState, useEffect } from 'react'
import StartCards from '../Cards/StartCards'
import './Start.css'
import GlobalContext from '../../GlobalContext.jsx'
import Sidebar from '../Sidebar/Sidebar'

export default function () {
  const { featuredEvents, 
    todaysEvents, 
    recentlyAddedEvents } = useContext(GlobalContext)

  const [startEvents, setStartEvents] = useState([])

  return <section className='start-flex'>
      <Sidebar />
      <EventButtons/>
      <StartPageEvents/>
  </section>

  function EventButtons() {
    return <div className='start-buttons-container'>
    <div
      onClick={() => setStartEvents([...todaysEvents])}
      className='start-button'
    >
      Todays Events
    </div>
    <div
      onClick={() => setStartEvents([...featuredEvents])}
      className='start-button'
    >
      Featured
    </div>
    <div
      onClick={() => setStartEvents([...recentlyAddedEvents])}
      className='start-button'
    >
      Latest Added
    </div>
  </div>
  }

  function StartPageEvents() {
    return <div className='startPage'>
    {startEvents.length == 0
      ? featuredEvents.map((event) => (
            <StartCards event={event} key={Math.random() * 1000000}/>       
        ))
      : startEvents.map((event) => (
            <StartCards event={event}  key={Math.random() * 1000000}/>
        ))}
  </div>  
  }
   
}

