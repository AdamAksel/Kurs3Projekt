import React from "react";
import "./Calendar.css";
import { useState } from "react";
import {
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CalenderCard from "./CalenderCard";
import {events} from "../event-info";
const Calendar = () => {
 


  const [isOpened, setIsOpened] = useState(false);

  const showAndHideCalendar = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="container_calendar">
      <div className="calendar">
        <CalenderCard events={events} />
      </div>
    </div>
  );
};

export default Calendar;
