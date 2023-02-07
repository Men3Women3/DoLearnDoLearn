import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import {
  faClock,
  faFileLines,
  faPersonChalkboard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { SButtonBox, SButton } from "../LectureModalButton/styles";
import defaultProfile from "../../assets/images/defaultProfile.png";
import { SCustomFontAwesomeIcon, SSpan, SInfoItem, SContent } from "./styles";
import { imageURL } from "../../utils/api/baseURL";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "calc(5vw + 400px)",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  outline: "none",
  padding: "20px 30px",
};

const LectureFixedModal = ({
  open,
  handleClose,
  instructorInfo,
  studentsInfo,
}) => {
  console.log(instructorInfo);
  console.log(studentsInfo);
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={{ mt: 1 }}>
            {instructorInfo.lecture.board.title}
          </Typography>
          <hr />
          <SContent>
            <SInfoItem>
              <SCustomFontAwesomeIcon icon={faPersonChalkboard} />
              <SSpan>
                <b>강사 정보</b>
              </SSpan>
            </SInfoItem>
            <div className="instructor__section">
              <div>
                <img
                  className="profile-img"
                  src={
                    instructorInfo.user.imgUrl
                      ? `${imageURL}${instructorInfo.user.imgUrl}`
                      : defaultProfile
                  }
                  alt=""
                />
              </div>
              <div>
                <div className="instructor-name">
                  {instructorInfo.user.name}
                </div>
                <div className="instructor-email">
                  {instructorInfo.user.email}
                </div>
              </div>
            </div>
          </SContent>

          <div>
            <SInfoItem>
              <SCustomFontAwesomeIcon icon={faUsers} />
              <SSpan>
                <b>수강 인원</b> | {studentsInfo.length}명
              </SSpan>
            </SInfoItem>
            <SInfoItem>
              <SCustomFontAwesomeIcon icon={faClock} />
              <SSpan>
                <b>강의 시간</b> | 23.02.15 01:00 (1시간)
              </SSpan>
            </SInfoItem>
            <div>
              <SInfoItem>
                <SCustomFontAwesomeIcon icon={faFileLines} />
                <SSpan>
                  <b>강의 상세 내용</b>
                </SSpan>
              </SInfoItem>
              <div className="custom-content">
                <div>
                  dkajflkdajflkajl;fjkafld;sanvmxz.nvmncakljfkldafkladln어러러어ㅇㅇㅇㅇㅇㅇ
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <SButtonBox>
            <SButton>신청취소</SButton>
            <SButton>Live 입장</SButton>
          </SButtonBox>
        </Box>
      </Modal>
    </>
  );
};

export default LectureFixedModal;
