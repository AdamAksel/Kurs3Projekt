export default function CalenderCard({ filters, data }) {
    // If there are no filters, show all events
  let events = [];
  if (filters.length === 0) {
    events = data;
  } else {
    events = filters;
  }

// Sort events by date, It's important to sort the events before mapping them to the DOM   
    const sortEvents = events.sort((a, b) => {
    let firstDate = new Date(a.date[0]);
    let lastDate = new Date(b.date[0]);
    return firstDate - lastDate;
    });

    // Map the events to the DOM
  return (
    sortEvents &&
    sortEvents.map((event) => {
      let firstDate = new Date(event.date[0]);

      let lastDate = new Date(event.date[event.date.length - 1]);

      const markup = [firstDate, lastDate];

      let classes = "";
      event.date.length > 1
        ? (classes = "event__date--multi")
        : (classes = "event__date");
      return (
        <div className="container__calendar__Card" key={event.eventName}>
          {markup.map((event, i) => {
            let date = new Date(event);
            const day = date.getDate();
            const day2 = date.getDay();

            const dayName = ["sön", "mån", "tis", "ons", "tor", "fre", "lör"];
            const dayN = dayName[day2];
            const month = date.getMonth();
            const monthName = [
              "jan",
              "feb",
              "mar",
              "apr",
              "maj",
              "jun",
              "jul",
              "aug",
              "sep",
              "okt",
              "nov",
              "dec",
            ];
            const monthN = monthName[month];
            const year = date.getFullYear();
            const hour = `${date.getHours()}`.padStart(2, 0);
            const min = `${date.getMinutes()}`.padStart(2, 0);
            return (
              <div className="event__date" key={i}>
                <div className="event__date_day">{dayN}</div>
                <div className="event__date_day_number">{day}</div>
                <div className="event__month_year">
                  <div className="event__date__month">{monthN}.</div>
                  <div className="event__date__year">{year}</div>
                </div>
                <div className="event__date__time">{`${hour}:${min}`}</div>
              </div>
            );
          })}
          <span className="arrow">→</span>
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
        </div>
      );
    })
  );
}
