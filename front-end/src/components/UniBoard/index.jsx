import LectureModal from "../LectureModal";
import { SImg, SUniBoard } from "./styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

// 개별 게시물 component
const UniBoard = ({ data }) => {
  // Modal 파트 ========================
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ===================================

  return (
    <SUniBoard>
      <div onClick={handleOpen}>
        <SImg src={data.thumbnailUrl} />
        <h3 title={data.title}>{data.title}</h3>
        <p summary={data.summary}>{data.summary}</p>
        <div style={{ textAlign: "left" }}>
          <p summary={data.summary}>
            <FontAwesomeIcon icon={faClock} />
            &nbsp;모집기간 | {data.startTime} - {data.endTime}
          </p>
          <p summary={data.deadline}>
            <FontAwesomeIcon icon={faCalendarDays} />
            &nbsp;강의시간 | {data.deadline}
          </p>
          <p lecCnt={data.instructors}>
            <FontAwesomeIcon icon={faCalendarDays} />
            &nbsp;강사 모집현황 | {data.instructors}명
          </p>
          <p summary={data.students}>
            <FontAwesomeIcon icon={faCalendarDays} />
            &nbsp;수강생 모집현황 | {data.students} / 5명
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
