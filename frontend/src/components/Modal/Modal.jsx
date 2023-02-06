import React, { useContext, useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import './Modal.css'
import GlobalContext from '../../GlobalContext'

export default function Modal() {
  const { concerts } = useContext(GlobalContext)
  const [event, setEvent] = useState(0)
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
      <div className='modal'>
        <NavLink to={`/Event/${event.name}`} className='start-cards-navlink'>
          <div className='overlay'></div>
        </NavLink>
        <div className='modal-content'>
          <div id='modal-pic'>
            {' '}
            <img src={event.image} id='chris' />{' '}
          </div>
          <div className='modal-text'>
            <div className='modal-div'>{event.name}</div>
            <div className='modal-info'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
              autem et. Tenetur, voluptatem totam consectetur ad officia odio
              aperiam non veritatis nam! Nulla soluta ipsa ex odio eum
              temporibus, tempore pariatur officiis, est et nemo id aliquam
              eligendi consequuntur, ducimus necessitatibus repellendus
              perferendis alias quod laboriosam sed. Optio, fugiat porro!
            </div>
          </div>
          <div className='close-modal'>Close</div>
        </div>
      </div>
    </>
  )
}
