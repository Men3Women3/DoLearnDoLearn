import React from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import WriteButton from "../../components/WriteButton";
import BoardList from "../../components/BoardList";

// import SmallSchedule from "../../components/SmallSchedule";

// import Pagination from "@mui/material/Pagination";
// import { SContainer } from "../../components/Board/styles";

const Board = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <WriteButton />
      <BoardList />
      {/* <SmallSchedule /> */}
      {/* <Pagination count={10} /> 요거 내가 그냥 직접 만든다..;; */}
    </>
  );
};

export default Board;
