import { Link } from 'react-router-dom'

export default function EventTicket({ event }) {
  return (
    <div className='Event-ticket-container'>
      <h1>Standard</h1>

      <Link to='/arenaseats' className='Event-eventbutton-div'>
        <button
          disabled={event.ticket == 0}
          className='Event-eventbutton'
          style={event.ticket == 0 ? { backgroundColor: 'grey' } : null}
        >
          {event.ticket == 0 ? 'Tickets Unavaliable' : 'Buy Ticket'}
        </button>
      </Link>
    </div>
  )
}
