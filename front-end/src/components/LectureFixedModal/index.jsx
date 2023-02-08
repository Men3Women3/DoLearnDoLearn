import React, { useContext } from "react"
import { Box, Modal, Typography } from "@mui/material"
import {
  faClock,
  faFileLines,
  faPersonChalkboard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { SButtonBox, SButton } from "../LectureModalButton/styles"
import defaultProfile from "../../assets/images/defaultProfile.png"
import {
  SCustomFontAwesomeIcon,
  SSpan,
  SInfoItem,
  SContent,
  SDetail,
} from "./styles"
import { imageURL } from "../../utils/api/baseURL"
import { cancelEnrollAPI } from "../../utils/api/boardAPI"
import { BoardDataContext, LoginStateContext } from "../../App"

const customLecTime = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const year = startDate.getFullYear().toString().slice(-2)
  const month = (startDate.getMonth() + 1).toString().padStart(2, "0")
  const day = startDate.getDate().toString().padStart(2, "0")
  const time = startDate.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  })
  let remain = endDate.getHours() - startDate.getHours()
  if (remain < 0) remain += 24
  const custom = `${year}.${month}.${day} ${time} (${remain}시간)`
  return custom
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35vw",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  outline: "none",
  padding: "20px 30px",
}

const LectureFixedModal = ({
  open,
  handleClose,
  lectureInfo,
  instructorInfo,
  studentsInfo,
}) => {
  const { flag, setFlag } = useContext(BoardDataContext)
  const { isLogined, userInfo } = useContext(LoginStateContext)

  // 강사 프로필 섹션 눌렀을 때 프로필 상세보기 새 창으로 이동
  const handleOpenProfile = (uid) => {
    window.open(`board/profile/${uid}`)
  }

  // 신청 취소
  const cancelClass = async () => {
    //   await cancelEnrollAPI(userInfo.id, data.id, setCheck);
    //   setFlag(!flag);
    //   setOpen(false);
  }

  // 라이브 강의 입장
  const handleMoveToLecture = () => {
    //   navigate("/lecture", {
    //     state: {
    //       roomId: props.item.id,
    //       lecturerId: lecturerId,
    //       lecturerInfo: lecturerInfo,
    //       time: {
    //         startTime: lectureInfo.board.startTime,
    //         endTime: lectureInfo.board.endTime,
    //       },
    //     },
    //   });
  }

  console.log(instructorInfo)
  console.log(studentsInfo)
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={{ mt: 1 }}>
            <b>{lectureInfo.board.title}</b>
          </Typography>
          <hr />
          <SContent>
            <SInfoItem>
              <SCustomFontAwesomeIcon icon={faPersonChalkboard} />
              <SSpan>
                <b>강사 정보</b>
              </SSpan>
            </SInfoItem>
            <div
              className="instructor__section"
              onClick={(e) => handleOpenProfile(instructorInfo.id)}
            >
              <div>
                <img
                  className="profile-img"
                  src={
                    instructorInfo.imgUrl
                      ? `${imageURL}${instructorInfo.imgUrl}`
                      : defaultProfile
                  }
                  alt=""
                />
              </div>
              <div>
                <div className="instructor-name">{instructorInfo.name}</div>
                <div className="instructor-email">{instructorInfo.email}</div>
              </div>
            </div>
          </SContent>
          <SInfoItem>
            <SCustomFontAwesomeIcon icon={faUsers} />
            <SSpan>
              <b>수강 인원</b> | {studentsInfo.length}명
            </SSpan>
          </SInfoItem>
          <SInfoItem>
            <SCustomFontAwesomeIcon icon={faClock} />
            <SSpan>
              <b>강의 시간</b> |{" "}
              {customLecTime(
                lectureInfo.board.startTime,
                lectureInfo.board.endTime
              )}
            </SSpan>
          </SInfoItem>
          <SInfoItem>
            <SCustomFontAwesomeIcon icon={faFileLines} />
            <SSpan>
              <b>강의 상세 내용</b>
            </SSpan>
          </SInfoItem>

          <SDetail>{lectureInfo.board.content}</SDetail>
          <SButtonBox>
            <SButton onClick={cancelClass}>신청취소</SButton>
            <SButton onClick={handleMoveToLecture}>Live 입장</SButton>
          </SButtonBox>
        </Box>
      </Modal>
    </>
  )
}

export default LectureFixedModal
