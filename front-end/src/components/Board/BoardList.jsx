// UniBoard들을 가져다 보여주는 component

import thumbnail from "../../assets/images/thumbnail.png";
import React, { useState } from "react";
import { SImg, SContainer } from "./styles";
import Paging from "../Paging";
import LectureModal from "../LectureModal";

const BoardList = () => {
  const [list, setList] = useState([
    {
      writer: "김싸피1",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피2",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피3",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피4",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피5",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피6",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피7",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피8",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피9",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
    {
      writer: "김싸피10",
      title: "git 사용법 좀 알려주세요..ㅠㅠ",
      summary: "버전관리, branch 이용 방법 배우고 싶어요...!!",
      start_time: "2023-01-16T13:00",
      end_time: "2023-01-16",
      deadline: "2023-01-15",
      thumbnail,
    },
  ]);

  return (
    <>
      <SContainer className="container">
        {list.map((item) => {
          return (
            <UniBoard
              className="uni-board"
              thumbnail={item.thumbnail}
              writer={item.writer}
              title={item.title}
              summary={item.summary}
              time={item.end_time}
              deadline={item.deadline}
            />
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
    <div className="board-container">
      <div className="uni-board">
        <SImg src={props.thumbnail} />
        <h4>{props.writer}</h4>
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
        <p>{props.end_time}</p>
        <p>{props.deadline}</p>
      </div>
    </div>
  );
};

export default BoardList;
