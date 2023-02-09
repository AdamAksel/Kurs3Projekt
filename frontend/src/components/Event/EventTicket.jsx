import { Link } from 'react-router-dom'

export default function EventTicket({ event }) {
  return (
    <div className='event-ticket'>
      <h1>Standard</h1>

      <Link to='/arenaseats' className='event-ticket-link'>
        <button
          disabled={event.ticket == 0}
          className='event-ticket-button'
          style={event.ticket == 0 ? { backgroundColor: 'grey' } : null}
        >
          {event.ticket == 0 ? 'Tickets Unavaliable' : 'Buy Ticket'}
        </button>
      </Link>
    </div>
  )
}
