import React, { useState, useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cookingImg from "../../assets/images/thumbnail/cooking.svg";
import drawingImg from "../../assets/images/thumbnail/drawing.svg";
import meetingImg from "../../assets/images/thumbnail/meeting.svg";
import conferenceImg from "../../assets/images/thumbnail/conference.svg";
import exerciseImg from "../../assets/images/thumbnail/exercise.svg";
import scrumImg from "../../assets/images/thumbnail/scrum.svg";
import studyImg from "../../assets/images/thumbnail/study.svg";
import teamworkImg from "../../assets/images/thumbnail/teamwork.svg";
import * as S from "./styles.jsx";
import { useNavigate } from "react-router";
import axios from "axios";
import { LoginStateContext } from "../../App";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const NewBoard = () => {
  const SERVER_URL = "http://localhost:3000";

  const { isLogined, userInfo } = useContext(LoginStateContext);

  const today = new Date().toISOString().substring(0, 10);
  const navigate = useNavigate();

  const [title, setTitle] = useState(""); // 강의의 제목
  const [participant, setParticipant] = useState(0); // 참가인원(5명까지만!)
  const [deadline, setDeadline] = useState(""); // 모집 종료 날짜
  const [lectureDay, setLectureDay] = useState(""); // 강의 날짜
  const [lectureTime, setLectureTime] = useState(""); // 강의 시작 시간
  const [classTime, setClassTime] = useState(""); // 강의 시간
  const [summary, setSummary] = useState(""); // 강의 요약
  const [detail, setDetail] = useState(""); // 강의 상세
  const [open, setOpen] = React.useState(false); // 모달 open / close 여부
  const thumbnails = [
    scrumImg,
    cookingImg,
    exerciseImg,
    drawingImg,
    meetingImg,
    conferenceImg,
    studyImg,
    teamworkImg,
  ];
  // 현재 썸네일로 어떤 이미지가 선택됐는지(지금은 인덱스 번호로 들어가있음)
  const [imgSelect, setImgSelect] = useState(0);
  // 이미지 클릭했을 때 해당 인덱스 번호로 imgSelect 갱신
  const toggleSelect = (e) => {
    setImgSelect(e.target.className);
  };

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
    handleRegister();
    if (
      !imgSelect ||
      !title ||
      !deadline ||
      !lectureDay ||
      !lectureTime ||
      !classTime ||
      !summary ||
      !detail ||
      !participant
    ) {
      setOpen(true); // 빈 내용이 있으면 경고 띄우기
    } else {
      handleRegister(); // 모두 잘 작성됐으면 등록
    }
  };

  const handleClose = () => setOpen(false);

  const handleRegister = async () => {
    // 등록버튼 눌렀을 때 어떤 작업을 해야 하는지 작성하세용
    try {
      await axios.post(`${SERVER_URL}/board`, {
        uid: userInfo.id,
        tid: imgSelect,
        title,
        maxCnt: participant,
        content: detail,
        summary,
        startTime: lectureDay + " " + lectureTime,
        endTime: classTime,
        deadline,
        isFixed: 0,
      });
      navigate("/board");
      console.log("강의 제목: ", title);
      console.log("썸네일 인덱스 번호: ", imgSelect);
      console.log("모집 인원: ", participant);
      console.log("모집종료기간: ", deadline);
      console.log("강의 날짜 및 시간: ", lectureDay + " " + lectureTime);
      console.log("총 강의 시간: ", classTime);
      console.log("강의 요약: ", summary);
      console.log("강의 상세: ", detail);
    } catch (err) {
      console.log(err);
      console.log("서버에 데이터 보내기 실패");
    }
  };

  // 이미지 캐러쉘 세팅 옵션
  const settings = {
    // 슬라이드 옵션들
    arrows: true, // 화살표 표시
    dots: false, // 밑에 현재 페이지와 나머지 페이지 점으로 표시
    infinite: true, // 무한 반복
    speed: 500, // 넘기는 속도
    slidesToShow: 3, // 슬라이드에 보여지는 아이템 개수
    slidesToScroll: 1, // 슬라이드 넘기는 아이템 개수
    autoplay: false, // 자동 재생
    draggable: false,
    // autoplaySpeed: 3000, // 자동 재생 속도
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <S.SCardBox>
      <S.SContainer>
        {/* 1. 제목 */}
        <S.STitle>
          <h1>공부방을 만들어요</h1>
        </S.STitle>

        {/* 2. 구분선 */}
        {/* 구분선은 걍 제목 margin-bottom에 선 그었어용 */}

        {/* 3. 사용자 지정 제목 */}
        <S.SBoardTitle>
          <h3>강의 제목</h3>
          <S.STitleInput
            value={title}
            placeholder="제목을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
          ></S.STitleInput>
        </S.SBoardTitle>

        {/* 썸네일 부분 */}
        <h3>대표 이미지 선택</h3>
        <Slider {...settings}>
          {thumbnails.map((item, idx) => (
            <div key={idx}>
              <img
                src={item}
                alt={"thumbnail-img"}
                // 현재 인덱스와 선택된 이미지 인덱스가 같으면 active 클래스 부여
                className={
                  String(idx) === imgSelect ? `${idx} active` : `${idx}`
                }
                onClick={toggleSelect}
              />
            </div>
          ))}
        </Slider>

        {/* 4. 참여 인원 */}
        <S.SParticipant>
          {/* 모집인원으로 수정함!!! */}
          <h3>모집 인원</h3>
          <S.SPartCnt onChange={(e) => setParticipant(e.target.value)}>
            <option value="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </S.SPartCnt>
          <h3>&nbsp;명</h3>
        </S.SParticipant>

        {/* 5. 모집 기간 */}
        <S.SRecruit>
          <h3>모집 기간</h3>
          {/* 요거는 시작날짜 */}
          {/* 요거는 마감날짜 */}
          <S.SRecruitInput
            type="date"
            min={today}
            onChange={(e) => setDeadline(e.target.value)}
          ></S.SRecruitInput>
          <h3>까지</h3>
        </S.SRecruit>

        {/* 6. 강의 일시 */}
        <S.SLecture>
          <h3>강의 일시</h3>
          <S.SLectureInput
            type="date"
            min={today}
            onChange={(e) => setLectureDay(e.target.value)}
          ></S.SLectureInput>
          <h3>-</h3>
          <S.STimeInput
            type="number"
            min={1}
            max={24}
            defaultValue={1}
            onChange={(e) => setLectureTime(e.target.value)}
          ></S.STimeInput>
          <h3>&nbsp;시</h3>

          <S.SRadio onChange={(e) => setClassTime(e.target.value)}>
            <div className="radio-container">
              <input type="radio" name="time" value={1} />
              <span>1시간</span>
            </div>

            <div className="radio-container">
              <input type="radio" name="time" value={2} />
              <span>2시간</span>
            </div>
          </S.SRadio>
        </S.SLecture>

        {/* 7. 강의 summary */}
        <S.SSummary>
          <h3>내용 요약</h3>
          <S.SSummaryText
            defaultValue={summary}
            maxLength={20}
            rows={3}
            placeholder="원하는 강의에 대해 요약해서 작성해주세요. 작성하신 내용은 공부방 목록에 표시됩니다"
            onChange={(e) => setSummary(e.target.value)}
          ></S.SSummaryText>
          <S.SLimit>{summary.length}/20</S.SLimit>
        </S.SSummary>

        {/* 8. 강의 요청 상세 */}
        <S.SDetail>
          <h3>내용 상세</h3>
          <S.SDetailText
            defaultValue={detail}
            maxLength={300}
            rows={10}
            placeholder="강의에 대해 바라는 점을 자유롭게 작성해주세요"
            onChange={(e) => setDetail(e.target.value)}
          ></S.SDetailText>
          <S.SLimit>{detail.length}/300</S.SLimit>
        </S.SDetail>

        {/* 9. 등록(작성) 버튼 */}
        <S.SButton>
          <S.SRegistButton onClick={(e) => handleOpen(e)}>등록</S.SRegistButton>
        </S.SButton>
      </S.SContainer>

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
              <S.SModal>내용을 모두 입력해주세요</S.SModal>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <S.SCancelButton onClick={(e) => setOpen(false)}>
                확인
              </S.SCancelButton>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </S.SCardBox>
  );
};

export default NewBoard;
