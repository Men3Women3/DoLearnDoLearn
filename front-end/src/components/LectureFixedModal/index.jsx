import React from "react"
import { Box, Modal, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { SContent } from "../MessageDetailModal/styles"

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
}

const LectureFixedModal = ({
  open,
  handleClose,
  instructorInfo,
  studentsInfo,
}) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={{ mt: 1 }}>
            {instructorInfo.lecture.board.title}
          </Typography>
          <SContent>
            <div className="upper__container">
              <span>
                <b>하이하이요</b>
              </span>
            </div>

            <div className="down__container">
              <div className="lecture-info">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ height: "calc(1vw + 4px)" }}
                />
                <div className="custom-content">
                  <b>강의명</b> :
                  <br />
                  <b>강의 시간</b> :
                </div>
              </div>
              <div></div>
            </div>
          </SContent>
          {/* <SButton> */}
          {/* <button className="delete-button" onClick={handleClose}>
          확인
        </button> */}
          {/* </SButton> */}
        </Box>
      </Modal>
    </>
  )
}

export default LectureFixedModal
