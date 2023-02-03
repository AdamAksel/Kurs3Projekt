import { NavLink } from "react-router-dom";

const CalenderCard = ({ event }) => {
      return (
          <>
        <div className="container__calendar__Card">
          <div className="date_card">
                <div className="event__date">
                    {event.name}
                  <div className="event__date_day"></div>
                  <div className="event__date_day_number">{event.date.slice(0, 6)}</div>
                  <div className="event__month_year">
                    <div className="event__date__month">{event.datum}</div>
                  </div>
                  <div className="event__date__time">Time: {event.hour}:{event.minute}</div>
                </div>
          </div>
          
          <div className="event__image">
            <img className="event__img" src={event.image} alt="event" />

          </div>
          <div className="event__info">
            <p className="event__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </p>
            <div className="event__location">
              <p>Venue: {event.venue}</p>
            </div>
          </div>
          <div className="event__payment__button">
            <button className="event__button">Buy Ticket</button>
          </div>
        </div>

          </>
      );
    }
export default CalenderCard
