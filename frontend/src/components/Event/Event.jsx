import React, { useContext, useState, useEffect } from 'react'
import './Event.css'
import { useParams, Link } from 'react-router-dom'
import GlobalContext from '../../GlobalContext'

const Event = () => {
  const [event, setEvent] = useState(0)
  const { concerts } = useContext(GlobalContext)
  let { id } = useParams()

  useEffect(() => {
    for (let i = 0; i < concerts.length; i++) {
      let foundEvent = getKeyByValue(concerts[i], id)
      console.log(foundEvent)
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
          <img className='Event-image-div' src={event.image} />
          <div className='Event-info'>
            <h1>{event.name}</h1>
            <p>{event.info}</p>
          </div>

          <div className='Event-ticket-container'>
            <h1>Standard</h1>

            <Link to='/arenaseats' className='Event-eventbutton-div'>
              <button
                disabled={event.ticket == 0}
                className='Event-eventbutton'
                style={event.ticket == 0 ? { backgroundColor: 'grey' } : null}
              >
                {event.ticket == 0 ? 'Tickets Unavaliable' : 'Buy Ticket'}
              </button>
            </Link>
          </div>

          <div className='Event-artists'>
            <h1>Participating Artists</h1>
            <div className='Event-artists1'>
              <div className='Event-artists-row'>
                <img className='Event-artists-img' src={event.image} />
                <Link to={`/Artist/${event.name}`} className='Event-navlink'>
                  <h3>{event.name}</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
