import React, { useContext } from "react";
import { useState } from "react";
import SimpleSnackbar from "../SimpleSnackbar";

import { SButtonContainer, SSpan, SScontent } from "./styles";

import { Box, Modal, Slide, Typography } from "@mui/material";
import axios from "axios";
import { UnreadMessageContext } from "../../App";
import { deleteMessageAPI } from "../../utils/api/messageAPI";

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
};

const MessageDeleteModal = ({
  messageId,
  open,
  handleClose,
  setCheckDeleteState,
}) => {
  const { unreadMessageCnt, setStateMessageUpdate } =
    useContext(UnreadMessageContext);
  const slideTransition = (props) => {
    return <Slide {...props} direction="up" />;
  };
  const [state, setState] = useState({
    open: false,
    Transition: slideTransition,
  });

  const handleSnackbarOpen = () => {
    console.log("snackbar test");
    setState({ ...state, open: true });
  };

  const handleSnackbarClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleDeleteMessage = () => {
    deleteMessageAPI(messageId);
    handleClose();
    setCheckDeleteState(true);
    setStateMessageUpdate(true);
    handleSnackbarOpen();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} className="modal">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            className="modal-title"
            variant="h6"
            component="h2"
          >
            <SSpan>메시지 삭제 확인</SSpan>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <SScontent>해당 메시지를 삭제하시겠습니까?</SScontent>
          </Typography>
          <SButtonContainer>
            <button className="cancel-button" onClick={handleClose}>
              취소
            </button>
            <button className="delete-button" onClick={handleDeleteMessage}>
              삭제
            </button>
          </SButtonContainer>
        </Box>
      </Modal>
      {state.open ? (
        <SimpleSnackbar
          state={state}
          content="안녕하세요"
          handleClose={handleSnackbarClose}
        />
      ) : null}
    </div>
  );
};

export default MessageDeleteModal;
