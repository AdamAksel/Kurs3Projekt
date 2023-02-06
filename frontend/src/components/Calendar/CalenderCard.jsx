export default function CalenderCard({ event }) {
  // Map the events to the DOM

  return (
    <div className='container__calendar__Card'>
      <div className='date_card'>
        <div className='event__date'>
          <div className='event__date_day'>{event.date}</div>
          <div className='event__date_day_number'>{event.datum}</div>
          <div className='event__month_year'>
            <div className='event__date__month'>{event.datum}.</div>
            <div className='event__date__year'>{event.datum}</div>
          </div>
          <div className='event__date__time'>{`${event.hour}:${event.minute}`}</div>
        </div>
        );
      </div>

      <div className='event__image'>
        <img className='event__img' src={event.image} alt='event' />
      </div>
      <div className='event__info'>
        <p className='event__description'>
          To ne cede malis, sed contra audentior ito, To ne cede malis, sed
          contra audentior ito, To ne cede malis, sed contra audentior ito{' '}
          {event.id}
        </p>
        <div className='event__location'>
          <p>
            <b>{event.venue} |</b> Venue
          </p>
        </div>
      </div>
      <div className='event__payment__button'>
        <button className='event__button'>Buy Ticket</button>
      </div>
    </div>
  )
}
