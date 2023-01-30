

export default function CalenderCard({ events }) {
  // Map the events to the DOM
  const highlight = "highlight";

  const handleEventsName = (name) => {
    const splitName = name.split(" ");
    const firstWord = splitName[0];
    const secondWord = splitName[1];
    return (
      <div className="event__title">
        <h1>
          <span className="highlight">{firstWord}</span>
          <br />
          <span className={highlight}>{secondWord}</span>
        </h1>
      </div>
    );
  };

  return (
    events &&
    events.map((event, i) => {
      let firstDate = new Date(event.date[0]);

      let lastDate = new Date(event.date[event.date.length - 1]);

      const markup = [firstDate, lastDate];

      let classes = "";
      event.date.length > 1
        ? (classes = "event__date--multi")
        : (classes = "event__date");
      return (
        <div className="container__calendar__Card" key={i}>
          <div className="date_card">
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
          </div>
          
          <div className="event__image">
            <img className="event__img" src={event.image} alt="event" />

            {event.eventName && handleEventsName(event.eventName)}
          </div>
          <div className="event__info">
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
