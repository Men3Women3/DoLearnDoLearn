import LectureModal from "../LectureModal";
import { SImg, SUniBoard } from "./styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as F from "@fortawesome/free-solid-svg-icons";
// thumbnails
import scrum from "../../assets/images/thumbnail/scrum.svg";
import cooking from "../../assets/images/thumbnail/cooking.svg";
import exercise from "../../assets/images/thumbnail/exercise.svg";
import drawing from "../../assets/images/thumbnail/drawing.svg";
import meeting from "../../assets/images/thumbnail/meeting.svg";
import conference from "../../assets/images/thumbnail/conference.svg";
import study from "../../assets/images/thumbnail/study.svg";
import teamwork from "../../assets/images/thumbnail/teamwork.svg";
import axios from "axios";

// 개별 게시물 component
const UniBoard = ({ data }) => {
  const BOARD_URL = "http://localhost:8080/board";
  const [lectListTest, setLectListTest] = useState([]);

  // Modal 파트 ========================
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ===================================

  // 강사 및 수강생 목록 호출 ==========
  const aioxTest = async () => {
    const board = data.id;
    const res = await axios.get(`${BOARD_URL}/instructor-list/${board}`);
    setLectListTest(res.data.uid);
    console.log(lectListTest);
  };

  // 이것도 왜 안되는지 확인 필요===========
  // const [lecturer, setLecturer] = useState([]);
  // const [student, setStudent] = useState([]);
  // const bringList = async () => {
  //   const board = data.id;
  //   try {
  //     const res1 = await axios.get(`${BOARD_URL}/instructor-list/${board}`);
  //     setLecturer(res1);
  //     const res2 = await axios.get(`${BOARD_URL}/student-list/${board}`);
  //     setStudent(res2);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // ===================================
  // const func = async () => {
  //   const board = data.id;
  //   try {
  //     const res = await axios.get(`${BOARD_URL}/instructor-list/${board}`);
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // func();

  const startTime = data.createdTime.substring(5, 10);
  const deadline = data.endTime.substring(5, 10);
  const endTime = data.deadline.substring(5, 10);

  const thumbnails = [
    scrum,
    cooking,
    exercise,
    drawing,
    meeting,
    conference,
    study,
    teamwork,
  ];

  return (
    <SUniBoard>
      <div onClick={handleOpen}>
        <SImg src={thumbnails[data.tid]} />
        <h3>{data.title}</h3>
        <p>{data.summary}</p>
        <div style={{ textAlign: "left" }}>
          <p>
            <FontAwesomeIcon icon={F.faClock} />
            &nbsp;모집기간 | {startTime} - {endTime}
          </p>
          <p>
            <FontAwesomeIcon icon={F.faCalendarDays} />
            &nbsp;강의시간 | {deadline}
          </p>
          <p>
            <FontAwesomeIcon icon={F.faPersonChalkboard} />
            &nbsp;강사 신청현황 | {data.instructors}명
          </p>
          <p>
            <FontAwesomeIcon icon={F.faChalkboardUser} />
            &nbsp;수강생 신청현황 | {data.students} / {data.maxCnt}명
          </p>
        </div>
      </div>
      {open ? (
        <LectureModal
          data={data}
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
        />
      ) : null}
    </SUniBoard>
  );
};

export default UniBoard;
