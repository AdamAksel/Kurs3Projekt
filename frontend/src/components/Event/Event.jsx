import React, { useContext, useState, useEffect } from 'react'
import './Event.css'
import { useParams, Link } from 'react-router-dom'
import GlobalContext from '../../GlobalContext'
import EventHero from './EventHero'
import EventTicket from './EventTicket'
import EventArtist from './EventArtist'

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

    window.scrollTo(0, 0)
  }, [id])

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value)
  }

  return (
    <>
      <div className='event'>
        <div className='Event-area'>
          <EventHero event={event} />
          <EventTicket event={event} />
          <EventArtist event={event} />
        </div>
      </div>
    </>
  )
}

export default Event
