import React from "react";
import Navbar from "../../components/Navbar";
import BoardList from "../../components/Board/BoardList";
import Search from "../../components/Board/Search";
import WriteButton from "../../components/Board/WriteButton";
// import SmallSchedule from "../../components/SmallSchedule";

// import Pagination from "@mui/material/Pagination";
// import { SContainer } from "../../components/Board/styles";

const Board = () => {
  return (
    <>
      <Navbar />
      <Search />
      <WriteButton />
      <BoardList />
      {/* <SmallSchedule /> */}
      {/* <Pagination count={10} /> 요거 내가 그냥 직접 만든다..;; */}
    </>
  );
};

export default Board;
