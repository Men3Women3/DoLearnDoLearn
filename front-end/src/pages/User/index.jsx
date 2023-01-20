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
  const [isProfileEditActive, setIsProfileEditActive] = useState(false);
  useEffect(() => {
    console.log("바뀜!");
    console.log({ isProfileEditActive });
  }, [isProfileEditActive]);
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
          <ProfileSidebar />
        </Grid>
        <Grid item xs={9} md={7}>
          <CardBox>
            <Calendar />
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
