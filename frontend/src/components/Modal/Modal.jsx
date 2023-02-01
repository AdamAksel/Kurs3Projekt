import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import './Modal.css'
import { events } from '../event-info'

export default function Modal() {
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
      <div className='modal'>
        <NavLink
          to={`/Event/${eventInfo.eventName}`}
          className='start-cards-navlink'
        >
          <div className='overlay'></div>
        </NavLink>
        <div className='modal-content'>
          <div id='modal-pic'>
            {' '}
            <img src={eventInfo.image} id='chris' />{' '}
          </div>
          <div className='modal-text'>
            <div className='modal-div'>{eventInfo.artist}</div>
            <div className='modal-info'>{eventInfo.info}</div>
          </div>
          <div className='close-modal'>Close</div>
        </div>
      </div>
    </>
  )
}
