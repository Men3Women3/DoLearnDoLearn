import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CardBox from "../CardBox";
import {
  SSection,
  SContainer,
  STitle,
  SBoardTitle,
  STitleInput,
  SParticipant,
  SParticipantInput,
  SRecruit,
  SRecruitInput,
  SLecture,
  SLectureInput,
  STimeInput,
  SRadio,
  SSummary,
  SDetail,
  SDetailText,
  SRegistButton,
  SButton,
  SLimit,
  SSummaryText,
  SModal,
  SCancelButton,
  SCardBox,
} from "./styles.jsx";
import { useNavigate } from "react-router";

const NewBoard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // 강의의 제목
  const [participant, setParticipant] = useState(0); // 참가인원(5명까지만!)
  const [stDay, setStDay] = useState(""); // 모집 시작 날짜
  const [edDay, setEdDay] = useState(""); // 모집 종료 날짜
  const [lectureDay, setLectureDay] = useState(""); // 강의 날짜
  const [lectureTime, setLectureTime] = useState(""); // 강의 시작 시간
  const [classTime, setClassTime] = useState(""); // 강의 시간
  const [summary, setSummary] = useState(""); // 강의 요약
  const [detail, setDetail] = useState(""); // 강의 상세
  const [open, setOpen] = React.useState(false); // 모달 open / close 여부
  const today = new Date();

  // 모달 스타일
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    outline: "none",
  };

  const handleOpen = (e) => {
    if (
      !title ||
      !stDay ||
      !edDay ||
      !lectureDay ||
      !lectureTime ||
      !classTime ||
      !summary ||
      !detail ||
      participant === 0
    ) {
      setOpen(true); // 빈 내용이 있으면 경고 띄우기
    } else {
      handleRegister(); // 모두 잘 작성됐으면 등록
    }
  };

  const handleClose = () => setOpen(false);

  const handleRegister = () => {
    // 등록버튼 눌렀을 때 어떤 작업을 해야 하는지 작성하세용
    // 저장 됐으면 강의 목록 페이지로 가줭
    console.log(title);
    console.log(participant);
    console.log(stDay);
    console.log(edDay);
    console.log(lectureDay);
    console.log(lectureTime);
    console.log(classTime);
    console.log(summary);
    console.log(detail);
    navigate("/board");
  };

  return (
    <SCardBox>
      <SContainer>
        {/* 1. 제목 */}
        <STitle>
          <h1>공부방을 만들어요</h1>
        </STitle>

        {/* 2. 구분선 */}
        {/* 구분선은 걍 제목 margin-bottom에 선 그었어용 */}

        {/* 3. 사용자 지정 제목 */}
        <SBoardTitle>
          <h3>강의 제목</h3>
          <STitleInput
            value={title}
            placeholder="제목을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
          ></STitleInput>
        </SBoardTitle>

        {/* 4. 참여 인원 */}
        <SParticipant>
          <h3>참여 인원</h3>
          {/* 문제: 키보드로 입력시 5가 넘어감 */}
          <SParticipantInput
            type="number"
            defaultValue={participant}
            pattern={"0-9"}
            min={1}
            max={5}
            onChange={(e) => setParticipant(e.target.value)}
          ></SParticipantInput>
          <h3>&nbsp;명</h3>
        </SParticipant>

        {/* 5. 모집 기간(달력 넣어줭) */}
        <SRecruit>
          <h3>모집 기간</h3>
          {/* 요거는 시작날짜 */}
          <SRecruitInput
            type="date"
            onChange={(e) => setStDay(e.target.value)}
          ></SRecruitInput>
          <h3>~</h3>
          {/* 요거는 마감날짜 */}
          <SRecruitInput
            type="date"
            onChange={(e) => setEdDay(e.target.value)}
          ></SRecruitInput>
        </SRecruit>

        {/* 6. 강의 일시(달력 + 시간 + 라디오 버튼) */}
        <SLecture>
          <h3>강의 일시</h3>
          <SLectureInput
            type="date"
            onChange={(e) => setLectureDay(e.target.value)}
          ></SLectureInput>
          <h3>-</h3>
          <STimeInput
            type="time"
            onChange={(e) => setLectureTime(e.target.value)}
          ></STimeInput>

          {/* 라디오 버튼 넣기 */}
          <SRadio onChange={(e) => setClassTime(e.target.value)}>
            <div className="radio-container">
              <input type="radio" name="time" value={1} />
              <span>1시간</span>
            </div>

            <div className="radio-container">
              <input type="radio" name="time" value={2} />
              <span>2시간</span>
            </div>
          </SRadio>
        </SLecture>

        {/* 7. 강의 summary */}
        {/* 1) 글자수 제한 100 거는 방법 찾아내고 */}
        <SSummary>
          <h3>내용 요약</h3>
          <SSummaryText
            defaultValue={summary}
            maxLength={100}
            rows={3}
            placeholder="원하는 강의에 대해 요약해서 작성해주세요. 작성하신 내용은 공부방 목록에 표시됩니다"
            onChange={(e) => setSummary(e.target.value)}
          ></SSummaryText>
        </SSummary>
        <SLimit>{summary.length}/100</SLimit>

        {/* 8. 강의 요청 상세 */}
        {/* 1) 글자수 제한 500 거는 방법 찾아내고 */}
        <SDetail>
          <h3>내용 상세</h3>
          <SDetailText
            defaultValue={detail}
            maxLength={500}
            rows={10}
            placeholder="강의에 대해 바라는 점을 자유롭게 작성해주세요"
            onChange={(e) => setDetail(e.target.value)}
          ></SDetailText>
          <SLimit>{detail.length}/500</SLimit>
        </SDetail>

        {/* 9. 등록(작성) 버튼 */}
        <SButton>
          <SRegistButton onClick={(e) => handleOpen(e)}>등록</SRegistButton>
        </SButton>
      </SContainer>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{
                textAlign: "center",
                marginTop: "32px",
              }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              <SModal>내용을 모두 입력해주세요</SModal>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <SCancelButton onClick={(e) => setOpen(false)}>
                확인
              </SCancelButton>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </SCardBox>
  );
};

export default NewBoard;
