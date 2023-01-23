import React from "react";
import "./Calendar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CalenderCard from "./CalenderCard";
import { events } from "../event-info";
const Calendar = () => {
  return (
    <div className="container_calendar">
      <div className="container_calendar_nav">
     
        <div className="calendar_nav">
        </div>
      </div>
      <div className="date__range"></div>
      <div className="calendar">
        <CalenderCard events={events} />
      </div>
    </div>
  );
};

export default Calendar;
