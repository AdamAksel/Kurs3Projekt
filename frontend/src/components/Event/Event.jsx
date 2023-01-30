import React, { useState, useEffect } from 'react'
import './Event.css'
import { useParams } from 'react-router-dom'
import { events } from '../event-info'

const Event = () => {
  const [eventInfo, setEventInfo] = useState(0)
  let { id } = useParams()

  useEffect(() => {
    for (let i = 0; i < events.length; i++) {
      let foundEvent = getKeyByValue(events[i], id)

      if (foundEvent) {
        setEventInfo({ ...events[i] })
        break
      }
    }
  }, [events])

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value)
  }

  return (
    <>
      <div className='Event-container'>
        <div className='Event-area'>
          <div className='Event-info'>Event info comming soon</div>
          <div className='Event-ticket'>Event ticket comming soon</div>
          <div className='Event-artist'>
            <h1>{eventInfo.artist}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
