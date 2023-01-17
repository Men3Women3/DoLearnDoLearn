import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import BoardList from "../../components/Board/BoardList";
import Search from "../../components/Board/Search";
import WriteButton from "../../components/Board/WriteButton";
import SmallSchedule from "../../components/SmallSchedule";

import Pagination from "@mui/material/Pagination";
import { SContainer } from "../../components/Board/styles";

const Board = () => {
  return (
    <>
      <Navbar />
      <Search />
      <WriteButton />
      <p>뽀드입니다</p>
      <BoardList />
      <SmallSchedule />
      <Pagination count={10} />
    </>
  );
};

export default Board;
