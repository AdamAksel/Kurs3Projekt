import { Link } from 'react-router-dom'

export default function CalenderCard({ event }) {
  // Map the events to the DOM

  return (
    <div className='container__calendar__Card'>
      <div className='date_card'>
        <div className='event__date'>
          <div className='event__date_day_number'>{event.datum}</div>
          <div className='event__date__time'>{`${event.hour}:${event.minute}`}</div>
        </div>
      </div>

      <div className='event__image'>
        <img className='event__img' src={event.image} alt='event' />
      </div>
      <div className='event__info'>
        <p className='event__description'>
          To ne cede malis, sed contra audentior ito Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Accusamus, unde cupiditate iste quidem
          dolore possimus voluptates excepturi at esse, non quaerat, laborum
          voluptatem eius fugiat molestiae corrupti dolorem sit libero quibusdam
          placeat optio! Aliquid a beatae velit distinctio possimus architecto
          asperiores maiores eos facilis sit maxime, quam, quaerat, quas
          voluptatum!
        </p>
        <div className='event__location'>
          <p>
            <b>{event.venue} |</b> Venue
          </p>
        </div>
      </div>
      <Link to={`/Event/${event.name}`} className='event__payment__button'>
        <button className='event__button'>Go To</button>
      </Link>
    </div>
  )
}
