import React from 'react'
import './Calendar.css'
import { useContext } from 'react'
import CalenderCard from './CalenderCard'
import { useParams, Link } from 'react-router-dom'
import GlobalContext from '../../GlobalContext'

const Calendar = () => {
  let { id } = useParams()

  const { concerts } = useContext(GlobalContext)

  function eventMapIndex(i) {
    return i >= id * 10 && i < (id + 1) * 10
  }

  return (
    <div className='container_calendar'>
      <div className='calendar-button-container'>
        {id > 1 ? (
          <>
            {' '}
            <Link to={`/Calendar/${parseInt(id) - 2}`}>
              <button className='event__button'>{parseInt(id) - 2}</button>
            </Link>
            <Link to={`/Calendar/${parseInt(id) - 1}`}>
              <button className='event__button'>{parseInt(id) - 1}</button>
            </Link>
          </>
        ) : null}

        <button style={{ color: 'black' }} className='event__button'>
          {id}
        </button>
        <Link to={`/Calendar/${parseInt(id) + 1}`}>
          <button className='event__button'>{parseInt(id) + 1}</button>
        </Link>
        <Link to={`/Calendar/${parseInt(id) + 2}`}>
          <button className='event__button'>{parseInt(id) + 2}</button>
        </Link>
      </div>
      <div className='calendar'>
        {concerts
          .filter((event, index) => eventMapIndex(index))
          .map((event) => (
            <CalenderCard
              key={event.id + Math.random() * 10000000}
              event={event}
            />
          ))}
      </div>
    </div>
  )
}

export default Calendar
