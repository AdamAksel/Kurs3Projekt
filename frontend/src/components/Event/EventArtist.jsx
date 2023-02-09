import { Link } from 'react-router-dom'

export default function EventArtist({ event }) {
  return (
    <div className='event-artists'>
      <h1>Participating Artists</h1>
      <div className='event-artists-wrap'>
        <div className='event-artists-row'>
          <img className='event-artists-img' src={event.image} />
          <Link to={`/Artist/${event.name}`} className='event-navlink'>
            <h3>{event.name}</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
