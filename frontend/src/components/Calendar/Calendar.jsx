import React from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Calendar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CalenderCard from "./CalenderCard";
import data from "../event-info"
const Calendar = () => {
  // const data = [
  //   { date: "2023/01/18", name: "John" },
  //   { date: "2023/01/27", name: "Jane" },
  //   { date: "2021-02-01", name: "Bob" },
  //   { date: "2021-03-01", name: "Sara" },
  // ];


  const events = data.events

  const [event, setEvent] = useState(data.events);

    // this.setState({ events: events });

    


  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  const showAndHideCalendar = () => {
    setIsOpened(!isOpened);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    let filteredData = data.filter((item) => {
      let date = new Date(item.date);
      return (
        date >= ranges.selection.startDate && date <= ranges.selection.endDate
      );
    });
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setFilteredData(filteredData);
  };
  return (
    
    <div className="container_calendar">
      <div className="container_calendar_nav">
        <h1 className="calendar_title">Calendar</h1>
        <div className="calendar_nav">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="searchIcon"
            onClick={showAndHideCalendar}
          />
          <span className="searchText">
            {format(startDate, "yyyy/MM/dd")} → {format(endDate, "yyyy/MM/dd")}
          </span>

          <span className="calendar_log"></span>
        </div>
      </div>
      <div className="date__range">
        {isOpened && (
          <DateRangePicker
            editableDateInputs={true}
            months={2}
            direction="horizontal"
            onChange={handleSelect}
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            moveRangeOnFirstSelection={false}
            className="date"
          />
        )}
      </div>
      <div className="calendar">
        <CalenderCard data={data.events} />
      </div>
    </div>
  );
};

export default Calendar;
