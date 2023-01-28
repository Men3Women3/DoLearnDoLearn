import LectureModal from "../LectureModal";
import { SImg, SUniBoard } from "./styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarDays,
  faPersonChalkboard,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";

// 개별 게시물 component
const UniBoard = ({ data }) => {
  // Modal 파트 ========================
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ===================================

  const today = new Date().toISOString().substring(5, 10);
  const startTime = data.startTime.substring(5, 10);
  const endTime = data.endTime.substring(5, 10);
  const deadline = data.deadline.substring(5, 10);

  return (
    <SUniBoard>
      <div onClick={handleOpen}>
        <SImg src={data.thumbnailUrl} />
        <h3>{data.title}</h3>
        <p>{data.summary}</p>
        <div style={{ textAlign: "left" }}>
          <p>
            <FontAwesomeIcon icon={faClock} />
            &nbsp;모집기간 | {today} - {deadline}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} />
            &nbsp;강의시간 | {startTime}
          </p>
          <p>
            <FontAwesomeIcon icon={faPersonChalkboard} />
            &nbsp;강사 모집현황 | {data.instructors}명
          </p>
          <p>
            <FontAwesomeIcon icon={faChalkboardUser} />
            &nbsp;수강생 모집현황 | {data.students} / {data.maxCnt}명
          </p>
        </div>
      </div>
      {open ? (
        <LectureModal data={data} open={open} handleClose={handleClose} />
      ) : null}
    </SUniBoard>
  );
};

export default UniBoard;
