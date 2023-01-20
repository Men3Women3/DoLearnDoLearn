import React from "react"
import FullCalendar from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!

import { SCalendar } from "./styles"

const Calendar = () => {
  const handleEventClick = (arg) => {
    alert(arg.event.title)
    console.log(arg.event)
  }

  return (
    <SCalendar>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: "살려주세요!!!",
            start: "2023-01-01T14:30:00",
            end: "2023-01-01T16:30:00",
          },
          { title: "두런두런은 중소기ㅇ...", date: "2023-01-02" },
          { title: "help", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-10" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-11" },
          { title: "스타트업,,,,,", date: "2023-01-20" },
          { title: "스타트업,,,,,", date: "2023-01-20" },
        ]}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "title",
          right: "prev,next today",
          center: "dayGridWeek,dayGridMonth",
        }}
        contentHeight="80vh"
      />
    </SCalendar>
  )
}

export default Calendar
