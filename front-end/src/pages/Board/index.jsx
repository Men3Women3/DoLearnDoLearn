import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import WriteButton from "../../components/WriteButton";
import BoardList from "../../components/BoardList";
import { Grid } from "@mui/material";
import SmallSchedule from "../../components/SmallSchedule";
import { SOutterBox, SInnerBox } from "./styles";
import { LoginStateContext } from "../../App";

// 확인주석
const Board = () => {
  const [list, setList] = useState([]); // 강의 정보 List
  const { isLogined, userInfo } = useContext(LoginStateContext);

  return (
    <Grid container>
      {/* navbar 부분 그리드 */}
      <Grid item xs={0} md={1.5} />
      <Grid item xs={12} md={9}>
        <Navbar />
      </Grid>
      <Grid item xs={0} md={1.5} />

      {isLogined ? (
        <>
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
        </>
      ) : (
        <>
          <Grid item xs={0} md={3} />
          <Grid item xs={12} md={6}>
            <SOutterBox>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <SearchBar setList={setList} />
                <SInnerBox>
                  <WriteButton />
                  <BoardList list={list} setList={setList} />
                </SInnerBox>
              </div>
            </SOutterBox>
          </Grid>
          <Grid item xs={0} md={3} />
        </>
      )}
    </Grid>
  );
};

export default Board;
