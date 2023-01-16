// UniBoard들을 가져다 보여주는 component

import React, { useState } from "react";
import UniBoard from "../Board/UniBoard";
import thumbnail from "../../assets/images/thumbnail.png";
import { SBoard, SContainer } from "./styles";
// import data from "./data.js";

const BoardList = () => {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit; // 게시물의 위치 설정
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
      {list.map((item, idx) => {
        return (
          <SContainer>
            <UniBoard
              thumbnail={item.thumbnail}
              writer={item.writer}
              title={item.title}
              summary={item.summary}
              time={item.end_time}
              deadline={item.deadline}
            />
          </SContainer>
        );
      })}
    </>
  );
};

export default BoardList;
