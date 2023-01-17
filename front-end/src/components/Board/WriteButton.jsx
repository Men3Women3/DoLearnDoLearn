import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";

const WriteButton = () => {
  function handleWriteBoard() {
    // 글쓰기 게시판으로 보내줭
    return <Link to="/home" />;
  }

  return (
    <Button
      className="button-style"
      style={{
        float: "right",
        color: "black",
        borderColor: "black",
        marginRight: 10,
        boxShadow: "0px 0px 1px 0px #000000", // 그림자 효과..나중에 커서 올라가면 그림자 생기는 효과 주고싶음
      }}
      onClick={handleWriteBoard}
      variant="outlined"
      startIcon={<CreateIcon />}
    >
      글쓰기
    </Button>
    // <button onClick={handleWriteBoard}>글쓰기</button>
  );
};

export default WriteButton;
