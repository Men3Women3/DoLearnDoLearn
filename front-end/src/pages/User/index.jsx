import React from "react";
import Navbar from "../../components/Navbar";
import CardBox from "../../components/CardBox";
// import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile/index";
import ProfileSidebar from "../../components/ProfileSidebar";

import Grid from "@mui/material/Grid";

const User = () => {
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
            <Profile />
          </CardBox>
        </Grid>
        <Grid item xs={0} md={1.5} />
      </Grid>
    </div>
  );
};

export default User;
