import LectureModal from "../LectureModal";
import { SImg, SUniBoard } from "./styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect } from "react";

// 개별 게시물 component
const UniBoard = ({ data }) => {
  const SERVER_URL = "http://localhost:8080";

  // Modal 파트
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const stDay = data.start_time.toLocaleDateString();

  // 신청 강사 Cnt
  const [lecCnt, setLecCnt] = useState(0);
  const lecCount = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/board/instructor-list/3`);
      // console.log(res);
      setLecCnt(res);
    } catch (e) {
      console.log(e);
    }
  };

  // 신청 학생 Cnt
  const [stuCnt, setStuCnt] = useState(0);
  const stuCount = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/board/student-list/3`);
      console.log(res);
      // setLecCnt(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    lecCount();
    stuCount();
  }, []);

  return (
    <SUniBoard>
      <div onClick={handleOpen}>
        <SImg src={data.thumbnailUrl} />
        {/* <h4 writer={data.writer}>{data.id}</h4> */}
        <h3 title={data.title}>{data.title}</h3>
        <p summary={data.summary}>{data.summary}</p>
        <div style={{ textAlign: "left" }}>
          <p summary={data.summary}>
            <FontAwesomeIcon icon={faClock} />
            &nbsp;모집기간 | {data.start_time} - {data.end_time}
          </p>
          <p summary={data.deadline}>
            <FontAwesomeIcon icon={faCalendarDays} />
            &nbsp;강의시간 | {data.deadline}
          </p>
          <p lecCnt={lecCnt}>
            <FontAwesomeIcon icon={faCalendarDays} />
            &nbsp;강사 모집현황 | {lecCnt}명
          </p>
          <p summary={data.summary}>
            <FontAwesomeIcon icon={faCalendarDays} />
            &nbsp;수강생 모집현황 | 3 / 5명
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
