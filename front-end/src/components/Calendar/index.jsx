import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import { SCalendar } from "./styles";
import { getScheduledLectureAPI } from "../../utils/api/userAPI";

const Calendar = () => {
  const [scheduledLecture, setScheduledLecture] = useState({});

  useEffect(() => {
    getScheduledLectureAPI(1, setScheduledLecture);
  }, []);

  const handleEventClick = (arg) => {
    alert(arg.event.title);
    console.log(arg);
  };
  const eventContent = (eventInfo) => {
    return (
      <div
        style={{
          margin: 0,
        }}
      >
        <b>
          <p style={{ margin: 0, color: "orange" }}>{eventInfo.timeText}</p>
        </b>
        <p style={{ margin: 0, whiteSpace: "normal", color: "white" }}>
          {eventInfo.event.title}
        </p>
      </div>
    );
  };

  return (
    <SCalendar>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={scheduledLecture}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "title",
          right: "prev,next today",
          center: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        contentHeight="80vh"
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false,
        }}
        nowIndicator="true"
        handleWindowResize="true"
        // defaultAllDay="false"
        displayEventEnd="true"
        // firstDay={1}
        eventContent={eventContent}
      />
    </SCalendar>
  );
};

export default Calendar;
