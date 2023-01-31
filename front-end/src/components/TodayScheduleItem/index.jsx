import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { SContainer } from "./styles";

const TodayScheduleItem = (props) => {
  const startTime = props.item.startTime.split(" ")[1].slice(0, 5);
  const endTime = props.item.endTime.split(" ")[1].slice(0, 5);

  return (
    <SContainer>
      <p>
        <FontAwesomeIcon className="todaySchedule__clock" icon={faClock} />
        {startTime} ~ {endTime}
      </p>
      <div>
        <p>{props.item.title}</p>
        <button>Live 입장</button>
      </div>
    </SContainer>
  );
};

export default TodayScheduleItem;
