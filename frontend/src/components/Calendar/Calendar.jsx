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
            <Buttons/>
            <Calendarium/>
        </div>
    )
    function Buttons() {
        return <div className='calendar-button-container'>
            {id > 1 ? (
                <>
                    {' '}
                    <Link to={`/Calendar/${parseInt(id) - 2}`}>
                        <button className='button'>{parseInt(id) - 2}</button>
                    </Link>
                    <Link to={`/Calendar/${parseInt(id) - 1}`}>
                        <button className='button'>{parseInt(id) - 1}</button>
                    </Link>
                </>
            ) : null}

            <button style={{ color: 'black' }} className='button'>
                {id}
            </button>
            <Link to={`/Calendar/${parseInt(id) + 1}`}>
                <button className='button'>{parseInt(id) + 1}</button>
            </Link>
            <Link to={`/Calendar/${parseInt(id) + 2}`}>
                <button className='button'>{parseInt(id) + 2}</button>
            </Link>
        </div>
    }
    function Calendarium() {
        return <div className='calendar'>
            {concerts
                .filter((event, index) => eventMapIndex(index))
                .map((event) => (
                    <CalenderCard
                        key={event.id + Math.random() * 10000000}
                        event={event}
                    />
                ))}
        </div>
    }
    function eventMapIndex(i) {
        return i >= id * 10 && i < (id + 1) * 10
    }
}

export default Calendar
