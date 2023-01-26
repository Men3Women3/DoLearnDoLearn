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

const LectureChattingContainer = () => {
  return (
    <SContainer>
      <SChattingContainer>
        <SContentCantainer>
          <SChattingContent>
            <p>김싸피 (수강생)</p>
            <div>다시 설명해주세요!</div>
          </SChattingContent>
        </SContentCantainer>
        <SMessageContainer>
          <textarea cols="30" rows="3" />
          {/* 메시지 전송 버튼 */}
          <button>
            <FontAwesomeIcon className="send-icon" icon={faPaperPlane} />
          </button>
        </SMessageContainer>
      </SChattingContainer>
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
