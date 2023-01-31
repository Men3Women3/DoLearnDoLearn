import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import { SCalendar } from "./styles";
import { getScheduledLectureAPI } from "../../utils/api/userAPI";

const preprocessingData = (obj) => {
  obj.map((item) => {
    item.start = item.startTime;
    item.end = item.endTime;
    item.color = "black";
    item.backgroundColor = "black";
    item.display = "item-list";
    delete item.startTime;
    delete item.endTime;
  });
};

const Calendar = () => {
  const [scheduledLecture, setScheduledLecture] = useState({});
  let cleanedData;
  useEffect(() => {
    getScheduledLectureAPI(1, setScheduledLecture);
  }, []);

  useEffect(() => {
    console.log("api값 확인!", scheduledLecture);
    // cleanedData = preprocessingData(scheduledLecture);
    // console.log("들어온 값 확인하기", cleanedData);
  }, [scheduledLecture]);

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
        events={[
          {
            id: 2,
            uid: 1,
            tid: 2,
            title: "test제목2",
            maxCnt: 5,
            content: "해줘",
            summary: "그냥 해줘",
            start: "2023-01-31 22:07:03",
            end: "2023-01-31 24:07:03",
            deadline: "2023-01-31 22:07:03",
            isFixed: 1,
            createdTime: "2023-01-31T13:07:03.000+00:00",
            instructors: 0,
            students: 0,
            color: "black",
            backgroundColor: "black",
            display: "list-item",
          },
          {
            id: 2,
            uid: 1,
            tid: 2,
            title: "test제목2",
            maxCnt: 5,
            content: "해줘",
            summary: "그냥 해줘",
            start: "2023-01-31 20:07:03",
            end: "2023-01-31 22:07:03",
            deadline: "2023-01-31 22:07:03",
            isFixed: 1,
            createdTime: "2023-01-31T13:07:03.000+00:00",
            instructors: 0,
            students: 0,
            color: "black",
            backgroundColor: "black",
            display: "list-item",
          },
          {
            id: 2,
            uid: 1,
            tid: 2,
            title: "test제목2",
            maxCnt: 5,
            content: "해줘",
            summary: "그냥 해줘",
            start: "2023-01-25 22:07:03",
            end: "2023-01-25 24:07:03",
            deadline: "2023-01-31 22:07:03",
            isFixed: 1,
            createdTime: "2023-01-31T13:07:03.000+00:00",
            instructors: 0,
            students: 0,
            color: "black",
            backgroundColor: "black",
            display: "list-item",
          },
          {
            id: 2,
            uid: 1,
            tid: 2,
            title: "test제목2",
            maxCnt: 5,
            content: "해줘",
            summary: "그냥 해줘",
            start: "2023-01-14 22:07:03",
            end: "2023-01-14 22:07:03",
            deadline: "2023-01-31 22:07:03",
            isFixed: 1,
            createdTime: "2023-01-31T13:07:03.000+00:00",
            instructors: 0,
            students: 0,
            color: "black",
            backgroundColor: "black",
            display: "list-item",
          },
          {
            id: 2,
            uid: 1,
            tid: 2,
            title: "test제목2",
            maxCnt: 5,
            content: "해줘",
            summary: "그냥 해줘",
            start: "2023-01-10 22:07:03",
            end: "2023-01-10 22:07:03",
            deadline: "2023-01-31 22:07:03",
            isFixed: 1,
            createdTime: "2023-01-31T13:07:03.000+00:00",
            instructors: 0,
            students: 0,
            color: "black",
            backgroundColor: "black",
            display: "list-item",
          },
          // {
          //   id: "1",
          //   title: "살려주세요!!!",
          //   start: "2023-01-01 23:30:00",
          //   end: "2023-01-02 02:30:00",
          //   color: "black",
          //   backgroundColor: "black",
          //   display: "list-item",
          // },
          // {
          //   title: "두런두런은 중소기ㅇ...dsfsdafads",
          //   start: "2023-01-02 14:30:00",
          //   end: "2023-01-02 16:30:00",
          //   color: "black",
          //   backgroundColor: "black",
          //   display: "list-item",
          //   // display: "list-item",
          //   // allDay: "false",
          // },
          // {
          //   title: "스타트업1",
          //   start: "2023-01-21 10:00:00",
          //   end: "2023-01-21 12:00:00",
          //   color: "black",
          //   backgroundColor: "black",
          //   display: "list-item",
          // },
          // {
          //   title: "스타트업3",
          //   start: "2023-01-21 12:00:00",
          //   end: "2023-01-21 14:00:00",
          //   color: "black",
          //   backgroundColor: "black",
          //   display: "list-item",
          // },
          // {
          //   title: "스타트업4",
          //   start: "2023-01-10 3:00:00",
          //   end: "2023-01-10 4:00:00",
          //   color: "black",
          //   backgroundColor: "black",
          //   display: "list-item",
          // },
          // {
          //   title: "스타트업5",
          //   start: "2023-01-10 16:00:00",
          //   end: "2023-01-10 17:00:00",
          //   color: "black",
          //   backgroundColor: "black",
          //   display: "list-item",
          // },
          // {
          //   title: "스타트업6",
          //   start: "2023-01-10 12:00:00",
          //   end: "2023-01-10 14:00:00",
          //   color: "black",
          //   backgroundColor: "black",
          //   display: "list-item",
          // },
          // {
          //   title: "스타트업ffff",
          //   start: "2023-01-09 23:00:00",
          //   end: "2023-01-10 01:00:00",
          //   display: "list-item",
          //   color: "black",
          //   backgroundColor: "black",
          //   display: "list-item",
          // },
        ]}
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
