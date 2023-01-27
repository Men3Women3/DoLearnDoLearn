import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { SContainer } from "./styles";

const TotalScheduleItem = (props) => {
  return (
    <SContainer>
      <p>
        <FontAwesomeIcon
          className="totalSchedule__calendar"
          icon={faCalendarDays}
        />
        {props.item.Time}
      </p>
      <div>
        <p>{props.item.title}</p>
        <button>수강 취소</button>
      </div>
    </SContainer>
  );
};

export default TotalScheduleItem;
