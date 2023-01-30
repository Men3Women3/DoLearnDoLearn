import React, { useContext, useEffect } from "react";

import { SButton, SContent } from "./styles";

import { Box, Modal, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { UnreadMessageContext } from "../../App";
import { getUnreadMessageCnt } from "../../utils/api/messageAPI";

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

const checkType = (target) => {
  if ((target === "confirm") | (target === "complete")) {
    return "확정";
  } else if (target === "cancle") {
    return "취소";
  } else if (target === "close") {
    return "폐강";
  }
};

const customRecieveTime = (target) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const targetDate = new Date(target);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const date = targetDate.getDate();
  const day = week[targetDate.getDay()];
  const time = targetDate.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return `${year}년 ${month}월 ${date}일 (${day}) ${time}`;
};

const customLectureTime = (target) => {
  const date = new Date(target);
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const time = date.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return `${year}.${month}.${day} ${time}`;
};

const typeMessage = (target, content) => {
  let mainText;
  let additionalText;
  if ((target === "confirm") | (target === "complete")) {
    mainText =
      "매칭에 성공하여 해당 강의 개설이 확정되었습니다. \n 강의 시작 시간에 늦지 않게 접속해주세요!";
    additionalText = "* 자세한 사항은 일정 탭을 확인해주세요.";
  } else if (target === "cancle") {
    mainText =
      "해당 강의가 강사님의 개인적인 사유로 취소되었습니다. \n 일정에 착오 없으시길 바랍니다.";
    additionalText = `* 취소사유 : ${content}`;
  } else if (target === "close") {
    mainText =
      "매칭에 실패하여 해당 강의가 폐강되었습니다. \n 일정에 착오 없으시길 바랍니다.";
    additionalText = "";
  }
  return [mainText, additionalText];
};

const SERVER_URL = "http://localhost:8080";
const MessageDetailModal = ({
  data,
  open,
  handleClose,
  readMessage,
  checkMessage,
  setCheckState,
}) => {
  const { unreadMessageCnt, setStateMessageUpdate } =
    useContext(UnreadMessageContext);
  const type = checkType(data.type);
  const recieveTime = customRecieveTime(data.createdTime);
  const [mainText, additionalText] = typeMessage(data.type, data.content);

  // 확인 버튼 누르면 메시지 읽음으로 변경
  const axios_put = async () => {
    try {
      const res = await axios.put(
        `${SERVER_URL}/message`,
        { id: data.id },
        {
          headers: {
            // ------------------------------------------
            // -----------------수정 필요----------------
            // 일단은 갱신 신경안쓰고 로컬스토리지에 들어있는 엑세스토큰으로 변경 시도!!
            // ------------------------------------------
            // ------------------------------------------
            Authentication: localStorage.getItem("accessToken"),
          },
        }
      );
      // 성공했을 때 화면에 바로 적용할 수 있는 방법 생각하기!!
      // 지금은 새로고침해야만 적용됨
      console.log("성공!!!!!");
    } catch (e) {
      console.log(e);
    }
  };

  const handleReadMessage = () => {
    // 읽지 않은 경우에 axios 요청
    if (data.isChecked === 0) {
      axios_put();
      setCheckState(true);
      setStateMessageUpdate(true);
    }
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} className="modal">
      <Box sx={style}>
        <Typography sx={{ mt: 1 }}>
          <SContent>
            <div className="upper__container">
              <span>
                <b>[{type}]</b> {data.title}
              </span>
              <p>{recieveTime}</p>
            </div>

            <div className="down__container">
              <div className="lecture-info">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ height: "calc(1vw + 4px)" }}
                />
                <div className="custom-content">
                  <b>강의명</b> : {data.title}
                  <br />
                  <b>강의 시간</b> : {customLectureTime(data.start_time)} ~{" "}
                  {customLectureTime(data.end_time)}
                </div>
              </div>
              <div>
                <p>
                  {mainText.split("\n").map((txt) => {
                    return (
                      <>
                        {txt}
                        <br />
                      </>
                    );
                  })}
                  <div className="additional-text">{additionalText}</div>
                </p>
              </div>
            </div>
          </SContent>
        </Typography>
        <SButton>
          <button className="delete-button" onClick={handleReadMessage}>
            확인
          </button>
        </SButton>
      </Box>
    </Modal>
  );
};

export default MessageDetailModal;
