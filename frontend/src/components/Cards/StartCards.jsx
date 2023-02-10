import './StartCards.css'
import { Link } from 'react-router-dom'

export default function ({ event }) {
  return (
    <Link to={`/Event/${event.name}`} className='startCards'>
      <StartCardImage />
      <StartCardContent />
    </Link>
  )

  function StartCardImage() {
    return (
      <div className='cards-hero'>
        <img src={event.image} alt='ArtistImage Not Found' />
        <div className='cards-name'>{event.name}</div>
      </div>
    )
  }

  function StartCardContent() {
    return (
      <>
        <p className='start-cards-date'>Date: {event.datum}</p>
        <div className='start-cards-textbtn-wrapper'>
          <div className='start-cards-text-wrapper'>
            <p>
              Time: {event.hour}:{event.minute}
            </p>
            <p className='location1'>
              <b>{event.venue}</b>
            </p>
          </div>
          <div className='start-cards-eventbutton-div'>
            <button className='start-cards-eventbutton'>Buy Ticket</button>
          </div>
        </div>
      </>
    )
  }
}
