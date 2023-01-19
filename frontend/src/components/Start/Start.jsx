import React, { useState, useEffect } from 'react'
import StartCards from '../Cards/StartCards'
import { events } from '../event-info'
import './Start.css'
const Start = () => {
  const [eventInfo, setEventInfo] = useState(events)

  return (
    <>
      <section className=''>
        <div className='startPage'>
          {eventInfo
            .filter((event, index) => index < 6)
            .map((event, index) => (
              <div className='sect-cards' key={event.date}>
                <StartCards event={events[index]} />
              </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Start
