import React from "react"
import {
  SSidebarContainer,
  SButtonContainer,
  SUserDeleteButtonContainer,
} from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faUserSlash } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons"
import { faCalendarXmark } from "@fortawesome/free-regular-svg-icons"
import DeleteUserModal from "../../components/DeleteUserModal"

const ProfileSidebar = (props) => {
  return (
    <SSidebarContainer>
      {/* 프로필 탭 */}
      <SButtonContainer>
        <button className="profile-page" onClick={props.handleTabValue}>
          <FontAwesomeIcon icon={faUser} />
          &nbsp;프로필
        </button>
        {props.isProfileTabActive && (
          <div className="page__background">
            &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
          </div>
        )}
      </SButtonContainer>
      {/* 일정 탭 */}
      <SButtonContainer>
        <button className="schedule-page" onClick={props.handleTabValue}>
          <FontAwesomeIcon icon={faCalendarCheck} />
          &nbsp;일정
        </button>
        {props.isScheduleTabActive && (
          <div className="page__background">
            &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        )}
      </SButtonContainer>
      {/* 미확정 강의 탭 */}
      <SButtonContainer>
        <button
          className="undecided-lecture-page"
          onClick={props.handleTabValue}
        >
          <FontAwesomeIcon icon={faCalendarXmark} />
          &nbsp;미확정 강의
        </button>
        {props.isUnScheduleTabActive && (
          <div className="page__background">
            &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        )}
      </SButtonContainer>
      {/* 메시지함 탭 */}
      <SButtonContainer>
        <button className="message-page" onClick={props.handleTabValue}>
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp;메시지함
        </button>
        {props.isMessageTabActive && (
          <div className="page__background">
            &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
          </div>
        )}
      </SButtonContainer>
      {/* 회원탈퇴 버튼 */}
      <SUserDeleteButtonContainer>
        <DeleteUserModal />
      </SUserDeleteButtonContainer>
    </SSidebarContainer>
  )
}

export default ProfileSidebar
