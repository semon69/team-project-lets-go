"use client";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const Calender = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl my-10">Calender and price</h2>
      <div>
        <Calendar
          localizer={localizer}
          
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default Calender;
