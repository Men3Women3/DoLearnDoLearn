import React from "react";
import { useNavigate } from "react-router-dom";
import { SWriteButton } from "./styles";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WriteButton = () => {
  const navigate = useNavigate();

  function handleWriteBoard() {
    // 글쓰기 게시판으로 보내줭
    // 일단 main으로 가볼게
    navigate("/write");
  }

  return (
    <SWriteButton onClick={handleWriteBoard}>
      <FontAwesomeIcon icon={faPencil} />
      &nbsp;&nbsp;글쓰기
    </SWriteButton>
  );
};

export default WriteButton;
