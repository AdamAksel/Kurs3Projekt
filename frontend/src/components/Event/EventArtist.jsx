import { Link } from 'react-router-dom'

export default function EventArtist({ event }) {
  return (
    <div className='Event-artists'>
      <h1>Participating Artists</h1>
      <div className='Event-artists1'>
        <div className='Event-artists-row'>
          <img className='Event-artists-img' src={event.image} />
          <Link to={`/Artist/${event.name}`} className='Event-navlink'>
            <h3>{event.name}</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
