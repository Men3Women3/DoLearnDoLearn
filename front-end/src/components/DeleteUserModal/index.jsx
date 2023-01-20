import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SSection } from "./styles";

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

const DeleteUserModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SSection>
      <Button className="modal-button" onClick={handleOpen}>
        회원탈퇴
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            회원 탈퇴 확인
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="Delete-warning">
              회원 탈퇴 후에는 아이디와 데이터를 복구할 수 없습니다.
            </p>
            <p>탈퇴를 원하시면 확인을 눌러주세요.</p>
          </Typography>
          <div className="button-container">
            <button>확인</button>
            <button>취소</button>
          </div>
        </Box>
      </Modal>
    </SSection>
  );
};

export default DeleteUserModal;
