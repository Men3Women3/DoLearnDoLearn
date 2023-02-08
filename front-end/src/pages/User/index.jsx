import React, { useContext, useEffect } from "react";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile/index";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import Calendar from "../../components/Calendar";
import UnScheduleLecture from "../../components/UnScheduleLecture";

import Grid from "@mui/material/Grid";
import Message from "../../components/Message";
import { useLocation } from "react-router";
import { LoginStateContext } from "../../App";

// const checkMoveToMessageTab = (target, location) => {
//   // 넘겨받은 상태가 메시지인 경우
//   if (location.state === "message") {
//     // 메인에서 요청을 보내고 있으면 false
//     if (target === "main") {
//       return false;
//     }
//     // 메인이 아니라면(메시지) true
//     else if (target === "message") {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   // 넘겨받은 상태가 메시지가 아닌 경우
//   else {
//     // 메인에서 요청을 보내고 있으면 true
//     if (target === "main") {
//       return true;
//     }
//     // 메인이 아니라면(메시지) false
//     else {
//       return false;
//     }
//   }
// };

const User = () => {
  const location = useLocation();
  const getUserInfo = useContext(LoginStateContext);

  const [isProfileTabActive, setIsProfileTabActive] = useState(true);
  const [isScheduleTabActive, setIsScheduleTabActive] = useState(false);
  const [isUnScheduleTabActive, setIsUnScheduleTabActive] = useState(false);
  const [isMessageTabActive, setIsMessageTabActive] = useState(false);
  const [isProfileEditActive, setIsProfileEditActive] = useState(false);

  // 처음 렌더링 될 때
  // useEffect(() => {
  //   setIsProfileTabActive(checkMoveToMessageTab("main", location));
  //   setIsScheduleTabActive(checkMoveToMessageTab("schedule", location));
  //   setIsUnScheduleTabActive(checkMoveToMessageTab("unSchedule", location));
  //   setIsMessageTabActive(checkMoveToMessageTab("message", location));
  // }, [location.state]);

  // ProfileSidebar에 내려줄 함수
  // ProfileSidebar에 있는 4개의 탭 중 하나를 클릭하면 그 탭의 클래스네임을 매칭해서
  // state를 변경하는 함수
  // 이 함수를 내려주면 ProfileSidebar에 state들만 내려주면 된다. 상태관리는 이 함수가 맡는다.
  const handleTabValue = (e) => {
    console.log(e.target);
    if (e.target.className.includes("profile-page")) {
      setIsProfileTabActive(true);
      setIsScheduleTabActive(false);
      setIsUnScheduleTabActive(false);
      setIsMessageTabActive(false);
      setIsProfileEditActive(false);
    } else if (e.target.className.includes("schedule-page")) {
      setIsProfileTabActive(false);
      setIsScheduleTabActive(true);
      setIsUnScheduleTabActive(false);
      setIsMessageTabActive(false);
      setIsProfileEditActive(false);
    } else if (e.target.className.includes("undecided-lecture-page")) {
      setIsProfileTabActive(false);
      setIsScheduleTabActive(false);
      setIsUnScheduleTabActive(true);
      setIsMessageTabActive(false);
      setIsProfileEditActive(false);
    } else if (e.target.className.includes("message-page")) {
      setIsProfileTabActive(false);
      setIsScheduleTabActive(false);
      setIsUnScheduleTabActive(false);
      setIsMessageTabActive(true);
      setIsProfileEditActive(false);
    }
  };

  // 프로필 변경 / 완료 버튼 클릭시 상태 변경 함수
  const handleProfileEditBtn = (e) => {
    setIsProfileEditActive(!isProfileEditActive);
  };

  // useEffect(() => {
  //   console.log("바뀜!");
  //   console.log({ isProfileEditActive });
  // }, [isProfileEditActive]);

  return (
    <div>
      <Grid container>
        {/* navbar 부분 그리드 설정 */}
        <Grid item xs={0} md={1.5} />
        <Grid item xs={12} md={9}>
          <Navbar />
        </Grid>
        <Grid item xs={0} md={1.5} />

        {/* content 부분 그리드 설정 */}
        <Grid item xs={0} md={1.5} />
        <Grid item xs={2} md={1.5}>
          <ProfileSidebar
            handleTabValue={handleTabValue}
            isProfileTabActive={isProfileTabActive}
            isScheduleTabActive={isScheduleTabActive}
            isUnScheduleTabActive={isUnScheduleTabActive}
            isMessageTabActive={isMessageTabActive}
            isProfileEditActive={isProfileEditActive}
          />
        </Grid>
        <Grid item xs={10} md={7.5}>
          {isProfileTabActive && !isProfileEditActive && (
            <Profile
              handleProfileEditBtn={handleProfileEditBtn}
              // isProfileEditActive={isProfileEditActive}
              user={getUserInfo.userInfo}
              userState="me"
            />
          )}
          {isProfileTabActive && isProfileEditActive && (
            <ProfileEdit
              handleProfileEditBtn={handleProfileEditBtn}
              isProfileEditActive={isProfileEditActive}
            />
          )}
          {isScheduleTabActive && <Calendar />}
          {isUnScheduleTabActive && <UnScheduleLecture />}
          {isMessageTabActive && <Message />}
        </Grid>
        <Grid item xs={0} md={1.5} />
      </Grid>
    </div>
  );
};

export default User;
