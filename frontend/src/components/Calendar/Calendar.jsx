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
      return a.datum > b.datum ? 1 : -1
    })
    console.log(tempSort)
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
          <CalenderCard key={event.id + Math.random() * 1000} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Calendar
