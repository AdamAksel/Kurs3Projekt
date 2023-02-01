import React, { useState, useEffect } from 'react'
import './Event.css'
import { useParams, NavLink } from 'react-router-dom'
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
  }, [id])

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value)
  }

  return (
    <>
      <div className='Event-container'>
        <div className='Event-area'>
          <div
            className='Event-image-div'
            style={{ backgroundImage: `url(${eventInfo.image})` }}
          />
          <div className='Event-info'>
            <h1>{eventInfo.eventName}</h1>
            <p>{eventInfo.info}</p>
          </div>

          <div className='Event-ticket-container'>
            <h1>Standard</h1>
            <div className='Event-eventbutton-div'>
              <button
                disabled={eventInfo.tickets == 0}
                className='Event-eventbutton'
                style={
                  eventInfo.tickets == 0 ? { backgroundColor: 'grey' } : null
                }
              >
                {eventInfo.tickets == 0 ? 'Tickets Unavaliable' : 'Buy Ticket'}
              </button>
            </div>
          </div>

          <div className='Event-artists'>
            <h1>Participating Artists</h1>
            <div className='Event-artists1'>
              <div className='Event-artists-row'>
                <div
                  className='Event-artists-img'
                  style={{ backgroundImage: `url(${eventInfo.image})` }}
                ></div>
                <NavLink
                  to={`/Artist/${eventInfo.artist}`}
                  className='Event-navlink'
                >
                  <h3>{eventInfo.artist}</h3>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Event
