import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import WriteButton from "../../components/WriteButton";
import BoardList from "../../components/BoardList";
import { Grid } from "@mui/material";
import SmallSchedule from "../../components/SmallSchedule";
import { SOutterBox, SInnerBox } from "./styles";
import { LoginStateContext } from "../../App";

const Board = () => {
  const { isLogined } = useContext(LoginStateContext);

  return (
    <>
      <Navbar />
      <Grid container>
        {isLogined ? (
          <>
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
          </>
        ) : (
          <>
            <Grid item xs={0} md={3} />
            <Grid item xs={12} md={6}>
              <SOutterBox>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <SearchBar />
                  <SInnerBox>
                    <WriteButton />
                    <BoardList />
                  </SInnerBox>
                </div>
              </SOutterBox>
            </Grid>
            <Grid item xs={0} md={3} />
          </>
        )}
      </Grid>
    </>
  );
};

export default Board;
