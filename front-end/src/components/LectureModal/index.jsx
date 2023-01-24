import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
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
} from "./styles";
import { SLectureModalButton } from "../LectureModalButton/styles";
import {
  faUser,
  faClock,
  faCalendarDays,
  faPersonChalkboard,
  faChalkboardUser,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

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
const LectureModal = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SLectureModalButton onClick={handleOpen}>살펴보기</SLectureModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* 여기는 제목 */}
          {/* 1. 제목 */}
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ pb: 2, borderBottom: 3 }}
          >
            {data.title}
          </Typography>
          {/* 여기는 내용 */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              {/* 2. 작성자 */}
              <SWriter icon={faUser} />
              <SSpan>{data.id}</SSpan>
            </div>
            <div>
              {/* 3. 강의 시간 */}
              <SClock icon={faClock}></SClock>
              <SSpan>{data.title}</SSpan>
            </div>
            <div>
              {/* 4. 모집 기간 */}
              <SCalendar icon={faCalendarDays}></SCalendar>
              <SSpan>{data.title}</SSpan>
            </div>
            <div>
              {/* 5. 강사 신청 현황 */}
              <SLecturer icon={faPersonChalkboard}></SLecturer>
              <SSpan>{data.title}</SSpan>
            </div>
            <div>
              {/* 6. 수강생 신청 현황 */}
              <SStudent icon={faChalkboardUser}></SStudent>
              <SSpan>{data.title}</SSpan>
            </div>
            <div>
              {/* 7. 강의 디테일 */}
              <SPencil icon={faPencil}></SPencil>
              <SDetail>{data.title}</SDetail>
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
