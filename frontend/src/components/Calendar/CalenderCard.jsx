export default function CalenderCard({ data }) {


  return (
    
   data &&  data.map((event) => {
      return  <div className="container__calendar__Card" key={event.eventName} >
        <div className="event__date">
          <div className="event__date_day">fre</div>
          <div className="event__date_day_number">12</div>
          <div className="event__month_year">
            <div className="event__date__month">Jan.</div>
            <div className="event__date__year">2021</div>
          </div>
          <div className="event__date__time">{event.time}</div>
        </div>
        <div className="event__image">
          <img className="event__img" src={event.image} alt="event" />
        </div>
        <div className="event__info">
          <div className="event__title">
            <h3>{event.eventName}</h3>
          </div>
          <p className="event__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
          <div className="event__location">
            <p>{event.location}</p>
            <span>|</span>
            <p>place</p>
          </div>
        </div>
        <div className="event__payment__button">
          <button className="event__button">Buy Ticket</button>
        </div>
      </div>;
   })
);

}
