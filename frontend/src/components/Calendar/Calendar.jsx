import React from "react";
import "./Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const Calendar = () => {
  return (
    <div className="container_calendar">
      <div className="container_calendar_nav">
        <h1 className="calendar_title">Calendar</h1>
        <div className="calendar_nav">
          <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
          <span className="calendar_log"></span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
