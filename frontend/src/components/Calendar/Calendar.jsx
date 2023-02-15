import React from 'react'
import './Calendar.css'
import { useContext } from 'react'
import CalenderCard from './CalenderCard'
import { useParams, Link } from 'react-router-dom'
import GlobalContext from '../../GlobalContext'

const Calendar = () => {
  let { id } = useParams()
  const { concerts } = useContext(GlobalContext)

  return (
    <div className='container_calendar'>
      <Buttons />
      <Calendarium id={id} />
    </div>
  )
  function Buttons() {
    return (
      <div className='calendar-button-container'>
        {id > 1 ? (
          <>
            {' '}
            <Link to={`/Calendar/${parseInt(id) - 2}`}>
              <button className='calendar1-button'>{parseInt(id) - 2}</button>
            </Link>
            <Link to={`/Calendar/${parseInt(id) - 1}`}>
              <button className='calendar1-button'>{parseInt(id) - 1}</button>
            </Link>
          </>
        ) : id > 0 ? (
          <>
            {' '}
            <Link to={`/Calendar/${parseInt(id) - 1}`}>
              <button className='calendar1-button'>{parseInt(id) - 1}</button>
            </Link>
          </>
        ) : null}

        <button style={{ color: 'black' }} className='calendar1-button'>
          {parseInt(id)}
        </button>
        <Link to={`/Calendar/${parseInt(id) + 1}`}>
          <button className='calendar1-button'>{parseInt(id) + 1}</button>
        </Link>
        <Link to={`/Calendar/${parseInt(id) + 2}`}>
          <button className='calendar1-button'>{parseInt(id) + 2}</button>
        </Link>
      </div>
    )
  }
  function Calendarium({ id }) {
    return (
      <div className='calendar'>
        {concerts
          .filter((event, index) => index >= id * 10)
          .slice(0, 10)
          .map((event) => (
            <CalenderCard
              key={event.id + Math.random() * 10000000}
              event={event}
            />
          ))}
      </div>
    )
  }
}

export default Calendar
