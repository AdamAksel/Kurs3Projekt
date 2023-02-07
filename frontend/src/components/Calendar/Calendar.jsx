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
        <button>
          <Link to={`/Calendar/${parseInt(id) - 2}`}>{parseInt(id) - 2}</Link>
        </button>
        <button>
          <Link to={`/Calendar/${parseInt(id) - 1}`}>{parseInt(id) - 1}</Link>
        </button>
        <button>{id}</button>
        <button>
          <Link to={`/Calendar/${parseInt(id) + 1}`}>{parseInt(id) + 1}</Link>
        </button>
        <button>
          <Link to={`/Calendar/${parseInt(id) + 2}`}>{parseInt(id) + 2}</Link>
        </button>
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
