// 단일 보드 component

import { SImg } from "./styles";

const UniBoard = (props) => {
  console.log(props);
  return (
    <div className="board-container">
      <div className="uni-board">
        <SImg src={props.thumbnail} />
        <h3>{props.writer}</h3>
        <p>{props.title}</p>
        <p>{props.summary}</p>
        <p>{props.end_time}</p>
        <p>{props.deadline}</p>
      </div>
    </div>
  );
};

export default UniBoard;
