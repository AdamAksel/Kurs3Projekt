import React from "react";
import "./Calendar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="container_calendar_nav">
        <h1 className="calendar_title">Sort by:</h1>
        <div className="calendar_nav">

          <span className="calendar_log"></span>
        </div>
      </div>
      <div className="date__range">
        
      </div>
      <div className="calendar">
        <CalenderCard events={events} />
      </div>
    </div>
  );
};

export default Calendar;
