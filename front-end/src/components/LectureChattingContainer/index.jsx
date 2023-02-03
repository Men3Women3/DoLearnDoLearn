import React from "react";
import {
  SContainer,
  SUsersContainer,
  SChattingContainer,
  SContentCantainer,
  SMessageContainer,
  SChattingContent,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import thumbnailImg from "../../assets/images/thumbnail.png";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const LectureChattingContainer = (props) => {
  const [contents, setContents] = useState([]);
  const [inputData, setInputData] = useState("");
  const messageBoxRef = useRef();

  let sockJS = new SockJS("http://localhost:8080/ws");
  let client = Stomp.over(sockJS);
  const accessToken = localStorage.getItem("accessToken");

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight + 65;
    }
  };

  const handleMessageSend = (e) => {
    e.preventDefault();
    if (inputData) {
      client.send(
        `/pub/normal/${props.roomId}`,
        {
          Authentication: accessToken,
        },
        JSON.stringify({
          roomId: props.roomId,
          sender: props.username,
          content: inputData,
        })
      );
      setInputData("");
      // scrollToBottom();
    }
  };

  const handleMeesageSendKeyEvent = (e) => {
    // e.preventDefault();
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (inputData && e.key === "Enter" && e.shiftKey) {
      return;
    } else if (e.key === "Enter") {
      client.send(
        `/pub/normal/${props.roomId}`,
        {
          Authentication: accessToken,
        },
        JSON.stringify({
          roomId: props.roomId,
          sender: props.username,
          content: inputData,
        })
      );
      setInputData("");
    }
  };

  const handleInnerMessage = (meesage) => {
    const chattingContentContainer =
      document.getElementById("chatting-Content");

    const contentContainer = document.createElement("div");
    contentContainer.className = "content-container";

    const userNameTag = document.createElement("p");
    userNameTag.innerText = `${meesage.sender} (수강생)`;

    const contentTag = document.createElement("div");
    contentTag.innerText = meesage.content;
    contentTag.className = "content";

    if (meesage.sender === props.username) {
      contentContainer.style.textAlign = "right";
    }

    contentContainer.appendChild(userNameTag);
    contentContainer.appendChild(contentTag);
    chattingContentContainer.appendChild(contentContainer);
  };

  useEffect(() => {
    client.connect(
      {
        Authentication: accessToken,
      },
      (frame) => {
        client.subscribe(`/sub/${props.roomId}`, (response) => {
          console.log("STOMP Connection");
          const receivedMessage = JSON.parse(response.body);
          handleInnerMessage(receivedMessage);
          scrollToBottom();
        });
      }
    );
  }, []);

  return (
    <SContainer>
      <SChattingContainer ref={messageBoxRef}>
        <SChattingContent id="chatting-Content">
          {/* <div className="content-container">
            <p>김싸피 (수강생)</p>
            <div className="content">다시 설명해주세요!</div>
          </div> */}
        </SChattingContent>
      </SChattingContainer>
      <SMessageContainer>
        <textarea
          cols="38"
          rows="1"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyUp={(e) => handleMeesageSendKeyEvent(e)}
        />
        {/* 메시지 전송 버튼 */}
        <button onClick={(e) => handleMessageSend(e)}>
          <FontAwesomeIcon className="send-icon" icon={faPaperPlane} />
        </button>
      </SMessageContainer>
      <SUsersContainer>
        <span>
          <img className="lecturer" src={thumbnailImg} alt="" />
        </span>
        <span>
          <img src={thumbnailImg} alt="" />
        </span>
        <span>
          <img src={thumbnailImg} alt="" />
        </span>
        <span>
          <img src={thumbnailImg} alt="" />
        </span>
        <span>
          <img src={thumbnailImg} alt="" />
        </span>
        <span>
          <img src={thumbnailImg} alt="" />
        </span>
      </SUsersContainer>
    </SContainer>
  );
};

export default LectureChattingContainer;
