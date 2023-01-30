import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import WriteButton from "../../components/WriteButton";
import BoardList from "../../components/BoardList";
import { Grid } from "@mui/material";
import SmallSchedule from "../../components/SmallSchedule";
import { SOutterBox, SInnerBox } from "./styles";

const Board = () => {
  const [list, setList] = useState([]); // 강의 정보 List

  return (
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
            <SearchBar setList={setList} />
            <SInnerBox>
              <WriteButton />
              <BoardList list={list} setList={setList} />
            </SInnerBox>
          </div>
          <SmallSchedule />
        </SOutterBox>
      </Grid>
      <Grid item xs={0} md={1.5} />
    </Grid>
  );
};

export default Board;
