import React from 'react'
import './Calendar.css'
import { useContext, useEffect, useState } from 'react'
import CalenderCard from './CalenderCard'
import { useParams, Link } from 'react-router-dom'
import GlobalContext from '../../GlobalContext'

const Calendar = () => {
  let { id } = useParams()

  const history = useParams()
  const { concerts } = useContext(GlobalContext)
  const [tenConcerts, setTenConcerts] = useState([])

  useEffect(() => {
    let tempSort = concerts.sort(function (a, b) {
      if (a.datum !== b.datum) {
        return a.datum > b.datum ? 1 : -1
      }
      if (a.hour !== b.hour) {
        return a.hour > b.hour ? 1 : -1
      }
      if (a.minute !== b.minute) {
        return a.minute > b.minute ? 1 : -1
      }
    })
    let tempFilter = tempSort.filter((event, index) => eventMapIndex(index))
    setTenConcerts(...[tempFilter])
  }, [history])

  function eventMapIndex(i) {
    return i >= id * 10 && i < (id + 1) * 10
  }

  return (
    <div className='container_calendar'>
      <div className='calendar-button-container'>
        <button>
          <Link to=''>-1</Link>
        </button>
        <button>
          <Link>current</Link>
        </button>
        <button>
          <Link>+1</Link>
        </button>
      </div>
      <div className='calendar'>
        {tenConcerts.map((event) => (
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
