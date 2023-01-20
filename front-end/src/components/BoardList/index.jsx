// UniBoard들을 가져다 보여주는 component

// 아래에 있는 요건 임시로 쓰던 강아지 thumbnail
// import thumbnail from "../../assets/images/thumbnail.png";
import React, { useEffect, useState } from "react";
import { SImg, SContainer, SUniDiv, SUniBoard } from "./styles";
import Paging from "../Paging";
import LectureModal from "../LectureModal";
import axios from "axios";

const BoardList = () => {
  // 아래 SERVER_URL은 임으로 넣은 URL
  // 나중에 Back에서 API 받아서 넣어주면 됨
  const SERVER_URL = "https://jsonplaceholder.typicode.com/photos";
  const [list, setList] = useState([
    //   {
    //     writer: "김싸피1",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피2",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피3",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피4",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피5",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피6",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피7",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피8",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피9",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
    //   {
    //     writer: "김싸피10",
    //     title: "git 사용법 좀 알려주세요..ㅠㅠ",
    //     summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
    //     start_time: "2023-01-16T13:00",
    //     end_time: "2023-01-16",
    //     deadline: "2023-01-15",
    //     thumbnail,
    //   },
  ]);

  // 게시판의 데이터를 받아오는 작업을 하는 부분(boardData)
  const boardData = async () => {
    const res = await axios.get(SERVER_URL);
    setList(res.data);
  };

  // 무한 재랜더링 되지 않도록 방지하는 부분
  useEffect(() => {
    boardData();
  }, []);

  return (
    <>
      <SContainer className="container">
        {list.map((item) => {
          return (
            <SUniDiv key={item.id}>
              <UniBoard
                // 우선은 예시 코드의 데이터들을 불러왔지만
                // 나중에 Back에서 API 받으면 필요한 부분들 수정
                className="uni-board"
                thumbnail={item.thumbnailUrl}
                writer={item.id}
                title={item.title}
                summary={item.title}
                time={item.title}
                deadline={item.title}
              />
            </SUniDiv>
          );
        })}
      </SContainer>
      <LectureModal></LectureModal>
      <Paging />
    </>
  );
};

// 개별 게시물 component
const UniBoard = (props) => {
  return (
    // <div className="board-body">
    // <div className="uni-board">
    <SUniBoard>
      <SImg src={props.thumbnail} />
      <h4>{props.writer}</h4>
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
      <p>{props.end_time}</p>
      <p>{props.deadline}</p>
      <LectureModal onClick={props.onClick} list={props.list}></LectureModal>
    </SUniBoard>
    // </div>
    // </div>
  );
};

export default BoardList;
