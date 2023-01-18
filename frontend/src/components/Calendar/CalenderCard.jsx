export default function CalenderCard() {
  return (
    <div className="container__calendar__Card">
      <div className="event__date">
        <div className="event__date_day">fre</div>
        <div className="event__date_day_number">12</div>
        <div className="event__month_year">
        <div className="event__date__month">Jan</div>
        <div className="event__date__year">2021</div>
        </div>
        <div className="event__date__time">12:00</div>
      </div>
      <div className="event__image">
        <img className="event__img" src="https://picsum.photos/200/300" alt="event" />
      </div>
      <div className="event__title">
        <h3>Event Title</h3>
      </div>
      <div className="event_info"></div>
    </div>
  );
}
