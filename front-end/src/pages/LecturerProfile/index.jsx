import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import LecProfile from "../../components/LectProfile";
import { SContainer, SDiv } from "./styles";

const LecturerProfile = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={0} md={1.5} />
        <Grid item xs={12} md={9}>
          <Navbar />
        </Grid>
        <Grid item xs={0} md={1.5} />
      </Grid>
      <SContainer>
        <SDiv>
          {/* <Grid container> */}
          {/* <Grid item xs={0} md={1.5} /> */}
          {/* <Grid item xs={12} md={9}> */}
          <LecProfile />
          {/* </Grid> */}
          {/* <Grid item xs={0} md={1.5} /> */}
          {/* </Grid> */}
        </SDiv>
      </SContainer>
    </>
  );
};

export default LecturerProfile;
