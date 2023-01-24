import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { SSection, SSpan, SUl, SButtonContainer } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserSlash } from "@fortawesome/free-solid-svg-icons"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "calc(1vw + 500px)",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  outline: "none",
  padding: "20px 30px",
}

const DeleteUserModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <SSection>
      <Button className="modal-button" onClick={handleOpen}>
        <FontAwesomeIcon className="user-delete" icon={faUserSlash} />
        회원탈퇴
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        className="modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-container">
          <Typography
            id="modal-modal-title"
            className="modal-title"
            variant="h6"
            component="h2"
          >
            <SSpan>회원 탈퇴 확인</SSpan>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <SUl>
              <li className="delete-warning">
                회원 탈퇴 후에는 아이디와 데이터를 복구할 수 없습니다.
              </li>
              <li>탈퇴를 원하시면 확인을 눌러주세요.</li>
            </SUl>
          </Typography>
          <SButtonContainer>
            <button className="delete-button">확인</button>
            <button className="cancel-button" onClick={handleClose}>
              취소
            </button>
          </SButtonContainer>
        </Box>
      </Modal>
    </SSection>
  )
}

export default DeleteUserModal
