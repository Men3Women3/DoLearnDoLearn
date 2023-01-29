import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as S from "./styles";
import * as f from "@fortawesome/free-solid-svg-icons";
import LectureModalButton from "../LectureModalButton";

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
  padding: "3vw",
};

// Uniboard에서 데이터 받아와야함 (그래서 props가 있는거)
const LectureModal = ({ data, open, handleClose }) => {
  const createdTime = data.createdTime.substring(0, 10);
  const deadline = data.deadline.substring(0, 10);
  const startTime = data.startTime.substring(0, 16);
  const endTime = data.endTime.substring(11, 16);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* 여기는 제목 */}
          {/* 1. 제목 */}
          <S.STitle>{data.title}</S.STitle>
          {/* 여기는 내용 */}
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <S.SInfoItem>
              {/* 3. 모집 기간 */}
              <S.SCalendar icon={f.faCalendarDays}></S.SCalendar>
              <S.SSpan>
                모집 기간 | {createdTime} - {deadline}
              </S.SSpan>
            </S.SInfoItem>
            <S.SInfoItem>
              {/* 4. 강의 시간 */}
              <S.SClock icon={f.faClock}></S.SClock>
              <S.SSpan>
                강의 시간 | {startTime} - {endTime}
              </S.SSpan>
            </S.SInfoItem>
            <S.SInfoItem>
              {/* 5. 강사 신청 현황 */}
              <S.SLecturer icon={f.faPersonChalkboard}></S.SLecturer>
              <S.SSpan>강사 신청 현황 | {data.instructors}명</S.SSpan>
            </S.SInfoItem>
            <S.SInfoItem>
              {/* 6. 수강생 신청 현황 */}
              <S.SStudent icon={f.faChalkboardUser}></S.SStudent>
              <S.SSpan>수강생 신청 현황 | {data.students} / 5명</S.SSpan>
            </S.SInfoItem>
            <S.SInfoItem>
              {/* 7. 강의 디테일 */}
              <S.SPencil icon={f.faPencil}></S.SPencil>
              <S.SDetail>{data.content}</S.SDetail>
            </S.SInfoItem>
            {/* 8. 여기는 각 경우에 따른 추가 컴포넌트 띄우는 곳 */}
            <LectureModalButton data={data} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LectureModal;
