import './StartCards.css'
import { NavLink } from 'react-router-dom'

const StartCards = ({ event }) => {
  return (
    <>
      <NavLink to={`/Event/${event.name}`} className='start-cards-navlink'>
        <section className='cards-container'>
          <div style={{ position: 'relative', outline: 'none' }}>
            <div className='cards-hero' style={{ outline: 'none' }}>
              <img src={event.image} alt='chris-brown image' />
              <div className='cards-name'>
                <div className='cards-name-text'>{event.name}</div>
              </div>
            </div>

            <p className='start-cards-date'>Date: {event.datum}</p>
            <div
              className='start-cards-textbtn-wrapper'
              style={{ fontSize: '15px' }}
            >
              <div className='start-cards-text-wrapper'>
                <p className='time'>
                  Time: {event.hour}:{event.minute}
                </p>
                <p className='location' style={{ fontWeight: 'bold' }}>
                  {event.venue}
                </p>
              </div>
              <div className='start-cards-eventbutton-div'>
                <button className='start-cards-eventbutton'>Buy Ticket</button>
              </div>
            </div>
          </div>
        </section>
      </NavLink>
    </>
  )
}

export default StartCards
