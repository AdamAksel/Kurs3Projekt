import {Link} from 'react-router-dom'

export default function CalenderCard({event}) {
    // Map the events to the DOM

    return (
        <div className='container_card'>
            <Image/>
            <EventInfo/>
            <Link to={`/Event/${event.name}`} className='payment__button'>
                <button className='button'>Go To</button>
            </Link>
        </div>
    )
    function EventInfo() {
        return <>
            <div className='artist'> {event.name}
                <div className='date'>{event.datum}</div>
                <div className='time'>{`${event.hour}:${event.minute}`}</div>
            </div>
            <p className='information'>
                To ne cede malis, sed contra audentior ito Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Accusamus, unde cupiditate iste quidem
                dolore possimus voluptates excepturi at esse, non quaerat, laborum
                voluptatem eius fugiat molestiae corrupti dolorem sit libero quibusdam
                placeat optio! Aliquid a beatae velit distinctio possimus architecto
                asperiores maiores eos facilis sit maxime, quam, quaerat, quas
                voluptatum!
            </p>
            <p className='location'>
                Venue <strong> | {event.venue} </strong>
            </p>
        </>
    }
    function Image() {
        return <div className='container_image'>
            <img className='image' src={event.image} alt='event'/>
        </div>
    }
}