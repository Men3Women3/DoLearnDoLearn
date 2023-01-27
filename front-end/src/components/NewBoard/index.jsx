import React, { useState } from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Typography from "@mui/material/Typography"
import CardBox from "../CardBox"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MenuItem, Select } from "@mui/material"
import cookingImg from "../../assets/images/thumbnail/cooking.svg"
import drawingImg from "../../assets/images/thumbnail/drawing.svg"
import meetingImg from "../../assets/images/thumbnail/meeting.svg"
import conferenceImg from "../../assets/images/thumbnail/conference.svg"
import exerciseImg from "../../assets/images/thumbnail/exercise.svg"
import scrumImg from "../../assets/images/thumbnail/scrum.svg"
import studyImg from "../../assets/images/thumbnail/study.svg"
import teamworkImg from "../../assets/images/thumbnail/teamwork.svg"

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
} from "./styles.jsx"
import { useNavigate } from "react-router"
import { useCallback } from "react"
import { useEffect } from "react"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "white",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "white",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  )
}

const NewBoard = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("") // 강의의 제목
  const [participant, setParticipant] = useState(0) // 참가인원(5명까지만!)
  const [stDay, setStDay] = useState("") // 모집 시작 날짜
  const [edDay, setEdDay] = useState("") // 모집 종료 날짜
  const [lectureDay, setLectureDay] = useState("") // 강의 날짜
  const [lectureTime, setLectureTime] = useState("") // 강의 시작 시간
  const [classTime, setClassTime] = useState("") // 강의 시간
  const [summary, setSummary] = useState("") // 강의 요약
  const [detail, setDetail] = useState("") // 강의 상세
  const [open, setOpen] = React.useState(false) // 모달 open / close 여부
  const today = new Date()
  const thumbnails = [
    scrumImg,
    cookingImg,
    exerciseImg,
    drawingImg,
    meetingImg,
    conferenceImg,
    studyImg,
    teamworkImg,
  ]
  // 현재 썸네일로 어떤 이미지가 선택됐는지(지금은 인덱스 번호로 들어가있음)
  let [imgSelect, setImgSelect] = useState("0")
  // 이미지 클릭했을 때 해당 인덱스 번호로 imgSelect 갱신
  const toggleSelect = (e) => {
    setImgSelect(e.target.alt)
  }

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
  }

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
      setOpen(true) // 빈 내용이 있으면 경고 띄우기
    } else {
      handleRegister() // 모두 잘 작성됐으면 등록
    }
  }

  const handleClose = () => setOpen(false)

  const handleRegister = () => {
    // 등록버튼 눌렀을 때 어떤 작업을 해야 하는지 작성하세용
    // 저장 됐으면 강의 목록 페이지로 가줭
    console.log(title)
    console.log(participant)
    console.log(stDay)
    console.log(edDay)
    console.log(lectureDay)
    console.log(lectureTime)
    console.log(classTime)
    console.log(summary)
    console.log(detail)
    navigate("/board")
  }

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
    // autoplaySpeed: 3000,  // 자동 재생 속도
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

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

        {/* 썸네일 부분 */}
        <h3>썸네일 선택</h3>
        <Slider {...settings}>
          {thumbnails.map((item, idx) => (
            <div key={item.key}>
              <img
                src={item}
                alt={idx}
                // 현재 인덱스와 선택된 이미지 인덱스가 같으면 active 클래스 부여 / 아니면 공백 클래스 부여
                className={idx == imgSelect ? " active" : ""}
                onClick={toggleSelect}
              />
            </div>
          ))}
        </Slider>

        {/* 4. 참여 인원 */}
        <SParticipant>
          {/* 모집인원으로 수정함!!! */}
          <h3>모집 인원</h3>
          {/* select 박스로 꾸며보긴 함 */}
          {/* <Select
            value={participant}
            size="sm"
            onChange={(e) => {
              setParticipant(e.target.value)
            }}
            >
            <MenuItem value={0}>0명</MenuItem>
            <MenuItem value={1}>1명</MenuItem>
            <MenuItem value={2}>2명</MenuItem>
            <MenuItem value={3}>3명</MenuItem>
            <MenuItem value={4}>4명</MenuItem>
            <MenuItem value={5}>5명</MenuItem>
          </Select> */}
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
  )
}

export default NewBoard
