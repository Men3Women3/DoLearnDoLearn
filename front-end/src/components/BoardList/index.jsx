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
  // 아래 list는 board에 들어갈 강의 정보들을 담는 리스트
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
                // thumbnail={item.thumbnailUrl}
                // writer={item.id}
                // title={item.title}
                // summary={item.title}
                // time={item.title}
                // deadline={item.title}
                // detail={item.detail}
                // sttime={item.start_time}
                // props drilling이 불가피한데 상태관리 라이브러리를 사용하지 않는 경우라면
                // 아래와 같이 data를 통째로 넘기는게 better!
                data={item}
              />
            </SUniDiv>
          );
        })}
      </SContainer>
      <Paging />
    </>
  );
};

// 개별 게시물 component
const UniBoard = ({ data }) => {
  return (
    // <div className="board-body">
    // <div className="uni-board">
    // 위에서 (BoardList에서) 받아온 데이터를 props로 쓰고 있는데,
    // 이걸 다시 모달로 보내려고 코드 중복 사용...
    // 맞는지 모르겠누..
    <SUniBoard>
      <SImg src={data.thumbnailUrl} />
      <h4 writer={data.writer}>{data.id}</h4>
      <h3 titl={data.title}>{data.title}</h3>
      <p summary={data.summary}>{data.title}</p>
      <p end_time={data.end_time}>{data.title}</p>
      <p deadline={data.deadline}>{data.title}</p>
      {/* onClick일 때 data.onClick을 받는게 아니라(그런건 없으니까) 오히려 data를 내려 보내주고
      받은 데이터를 기반으로 나머지 작업은 LectureModal 컴포넌트에서 해결하는거임!!!! */}
      {/* <LectureModal onClick={data.onClick} list={data.list}></LectureModal> */}
      {/* <LectureModal onClick={data.onClick} data={data}></LectureModal> */}
      <LectureModal data={data}></LectureModal>
    </SUniBoard>
    // </div>
    // </div>
  );
};

export default BoardList;
