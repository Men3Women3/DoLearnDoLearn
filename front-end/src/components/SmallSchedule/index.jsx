import React, { useState } from "react";
import { SContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { Scrollbars } from "react-custom-scrollbars";
import TodayScheduleItem from "../TodayScheduleItem";
import TotalScheduleItem from "../TotalScheduleItem";

const SmallSchedule = () => {
  const [todaySchedule, setTodayScedule] = useState([
    {
      id: 1,
      startTime: "14:00",
      endTime: "16:00",
      title: "WebSocket 가르쳐주세요!",
    },
    {
      id: 2,
      startTime: "16:00",
      endTime: "18:00",
      title: "WebRTC 가르쳐주세요!",
    },
    {
      id: 3,
      startTime: "18:00",
      endTime: "20:00",
      title: "WebRTC 가르쳐주세요!",
    },
    {
      id: 4,
      startTime: "20:00",
      endTime: "22:00",
      title: "WebRTC 가르쳐주세요!",
    },
    {
      id: 5,
      startTime: "22:00",
      endTime: "24:00",
      title: "WebRTC 가르쳐주세요!",
    },
  ]);
  const [totalSchedule, setTotalSchedule] = useState([
    {
      id: 1,
      Time: "2023. 01. 16. 14:00 ~ 16:00",
      title: "WebSocket 가르쳐주세요!",
    },
    {
      id: 2,
      Time: "2023. 01. 16. 16:00 ~ 18:00",
      title: "WebSocket 가르쳐주세요!",
    },
    {
      id: 3,
      Time: "2023. 01. 16. 18:00 ~ 20:00",
      title: "WebSocket 가르쳐주세요!",
    },
    {
      id: 4,
      Time: "2023. 01. 16. 20:00 ~ 22:00",
      title: "WebSocket 가르쳐주세요!",
    },
    {
      id: 5,
      Time: "2023. 01. 16. 22:00 ~ 24:00",
      title: "WebSocket 가르쳐주세요!",
    },
    {
      id: 6,
      Time: "2023. 01. 17. 20:00 ~ 22:00",
      title: "WebSocket 가르쳐주세요!",
    },
    {
      id: 7,
      Time: "2023. 01. 18. 22:00 ~ 24:00",
      title: "WebSocket 가르쳐주세요!",
    },
  ]);

  return (
    <SContainer>
      <div className="header">
        <p>오늘의 일정</p>
        <p>{`${new Date().getMonth() + 1}월 ${new Date().getDate()}일`}</p>
      </div>
      <div className="todaySchedule">
        <Scrollbars autoHide className="Scrollbars">
          {/* 컴포넌트로 따로 분리해야 됨 */}
          {todaySchedule.map((item) => (
            <TodayScheduleItem key={item.id} item={item} />
          ))}
        </Scrollbars>
      </div>
      <div className="boundary"></div>
      <p className="totalSchedule__header">신청 내역</p>
      <div className="totalSchedule">
        <Scrollbars autoHide className="Scrollbars">
          {totalSchedule.map((item) => (
            <TotalScheduleItem key={item.id} item={item} />
          ))}
        </Scrollbars>
      </div>
    </SContainer>
  );
};

export default SmallSchedule;
