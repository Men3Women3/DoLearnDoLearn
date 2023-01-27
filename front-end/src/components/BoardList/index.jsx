import React, { useEffect, useState } from "react";
import { SContainer, SUniDiv } from "./styles";
import Pagination from "../Pagination";
import axios from "axios";
import UniBoard from "../UniBoard";
// import thumbnail from "../../assets/images/exercise.svg";

const BoardList = () => {
  // const SERVER_URL = "https://jsonplaceholder.typicode.com/photos";
  const SERVER_URL = "http://localhost:8080";

  // 이 구간은 Pagination을 위해 필요한 부분 ==============
  const limit = 6; // 페이지 당 게시물 수
  const [list, setList] = useState([
    // {
    //   id: 1,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
    // {
    //   id: 2,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
    // {
    //   id: 3,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
    // {
    //   id: 4,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
    // {
    //   id: 5,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
    // {
    //   id: 6,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
    // {
    //   id: 7,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
    // {
    //   id: 8,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
    // {
    //   id: 9,
    //   thumbnailUrl: thumbnail,
    //   title: "WebRTC 도움 부탁드립니다~",
    //   summary: "React로 WebRTC 구현하는 법 알려주세요!",
    //   deadline: "01.14 - 01.21",
    //   classTime: "01.22 14:00 - 16:00",
    // },
  ]); // 강의 정보 List
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offset = (page - 1) * limit; // 첫 게시물의 위치
  // ======================================================

  // 게시판의 데이터를 받아오는 작업을 하는 부분(boardData)
  const boardData = async () => {
    const res = await axios.get(`${SERVER_URL}/board/list`);
    setList(res.data.response);
  };

  useEffect(() => {
    boardData();
  }, []);

  console.log("여기", list);

  return (
    <>
      <SContainer className="container">
        {/* // offset으로 slicing해서 limit 만큼만 한 화면에 표시 */}
        {list.slice(offset, offset + limit).map((data) => {
          return (
            <SUniDiv key={data.id}>
              <UniBoard className="uni-board" data={data} />
            </SUniDiv>
          );
        })}
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
