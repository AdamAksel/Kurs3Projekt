import './StartCards.css'
import { Link } from 'react-router-dom'
import altImg from '../Sidebar-Card/ATLienz.jpg'

export default function ({ event }) {
  return (
    <Link to={`/Event/${event.id}`} className='startCards'>
      <StartCardImage />
      <StartCardContent />
    </Link>
  )

  function StartCardImage() {
    return (
      <div className='cards-hero'>
        <img
          src={event.image}
          alt='ArtistImage Not Found'
          onError={(e) => {
            e.target.src = altImg
          }}
        />
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

            <b className='start-cards-location'>{event.venue}</b>
          </div>
          <div className='start-cards-eventbutton-div'>
            <button className='start-cards-eventbutton'>Go To</button>
          </div>
        </div>
      </>
    )
  }
}
