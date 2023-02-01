import './start-card.css'
import {Link} from 'react-router-dom'

export default function ({event}) {

    return <Link to={`/events/${event.eventName}`} className='card cards-container'>
        <Hero/>
        <p className='date'>Date: 2023-01-20</p>
        <Content/>
    </Link>

    function Hero() {
        return <div>
            <img src={'https://www.vibe.com/wp-content/uploads/2016/03/Chris-Brown-.png'} alt='chris-brown image'/>
            <div className='cards-name-text'>{event.artist}</div>
        </div>
    }

    function Content() {
        return <div className='content'}>
            <div className='start-cards-text-wrapper'>
                <p className='time'>Time: 18:00-22:00</p>
                <p><strong>Helsingborg:</strong> Olympia</p>
            </div>
            <button className='event-button'>Buy Ticket</button>
        </div>
    }
}