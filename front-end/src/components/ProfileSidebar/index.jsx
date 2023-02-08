import React from "react";
import {
  SSidebarContainer,
  SButtonContainer,
  SUserDeleteButtonContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faCalendarXmark } from "@fortawesome/free-regular-svg-icons";
import WarningModal from "../WarningModal";
import { useNavigate } from "react-router";
import { deleteUserAPI } from "../../utils/api/userAPI";

const ProfileSidebar = (props) => {
  const navigate = useNavigate();

  const handleDeleteUser = () => {
    deleteUserAPI();
  };

  return (
    <SSidebarContainer>
      {/* 프로필 탭 */}
      <SButtonContainer>
        <div
          className={
            props.isProfileTabActive
              ? "active tab__section profile-page"
              : "tab__section tab-content profile-page"
          }
          onClick={props.handleTabValue}
        >
          <FontAwesomeIcon icon={faUser} />
          &emsp;프로필
        </div>
      </SButtonContainer>
      {/* 일정 탭 */}
      <SButtonContainer>
        <div
          className={
            props.isScheduleTabActive
              ? "active tab__section schedule-page"
              : "tab__section tab-content schedule-page"
          }
          onClick={props.handleTabValue}
        >
          <FontAwesomeIcon icon={faCalendarCheck} />
          &emsp;일정
        </div>
      </SButtonContainer>
      {/* 미확정 강의 탭 */}
      <SButtonContainer>
        <div
          className={
            props.isUnScheduleTabActive
              ? "active tab__section undecided-lecture-page"
              : "tab__section tab-content undecided-lecture-page"
          }
          onClick={props.handleTabValue}
        >
          <FontAwesomeIcon icon={faCalendarXmark} />
          &emsp;미확정 강의
        </div>
      </SButtonContainer>
      {/* 메시지함 탭 */}
      <SButtonContainer>
        <div
          className={
            props.isMessageTabActive
              ? "active tab__section message-page"
              : "tab__section tab-content message-page"
          }
          onClick={props.handleTabValue}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          &emsp;메시지함
        </div>
      </SButtonContainer>
      {/* 회원탈퇴 버튼 */}
      <SUserDeleteButtonContainer>
        {/* ProfileSidebar에서 사용시 */}
        <WarningModal
          title="회원 탈퇴 확인"
          warningContent="회원 탈퇴 후에는 아이디와 데이터를 복구할 수 없습니다."
          content="탈퇴를 원하시면 확인을 눌러주세요."
          profileSidebar
          handler={handleDeleteUser}
        />

        {/* 강사가 강의 취소 시 (아직 넣을 컴포넌트가 없어서 여기서 임시로 테스트) */}
        {/* <WarningModal
          title="강의 취소 확인"
          warningContent="강의를 취소하면 점수 패널티를 받게 됩니다."
          content="강의 취소를 원하시면 확인을 눌러주세요."
          lectureCancel={false}
        >
          <textarea
            style={{
              resize: "none",
              borderRadius: "8px",
              fontFamily: "Pretendard-Regular",
              fontSize: "calc(0.6vw + 5px)",
              padding: "calc(0.5vw + 2px)",
              width: "calc(1vw + 380px)",
            }}
            cols="52"
            rows="6"
          ></textarea>
        </WarningModal> */}
      </SUserDeleteButtonContainer>
    </SSidebarContainer>
  );
};

export default ProfileSidebar;
