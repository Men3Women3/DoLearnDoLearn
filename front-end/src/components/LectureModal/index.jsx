import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  SSpan,
  SWriter,
  SClock,
  SCalendar,
  SLecturer,
  SStudent,
  SPencil,
  SDetail,
  SButton,
} from "./styles";
import {
  faUser,
  faClock,
  faCalendarDays,
  faPersonChalkboard,
  faChalkboardUser,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
// import { grid } from "@mui/system";

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

const LectureModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const list = props.list; // 우선 list라는 이름으로 받아왔는데... 생각해보니 나는 list가 아니라 데이터 일부만 필요ㅠㅠ

  return (
    <div>
      <SButton onClick={handleOpen}>살펴보기</SButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* 여기는 제목 */}
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ pb: 2, borderBottom: 3 }}
          >
            git 가르쳐주실 분 구합니다.
          </Typography>
          {/* 여기는 내용 */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <SWriter icon={faUser} />
              <SSpan>김싸피</SSpan>
            </div>
            <div>
              <SClock icon={faClock}></SClock>
              <SSpan>강의 시간 2023.01.11. 10:00 (2시간)</SSpan>
            </div>
            <div>
              <SCalendar icon={faCalendarDays}></SCalendar>
              <SSpan>모집 기간 2023.01.07. ~ 2023.01.10.</SSpan>
            </div>
            <div>
              <SLecturer icon={faPersonChalkboard}></SLecturer>
              <SSpan>강사 신청 현황 3명</SSpan>
            </div>
            <div>
              <SStudent icon={faChalkboardUser}></SStudent>
              <SSpan>수강생 신청 현황 2 / 5</SSpan>
            </div>
            <div>
              <SPencil icon={faPencil}></SPencil>
              <SDetail>어쩌구 저쩌구 강의 디테일</SDetail>
            </div>
          </Typography>
          <Typography id="modal-modal-button" sx={{ mt: 2 }}>
            {/* <SButton>강사 신청</SButton> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default LectureModal;
