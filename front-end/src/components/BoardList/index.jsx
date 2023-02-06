import React, { useContext, useEffect, useState } from "react";
// import createContext from "react";
import { SContainer, SUniDiv } from "./styles";
import Pagination from "../Pagination";
import UniBoard from "../UniBoard";
import { boardListAPI } from "../../utils/api/boardAPI";
// import { useLocation } from "react-router";
import { BoardDataContext } from "../../App";
// import Timer from "../Timer";
// export const Flag = createContext();

const BoardList = () => {
  const { flag, list, setList } = useContext(BoardDataContext);
  // const location = useLocation();

  // 이 구간은 Pagination을 위해 필요한 부분 ==============
  const limit = 6; // 페이지 당 게시물 수
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offset = (page - 1) * limit; // 첫 게시물의 위치
  // ======================================================

  // useEffect(() => {
  //   if (list.length === 0) return;
  //   // 게시판의 데이터를 받아오는 작업을 하는 부분(boardList)
  //   if (location.state?.isWritten === 'true') {
  //     console.log(location);
  //     boardListAPI(setList);
  //     // location.state.isWritten = "false";
  //   }
  // }, [flag]);

  useEffect(() => {
    // if (list.length === 0) return;
    boardListAPI(setList);
  }, [flag]);

  return (
    <>
      {/* // 아래 타이머는 나중에 실시간 강의 화면에 추가될 것 */}
      {/* <Timer /> */}
      <SContainer className="container">
        {/* // offset으로 slicing해서 limit 만큼만 한 화면에 표시 */}
        {list.length > 0
          ? list.slice(offset, offset + limit).map((data) => {
              return (
                <SUniDiv key={data.id}>
                  <UniBoard className="uni-board" data={data} />
                </SUniDiv>
              );
            })
          : ""}
      </SContainer>
      {list.length < 7 ? null : (
        <Pagination
          total={list.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default BoardList;
