import React, { useState, useContext } from "react";
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
import { BoardDataContext, LoginStateContext } from "../../App";
import { newBoardAPI } from "../../utils/api/boardAPI";

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
  const { userInfo } = useContext(LoginStateContext);
  const { flag, setFlag } = useContext(BoardDataContext);
  const today = new Date().toISOString().substring(0, 10);
  const navigate = useNavigate();

  const [title, setTitle] = useState(""); // 강의의 제목
  const [participant, setParticipant] = useState(1); // 참가인원(5명까지만!)
  const [deadline, setDeadline] = useState(""); // 모집 종료 날짜
  const [lectureDay, setLectureDay] = useState(""); // 강의 날짜
  const [lectureTime, setLectureTime] = useState(1); // 강의 시작 시간
  const [classTime, setClassTime] = useState(""); // 강의 시간
  const [summary, setSummary] = useState(""); // 강의 요약
  const [detail, setDetail] = useState(""); // 강의 상세
  const [open, setOpen] = React.useState(false); // 모달 open / close 여부
  const [check, setCheck] = useState(""); // 입력 안된 정보 저장
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

  const handleOpen = () => {
    if (!title) {
      setCheck("제목을");
      setOpen(true);
    } else if (!imgSelect) {
      setCheck("대표 이미지를");
      setOpen(true);
    } else if (!deadline) {
      setCheck("모집 기간을");
      setOpen(true);
    } else if (!lectureDay) {
      setCheck("강의 날짜를");
      setOpen(true);
    } else if (!classTime) {
      setCheck("강의 시간을");
      setOpen(true);
    } else if (!summary) {
      setCheck("내용 요약을");
      setOpen(true);
    } else if (!detail) {
      setCheck("내용 상세를");
      setOpen(true);
    } else {
      handleRegister(); // 모두 잘 작성됐으면 등록
      setFlag(!flag);
    }
  };

  const handleClose = () => setOpen(false);

  // 등록 버튼 클릭으로 작동
  const handleRegister = () => {
    newBoardAPI(
      userInfo.id,
      imgSelect,
      title,
      participant,
      detail,
      summary,
      lectureDay + " " + lectureTime,
      classTime,
      deadline,
      0
    );
    navigate("/board", {
      state: {
        isWritten: "true",
      },
    });
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <S.SCardBox>
      <S.SContainer>
        {/* 1. 제목 */}
        <S.STitle>
          <h1>✏️ 원하는 강의를 만들어 보세요!</h1>
        </S.STitle>

        {/* 2. 구분선 */}
        {/* 구분선은 걍 제목 margin-bottom에 선 그었어용 */}

        {/* 3. 사용자 지정 제목 */}
        <S.SBoardTitle>
          <h3>강의 제목</h3>
          <S.STitleInput
            value={title}
            placeholder="강의 제목을 입력해주세요."
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
          <h3>모집 인원</h3>
          <S.SPartCnt onChange={(e) => setParticipant(e.target.value)}>
            {/* <option value="">0</option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </S.SPartCnt>
          <h3>&nbsp;명</h3>
          <S.SGuide>* 본인을 포함해서 설정해주세요</S.SGuide>
        </S.SParticipant>

        {/* 5. 모집 기간 */}
        <S.SRecruit>
          <h3>모집 기간</h3>
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
            min={deadline}
            onChange={(e) => setLectureDay(e.target.value)}
          ></S.SLectureInput>
          {/* <h3>-</h3> */}
          <S.STimeInput onChange={(e) => setLectureTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </S.STimeInput>
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
            placeholder="원하는 강의에 대해 요약해서 작성해주세요. 작성하신 내용은 공부방 목록에 표시됩니다."
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
            placeholder="강의에 대해 바라는 점을 자유롭게 작성해주세요."
            onChange={(e) => setDetail(e.target.value)}
          ></S.SDetailText>
          <S.SLimit>{detail.length}/300</S.SLimit>
        </S.SDetail>

        {/* 9. 등록(작성) 버튼 */}
        <S.SButton>
          <S.SRegistButton onClick={handleOpen}>등록</S.SRegistButton>
        </S.SButton>
      </S.SContainer>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
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
              <S.SModal>{check} 입력해주세요</S.SModal>
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
