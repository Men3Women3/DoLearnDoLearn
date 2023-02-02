import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { SContainer } from "./styles";
import { useNavigate } from "react-router";

const TodayScheduleItem = (props) => {
  const startTime = props.item.startTime.split(" ")[1].slice(0, 5);
  const endTime = props.item.endTime.split(" ")[1].slice(0, 5);
  const navigate = useNavigate();

  const handleMoveToLecture = () => {
    navigate("/lecture", {
      state: {
        roomId: props.item.id,
      },
    });
  };

  return (
    <SContainer>
      <p>
        <FontAwesomeIcon className="todaySchedule__clock" icon={faClock} />
        {startTime} ~ {endTime}
      </p>
      <div>
        <p>{props.item.title}</p>
        <button onClick={handleMoveToLecture}>Live 입장</button>
      </div>
    </SContainer>
  );
};

export default TodayScheduleItem;
