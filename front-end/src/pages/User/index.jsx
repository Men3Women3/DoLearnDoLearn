import React from "react";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import CardBox from "../../components/CardBox";
import Profile from "../../components/Profile/index";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import Calendar from "../../components/Calendar";

import Grid from "@mui/material/Grid";
import { useEffect } from "react";

const User = () => {
  const [isProfileTabActive, setIsProfileTabActive] = useState(true);
  const [isScheduleTabActive, setIsScheduleTabActive] = useState(false);
  const [isUnScheduleTabActive, setIsUnScheduleTabActive] = useState(false);
  const [isMessageTabActive, setIsMessageTabActive] = useState(false);

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
    } else if (e.target.className === "schedule-page") {
      setIsProfileTabActive(false);
      setIsScheduleTabActive(true);
      setIsUnScheduleTabActive(false);
      setIsMessageTabActive(false);
    } else if (e.target.className === "undecided-lecture-page") {
      setIsProfileTabActive(false);
      setIsScheduleTabActive(false);
      setIsUnScheduleTabActive(true);
      setIsMessageTabActive(false);
    } else if (e.target.className === "message-page") {
      setIsProfileTabActive(false);
      setIsScheduleTabActive(false);
      setIsUnScheduleTabActive(false);
      setIsMessageTabActive(true);
    }
  };

  const tabValue = {
    profile: { isProfileTabActive },
    schedule: { isScheduleTabActive },
    unSchedule: { isUnScheduleTabActive },
    message: { isMessageTabActive },
  };

  const setTabValue = {
    profile: { setIsProfileTabActive },
    schedule: { setIsScheduleTabActive },
    unSchedule: { setIsUnScheduleTabActive },
    message: { setIsMessageTabActive },
  };

  const [isProfileEditActive, setIsProfileEditActive] = useState(false);
  // useEffect(() => {
  //   console.log("바뀜!");
  //   console.log({ isProfileEditActive });
  // }, [isProfileEditActive]);
  // const getTextValue = () => {
  //   console.log("받은 값:");
  //   console.log(textValue);
  //   console.log("---------변경 후-------------------");
  //   setTextValue(props);
  //   console.log(textValue);
  // };

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
        <Grid item xs={3} md={2}>
          <ProfileSidebar
            handleTabValue={handleTabValue}
            isProfileTabActive={isProfileTabActive}
            isScheduleTabActive={isScheduleTabActive}
            isUnScheduleTabActive={isUnScheduleTabActive}
            isMessageTabActive={isMessageTabActive}
          />
        </Grid>
        <Grid item xs={9} md={7}>
          <CardBox>
            {isProfileTabActive && !isProfileEditActive && <Profile />}
            {isProfileTabActive && isProfileEditActive && <ProfileEdit />}
            {isScheduleTabActive && <Calendar />}
            {/* {isUnScheduleTabActive && <  Calendar />} */}
            {/* {isScheduleTabActive && <  Calendar />} */}

            {/* {isProfileEditActive ? (
              <ProfileEdit
                value={isProfileEditActive}
                setValue={setIsProfileEditActive}
              />
            ) : (
              <Profile
                value={isProfileEditActive}
                setValue={setIsProfileEditActive}
              />
            )} */}
          </CardBox>
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
