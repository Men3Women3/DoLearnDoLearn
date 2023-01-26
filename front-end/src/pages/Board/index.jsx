import React from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import WriteButton from "../../components/WriteButton";
import BoardList from "../../components/BoardList";
import { Grid } from "@mui/material";
import SmallSchedule from "../../components/SmallSchedule";
import { SOutterBox, SInnerBox } from "./styles";

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

        <Grid item xs={0} md={1.5} />
        <Grid item xs={12} md={9}>
          <SOutterBox>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SearchBar />
              <SInnerBox>
                <WriteButton />
                <BoardList />
              </SInnerBox>
            </div>
            <SmallSchedule />
          </SOutterBox>
        </Grid>
        <Grid item xs={0} md={1.5} />
      </Grid>
    </>
  );
};

export default Board;
