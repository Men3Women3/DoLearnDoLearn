import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { SContainer } from "./styles";
import { useNavigate } from "react-router";
import { getLecturerId } from "../../utils/api/lectureAPI";
import { getUserInfo } from "../../utils/api/userAPI";

const TodayScheduleItem = (props) => {
  console.log(props, 1023910239);

  const [lecturerId, setLecturerId] = useState(null);
  const [lecturerInfo, setLecturerInfo] = useState(null);

  const startTime = props.item.startTime.split(" ")[1].slice(0, 5);
  const endTime = props.item.endTime.split(" ")[1].slice(0, 5);
  const navigate = useNavigate();

  const handleMoveToLecture = () => {
    navigate("/lecture", {
      state: {
        roomId: props.item.id,
        lecturerId: lecturerId,
        lecturerInfo: lecturerInfo,
        time: {
          startTime: props.item.startTime,
          endTime: props.item.endTime,
        },
      },
    });
  };

  useEffect(() => {
    getLecturerId(props.item.id, setLecturerId);
  }, []);

  useEffect(() => {
    if (lecturerId) {
      getUserInfo(lecturerId, setLecturerInfo);
    }
  }, [lecturerId]);

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
