import React, { useContext, useState, } from 'react'
import './Start.css'
import GlobalContext from '../../GlobalContext.jsx'
import Sidebar from '../Sidebar/Sidebar'
import StartPageEvents from './StartPageEvents'
import EventButtons from './EventButtons'

export default function () {
  const { featuredEvents, 
    todaysEvents, 
    recentlyAddedEvents } = useContext(GlobalContext)

  const [startEvents, setStartEvents] = useState([])

  return <section className='start-flex'>
      <Sidebar />
      <EventButtons todaysEvents ={todaysEvents} recentlyAddedEvents={recentlyAddedEvents} featuredEvents={featuredEvents} setStartEvents={setStartEvents} />
      <StartPageEvents startEvents={startEvents} featuredEvents={featuredEvents} />
  </section>
}

