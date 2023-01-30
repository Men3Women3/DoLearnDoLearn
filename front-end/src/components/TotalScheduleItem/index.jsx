import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { SContainer } from "./styles";

const TotalScheduleItem = (props) => {
  const year = props.item.startTime.slice(0, 4);
  const month = props.item.startTime.slice(5, 7);
  const day = props.item.startTime.slice(8, 10);
  const startTime = props.item.startTime.split(" ")[1].slice(0, 5);
  const endTime = props.item.endTime.split(" ")[1].slice(0, 5);

  return (
    <SContainer>
      <p>
        <FontAwesomeIcon
          className="totalSchedule__calendar"
          icon={faCalendarDays}
        />
        {`${year}. ${month}. ${day}.`} &nbsp; {`${startTime} ~ ${endTime}`}
      </p>
      <div>
        <p>{props.item.title}</p>
        <button>수강 취소</button>
      </div>
    </SContainer>
  );
};

export default TotalScheduleItem;
