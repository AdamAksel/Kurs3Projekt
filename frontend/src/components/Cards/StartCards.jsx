import './StartCards.css'
import { NavLink } from 'react-router-dom'

const StartCards = (props) => {

  return (
    <>
      <NavLink
        to={`/Event/${props.event.eventName}`}
        className='start-cards-navlink'
      >
        <section className='cards-container'>
          <div style={{ position: 'relative', outline: 'none' }}>
            <div style={{ outline: 'none' }}>
              <img
                src='https://www.vibe.com/wp-content/uploads/2016/03/Chris-Brown-.png'
                alt='chris-brown image'
              />
              <div className='cards-name'>
                <div className='cards-name-text'>{props.event.artist}</div>
              </div>
            </div>

            <p className='start-cards-date'>Date: 2023-01-20</p>
            <div
              className='start-cards-textbtn-wrapper'
              style={{ fontSize: '15px' }}
            >
              <div className='start-cards-text-wrapper'>
                <p className='time'>Time: 18:00-22:00</p>
                <p className='location' style={{ fontWeight: 'bold' }}>
                  Helsingborg:{' '}
                  <span style={{ fontWeight: 'normal', outline: 'none' }}>
                    Olympia
                  </span>
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
