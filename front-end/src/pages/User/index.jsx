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
      <Navbar />
      {/* <div style={{ display: "flex", width: "100vw" }}> */}
      <Grid container>
        <Grid item xs={2.5}>
          <ProfileSidebar />
        </Grid>
        <Grid item xs={9.5} style={{ alignItems: "center" }}>
          <CardBox>
            <Profile />
          </CardBox>
        </Grid>
      </Grid>

      {/* </div> */}
    </div>
  );
};

export default User;
