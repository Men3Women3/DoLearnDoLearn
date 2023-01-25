import React from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import WriteButton from "../../components/WriteButton";
import BoardList from "../../components/BoardList";
import { Grid } from "@mui/material";
// import SmallScheduleToggle from "../../components/SmallScheduleToggle";
import SmallSchedule from "../../components/SmallSchedule";

const Board = () => {
  return (
    <>
      <Grid container>
        {/* navbar 부분 그리드 */}
        <Grid item xs={0} md={1.5} />
        <Grid item xs={12} md={9}>
          <Navbar />
        </Grid>
        <Grid item xs={0} md={1.5} />

        <div
          style={{
            width: "500px",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <SearchBar />
          <WriteButton />
          <BoardList />
        </div>

        {/* <SmallScheduleToggle /> */}
        <SmallSchedule />
      </Grid>
    </>
  );
};

export default Board;
