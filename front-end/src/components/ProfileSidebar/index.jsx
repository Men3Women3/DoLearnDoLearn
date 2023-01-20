import React from "react";
import {
  SSidebarContainer,
  SButtonContainer,
  SUserDeleteButtonContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import DeleteUserModal from "../../components/DeleteUserModal";

const ProfileSidebar = (props) => {
  const handleClickProfileTab = () => {
    props.setValue.profile.setIsProfileTabActive(true);
    props.setValue.schedule.setIsScheduleTabActive(false);
    // console.log(props.setValue.profile.setIsProfileTabActive(true));
    // console.log(props.setValue.profile.setIsProfileTabActive(true));
  };
  const handleClickScheduleTab = () => {
    props.setValue.profile.setIsProfileTabActive(false);
    props.setValue.schedule.setIsScheduleTabActive(true);
  };

  return (
    <SSidebarContainer>
      <SButtonContainer>
        <button className="profile-page" onClick={handleClickProfileTab}>
          프로필
        </button>
        <div className="page__background">&emsp;&emsp;&nbsp;&nbsp;</div>
      </SButtonContainer>
      <SButtonContainer>
        <button className="schedule-page" onClick={handleClickScheduleTab}>
          일정
        </button>
        <div className="page__background">&emsp;&nbsp;&nbsp;</div>
      </SButtonContainer>
      <SButtonContainer>
        <button className="undecided-lecture-page">미확정 강의</button>
        <div className="page__background">
          &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        </div>
      </SButtonContainer>
      <SButtonContainer>
        <button className="message-page">메시지함</button>
        <div className="page__background">
          &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
        </div>
      </SButtonContainer>
      <SUserDeleteButtonContainer>
        <FontAwesomeIcon className="user-delete" icon={faUserSlash} />
        <DeleteUserModal />
        {/* <button>회원탈퇴</button> */}
      </SUserDeleteButtonContainer>
    </SSidebarContainer>
  );
};

export default ProfileSidebar;
