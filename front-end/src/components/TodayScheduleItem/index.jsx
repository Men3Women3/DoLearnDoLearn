import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { SContainer } from "./styles";

const TodayScheduleItem = (props) => {
  return (
    <SContainer>
      <p>
        <FontAwesomeIcon className="todaySchedule__clock" icon={faClock} />
        {props.item.startTime} ~ {props.item.endTime}
      </p>
      <div>
        <p>{props.item.title}</p>
        <button>Live 입장</button>
      </div>
    </SContainer>
  );
};

export default TodayScheduleItem;
