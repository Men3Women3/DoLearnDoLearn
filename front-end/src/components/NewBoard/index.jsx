import React, { useState } from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import CardBox from "../CardBox";
import { SContainer, STitle, SButton } from "../../pages/WriteBoard/styles";

const NewBoard = () => {
  const [title, setTitle] = useState("");
  const [participant, setParticipant] = useState(0);
  const [summary, setSummary] = useState("");
  const [detail, setDetail] = useState("");

  const handleRegister = () => {
    // 까꿍~ 여기서 등록버튼 눌렀을 때 어떤 작업을 해야 하는지 작성하세용
  };

  return (
    <CardBox>
      <SContainer>
        <ss />
        {/* 1. 제목 */}
        <STitle>
          <h1>공부방을 만들어요</h1>
        </STitle>

        {/* 2. 구분선 */}
        {/* 구분선은 걍 제목 margin-bottom에 선 그었어용 */}

        {/* 3. 사용자 지정 제목 */}
        <div className="custom-title">
          <h3>제목</h3>
          <Input value={title} placeholder="제목을 입력하세요" />
        </div>

        {/* 4. 참여 인원 */}
        <div className="people-number">
          <h3>참여 인원</h3>
          {/* 문제: 직접 키보드 입력 못하게 막아야하고, setParticipant 어떻게 쓸지.. */}
          <Input
            type="number"
            defaultValue={participant}
            slotProps={{
              input: {
                min: 1,
                max: 5,
                step: 1,
              },
            }}
          />
        </div>

        {/* 5. 모집 기간(달력 넣어줭) */}
        <div className="recruit-period">
          <h3>모집 기간</h3>
          <Input type="date" />
          <Input type="date" />
        </div>

        {/* 6. 강의 일시(달력 + 시간 + 라디오 버튼) */}
        <div className="lecture-time">
          <h3>강의 일시</h3>
          <Input type="date" />
          <Input type="time" />
        </div>

        {/* 7. 강의 summary */}
        {/* 1) 글자수 제한 100 거는 방법 찾아내고 */}
        {/* 2) input, textarea 등등 뒤져서 사이즈 임의로 바꿀 수 없게 할 것 */}
        {/* 3) 당연히 반응형으로 */}
        <div className="request-summary">
          <h3>요청내용 요약</h3>
          <Input
            value={summary}
            placeholder="이거 input으로 말고 textarea로 하거나 사이즈 고정해보자"
          />
        </div>

        {/* 8. 강의 요청 상세 */}
        {/* 1) 글자수 제한 500 거는 방법 찾아내고 */}
        {/* 2) input, textarea 등등 뒤져서 사이즈 임의로 바꿀 수 없게 할 것 */}
        {/* 3) 당연히 반응형으로 */}
        <div className="request-detail">
          <h3>요청내용 상세</h3>
          <Input
            value={detail}
            placeholder="이거 input으로 말고 textarea로 하거나 사이즈 고정해보자"
          />
        </div>

        {/* 9. 등록(작성) 버튼 */}
        <SButton>
          <Button
            style={{ display: "block", margin: "auto" }}
            color="warning"
            onClick={handleRegister}
            variant="outlined"
          >
            등록
          </Button>
        </SButton>
      </SContainer>
    </CardBox>
  );
};

export default NewBoard;
