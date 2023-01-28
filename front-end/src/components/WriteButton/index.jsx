import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SWriteButton } from "./styles";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginStateContext } from "../../App";

const WriteButton = () => {
  // context api를 통해 로그인 상태 받아오기
  const isLogined = useContext(LoginStateContext);

  const navigate = useNavigate();

  function handleWriteBoard() {
    // 로그인이 되어있으면 글쓰러 가고, 아니면 로그인창
    if (!isLogined) {
      navigate("/login");
    } else {
      navigate("/write");
    }
  }

  return (
    <SWriteButton onClick={handleWriteBoard}>
      <FontAwesomeIcon icon={faPencil} />
      &nbsp;&nbsp;글쓰기
    </SWriteButton>
  );
};

export default WriteButton;
