import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";

const WriteButton = () => {
  const navigate = useNavigate();

  function handleWriteBoard() {
    // 글쓰기 게시판으로 보내줭
    // 일단 main으로 가볼게
    navigate("/write");
  }

  return (
    <button>글쓰기</button>
    // <Button
    //   className="button-style"
    //   style={{
    //     float: "right",
    //     color: "black",
    //     borderColor: "black",
    //     marginRight: 10,
    //     boxShadow: "0px 0px 1px 0px #000000",
    //   }}
    //   onClick={handleWriteBoard}
    //   variant="outlined"
    //   startIcon={<CreateIcon />}
    // >
    //   글쓰기
    // </Button>
  );
};

export default WriteButton;
