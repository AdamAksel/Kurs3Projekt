import React, { useContext, useState } from "react";
import GlobalContext from '../../GlobalContext.jsx'
import "./Calendar.css";
import {
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CalenderCard from "./CalenderCard";
const Calendar = () => {

  const { concerts } = useContext(GlobalContext)

  const [isOpened, setIsOpened] = useState(false);

  const showAndHideCalendar = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="container_calendar">
      <div className="calendar">
        {concerts
            .filter((event, index) => index < 6)
            .map((event) => (
                <div className='sect-cards' key={event.date}>
                  <CalenderCard event={event} />
                </div>
            ))}
      </div>
    </div>
  );
};

export default Calendar;