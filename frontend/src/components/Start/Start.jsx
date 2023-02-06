import React, { useContext, useState } from 'react'
import StartCards from '../Cards/StartCards'
import './Start.css'
import GlobalContext from '../../GlobalContext.jsx'
const Start = () => {
  const { concerts } = useContext(GlobalContext)

  return (
    <>
      <section className=''>
        <div className='startPage'>
          {concerts
            .filter((event, index) => index < 6)
            .map((event) => (
              <div className='sect-cards' key={event.date}>
                <StartCards event={event} />
              </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Start
