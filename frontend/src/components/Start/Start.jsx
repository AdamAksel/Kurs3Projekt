import React, { useContext, useState, useEffect } from 'react'
import StartCards from '../Cards/StartCards'
import './Start.css'
import GlobalContext from '../../GlobalContext.jsx'
import Sidebar from '../Sidebar/Sidebar'

const Start = () => {
  const { featuredEvents, todaysEvents, recentlyAddedEvents } =
    useContext(GlobalContext)

  const [startEvents, setStartEvents] = useState([])

  return (
    <>
      <section className='start-flex'>
        <Sidebar />
        <div className='start-buttons-container'>
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
        <div className='startPage'>
          {startEvents.length == 0
            ? featuredEvents.map((event) => (
                <div className='sect-cards' key={Math.random() * 1000000}>
                  <StartCards event={event} />
                </div>
              ))
            : startEvents.map((event) => (
                <div className='sect-cards' key={Math.random() * 1000000}>
                  <StartCards event={event} />
                </div>
              ))}
        </div>
      </section>
    </>
  )
}

export default Start
