import React from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import WriteButton from '../../components/WriteButton';
import BoardList from '../../components/BoardList';
import { Grid } from '@mui/material';
import SmallScheduleToggle from '../../components/SmallScheduleToggle';

const Board = () => {
  return (
    <>
      <Grid container>
        {/* navbar 부분 그리드 */}
        <Grid item xs={0} md={1.5} />
        <Grid item xs={12} md={9}>
          <Navbar />
          <SearchBar />
          <WriteButton />
        </Grid>

        {/* content 부분 그리드 설정 */}
        <Grid item xs={3} />
        <Grid item xs={6}>
          <BoardList />
        </Grid>
        <SmallScheduleToggle />
      </Grid>
    </>
  );
};

export default Board;
