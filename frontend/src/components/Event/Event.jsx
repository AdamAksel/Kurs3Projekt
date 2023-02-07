import React, { useContext, useState, useEffect } from 'react'
import './Event.css'
import { useParams, NavLink } from 'react-router-dom'
import GlobalContext from '../../GlobalContext'

const Event = () => {
  const [event, setEvent] = useState(0)
  const { concerts } = useContext(GlobalContext)
  let { id } = useParams()

  useEffect(() => {
    for (let i = 0; i < concerts.length; i++) {
      let foundEvent = getKeyByValue(concerts[i], id)
      if (foundEvent) {
        setEvent({ ...concerts[i] })
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
            onClick={() => console.log(event)}
            className='Event-image-div'
            style={{ backgroundImage: `url(${event.image})` }}
          ></div>
          <div className='Event-info'>
            <h1>{event.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id
              cos ipsum dicta numquam.
            </p>
          </div>

          <div className='Event-ticket-container'>
            <h1>Standard</h1>
            <div className='Event-eventbutton-div'>
              <button
                disabled={event.ticket == 0}
                className='Event-eventbutton'
                style={event.ticket == 0 ? { backgroundColor: 'grey' } : null}
              >
                {event.ticket == 0 ? 'Tickets Unavaliable' : 'Buy Ticket'}
              </button>
            </div>
          </div>

          <div className='Event-artists'>
            <h1>Participating Artists</h1>
            <div className='Event-artists1'>
              <div className='Event-artists-row'>
                <div
                  className='Event-artists-img'
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                <NavLink to={`/Artist/${event.name}`} className='Event-navlink'>
                  <h3>{event.name}</h3>
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
