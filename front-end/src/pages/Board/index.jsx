import React, { useState } from 'react';
import BoardList from '../../components/Board/BoardList';
import Navbar from '../../components/Navbar';
import Search from '../../components/Board/Search';
import WriteButton from '../../components/Board/WriteButton';
// import SmallSchedule from '../../components/SmallSchedule';

// 왜 안되지..ㅇㅅㅇ
// import { Pagination } from '@mui/material';

const Board = () => {
  return (
    <>
      <Navbar />
      <Search />
      <WriteButton />
      <div>
        <p>뽀드입니다</p>
        <BoardList />
      </div>
      {/* <Pagination count={10} /> */}
    </>
  );
};

export default Board;
