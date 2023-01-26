import React from "react"

import { SButton, SContent } from "./styles"

import { Box, Modal, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

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

const MessageDetailModal = ({ data, open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} className="modal">
      <Box sx={style}>
        <Typography sx={{ mt: 1 }}>
          <SContent>
            <div className="upper__container">
              <span>{data.content}</span>
              <p>2023년 1월 24일 (화) 오후 3:12</p>
            </div>

            <div className="down__container">
              {/* <div>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ height: "calc(1vw + 4px)" }}
                />
                <span>{data.sender}</span>
              </div> */}
              <div className="lecture-info">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ height: "calc(1vw + 4px)" }}
                />
                <div className="custom-content">
                  <b>강의명</b> : {data.title}
                  <br />
                  <b>강의 시간</b> : {data.start_time} ~ {data.end_time}
                </div>
              </div>
              <div>
                {data.is_confirm ? (
                  <p>
                    매칭에 성공하여 해당 강의 개설이 확정되었습니다.
                    <br />
                    강의 시작 시간에 늦지 않게 접속해주세요!
                    <br />
                    <span className="additional-text">
                      * 자세한 사항은 일정 탭을 확인해주세요.
                    </span>
                  </p>
                ) : (
                  <p>
                    해당 강의가 강사님의 개인적인 사유로 폐강되었습니다.
                    <br />
                    일정에 착오 없으시길 바랍니다.
                    <br />
                    <span className="additional-text">* 취소사유 :</span>
                  </p>
                )}
              </div>
            </div>
          </SContent>
        </Typography>
        <SButton>
          <button className="delete-button">확인</button>
        </SButton>
      </Box>
    </Modal>
  )
}

export default MessageDetailModal
