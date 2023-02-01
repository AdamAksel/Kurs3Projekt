import StartCard from '../Cards/StartCard.jsx'
import {events} from '../event-info'
import './StartPage.css'

export default function () {
    const eventInfo = events.slice(0,5)

    return <div className='start-page'>
        <StartCards/>
    </div>

    function StartCards() {
        return eventInfo.map((event) => <StartCard event={event}/>)
    }
}

