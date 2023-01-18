import React from "react";
import {
  SSidebarContainer,
  SButtonContainer,
  SUserDeleteButtonContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";

const ProfileSidebar = () => {
  return (
    <SSidebarContainer>
      <SButtonContainer>
        <button className="profile-page">프로필</button>
        <div className="profile-page__background"></div>
      </SButtonContainer>
      <SButtonContainer>
        <button className="schedule-page">일정</button>
        <div className="schedule-page__background"></div>
      </SButtonContainer>
      <SButtonContainer>
        <button className="undecided-lecture-page">미확정 강의</button>
        <div className="undecided-lecture-page__background"></div>
      </SButtonContainer>
      <SButtonContainer>
        <button className="message-page">메시지함</button>
        <div className="message-page__background"></div>
      </SButtonContainer>
      <SUserDeleteButtonContainer>
        <FontAwesomeIcon className="user-delete" icon={faUserSlash} />
        <button>회원탈퇴</button>
      </SUserDeleteButtonContainer>
    </SSidebarContainer>
  );
};

export default ProfileSidebar;
