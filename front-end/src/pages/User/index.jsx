import React from "react";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import CardBox from "../../components/CardBox";
import ProfileCardBox from "../../components/ProfileCardBox";
import Profile from "../../components/Profile/index";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import Calendar from "../../components/Calendar";
import UnScheduleLecture from "../../components/UnScheduleLecture";

import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const User = () => {
  const [isProfileTabActive, setIsProfileTabActive] = useState(true);
  const [isScheduleTabActive, setIsScheduleTabActive] = useState(false);
  const [isUnScheduleTabActive, setIsUnScheduleTabActive] = useState(false);
  const [isMessageTabActive, setIsMessageTabActive] = useState(false);
  const [isProfileEditActive, setIsProfileEditActive] = useState(false);
  const navigate = useNavigate();

  // localStorage에 엑세스 토큰의 존재여부를 확인하여 로그인 / 비로그인 상태를 구분
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     navigate("/login");
  //   }
  // }, []);

  // ProfileSidebar에 내려줄 함수
  // ProfileSidebar에 있는 4개의 탭 중 하나를 클릭하면 그 탭의 클래스네임을 매칭해서
  // state를 변경하는 함수
  // 이 함수를 내려주면 ProfileSidebar에 state들만 내려주면 된다. 상태관리는 이 함수가 맡는다.
  const handleTabValue = (e) => {
    if (e.target.className === "profile-page") {
      setIsProfileTabActive(true);
      setIsScheduleTabActive(false);
      setIsUnScheduleTabActive(false);
      setIsMessageTabActive(false);
      setIsProfileEditActive(false);
    } else if (e.target.className === "schedule-page") {
      setIsProfileTabActive(false);
      setIsScheduleTabActive(true);
      setIsUnScheduleTabActive(false);
      setIsMessageTabActive(false);
      setIsProfileEditActive(false);
    } else if (e.target.className === "undecided-lecture-page") {
      setIsProfileTabActive(false);
      setIsScheduleTabActive(false);
      setIsUnScheduleTabActive(true);
      setIsMessageTabActive(false);
      setIsProfileEditActive(false);
    } else if (e.target.className === "message-page") {
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
            <ProfileCardBox>
              <Profile
                handleProfileEditBtn={handleProfileEditBtn}
                isProfileEditActive={isProfileEditActive}
              />
            </ProfileCardBox>
          )}
          {isProfileTabActive && isProfileEditActive && (
            <ProfileCardBox>
              <ProfileEdit
                handleProfileEditBtn={handleProfileEditBtn}
                isProfileEditActive={isProfileEditActive}
              />
            </ProfileCardBox>
          )}
          {isScheduleTabActive && (
            <CardBox>
              <Calendar />
            </CardBox>
          )}
          {isUnScheduleTabActive && (
            <CardBox>
              <UnScheduleLecture />
            </CardBox>
          )}
          {/* {isScheduleTabActive && <  Calendar />} */}
        </Grid>
        <Grid item xs={0} md={1.5} />
      </Grid>
    </div>
  );
};

export default User;

// {
/* {aa && <Profile />}
{bb && <Profile />}
{cc && <Profile />}
{aa && <Profile />}
{aa && <Profile />} */
// }
// {
/* <ProfileEdit /> */
// }
