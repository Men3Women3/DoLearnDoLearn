import React, { useState } from "react";
import { SContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { Scrollbars } from "react-custom-scrollbars";

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
        <p>1월 16일</p>
      </div>
      <div className="todaySchedule">
        <Scrollbars autoHide style={{ height: 190 }}>
          {/* 컴포넌트로 따로 분리해야 됨 */}
          {todaySchedule.map((item) => (
            <div className="todaySchedule__item" key={item.id}>
              <p>
                <FontAwesomeIcon
                  className="todaySchedule__clock"
                  icon={faClock}
                />
                {item.startTime} ~ {item.endTime}
              </p>
              <div>
                <p>{item.title}</p>
                <button>Live 입장</button>
              </div>
            </div>
          ))}
        </Scrollbars>
      </div>
      <div className="boundary"></div>
      <p className="totalSchedule__header">신청 내역</p>
      <div className="totalSchedule">
        <Scrollbars autoHide style={{ height: 190 }}>
          {totalSchedule.map((item) => (
            <div className="totalSchedule__item" key={item.id}>
              <p>
                <FontAwesomeIcon
                  className="totalSchedule__calendar"
                  icon={faCalendarDays}
                />
                {item.Time}
              </p>
              <div>
                <p>{item.title}</p>
                <button>수강 취소</button>
              </div>
            </div>
          ))}
        </Scrollbars>
      </div>
    </SContainer>
  );
};

export default SmallSchedule;
