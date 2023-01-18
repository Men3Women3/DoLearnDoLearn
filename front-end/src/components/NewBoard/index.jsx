import React, { useState } from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Textarea, Input } from "@mui/joy";
import CardBox from "../CardBox";
import {
  SContainer,
  STitle,
  SBoardTitle,
  SSummary,
  SDetail,
  SButton,
} from "../../pages/WriteBoard/styles";
import { useNavigate } from "react-router";

const NewBoard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // 강의의 제목
  const [participant, setParticipant] = useState(0); // 참가인원(5명까지만!)
  const [summary, setSummary] = useState(""); // 강의 요약
  const [detail, setDetail] = useState(""); // 강의 상세

  const handleRegister = () => {
    // 까꿍~ 여기서 등록버튼 눌렀을 때 어떤 작업을 해야 하는지 작성하세용
    // 저장 됐으면 강의 목록 페이지로 가줭
    console.log(title);
    console.log(participant);
    console.log(summary);
    console.log(detail);
    // 요 위에는 데이터 잘 받아지나 확인하려구 넣었어용 =================
    navigate("/board");
  };

  // 제목 저장해줭
  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  // 참여 인원 저장해줭
  const handlePartChange = (e) => {
    setParticipant(e.currentTarget.value);
  };

  // 요약 저장해줭
  const handleSummaryChange = (e) => {
    setSummary(e.currentTarget.value);
  };

  // 상세 저장해줭
  const handleDetailChange = (e) => {
    setDetail(e.currentTarget.value);
  };

  return (
    <CardBox>
      <SContainer>
        {/* 1. 제목 */}
        <STitle>
          <h1>공부방을 만들어요</h1>
        </STitle>

        {/* 2. 구분선 */}
        {/* 구분선은 걍 제목 margin-bottom에 선 그었어용 */}

        {/* 3. 사용자 지정 제목 */}
        <SBoardTitle>
          <div style={{ display: "inline-block" }}>제목</div>
          <Input
            style={{ display: "inline-block" }}
            value={title}
            placeholder="제목을 입력하세요"
            onChange={handleTitleChange}
          />
        </SBoardTitle>

        {/* 4. 참여 인원 */}
        <div className="people-number">
          <h3>참여 인원</h3>
          {/* 문제: 키보드로 입력시 5가 넘어감 */}
          <Input
            type="number"
            defaultValue={participant}
            required={"0-9"} // 키보드로 숫자만 입력할 수 있도록!
            slotProps={{
              input: {
                min: 1,
                max: 5,
                step: 1,
              },
            }}
            onChange={handlePartChange}
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
          <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="one"
              name="radio-buttons-group"
            >
              <FormControlLabel value="one" control={<Radio />} label="1시간" />
              <FormControlLabel value="two" control={<Radio />} label="2시간" />
            </RadioGroup>
          </FormControl>
        </div>

        {/* 7. 강의 summary */}
        {/* 1) 글자수 제한 100 거는 방법 찾아내고 */}
        <SSummary>
          <h3>요청내용 요약</h3>
          <Textarea
            defaultValue={summary}
            color="warning"
            minRows={2}
            size="md"
            placeholder="원하는 강의에 대해 간략하게 설명해주세요! 공부방 목록에 우선으로 표시됩니다"
            onChange={handleSummaryChange}
          />
        </SSummary>

        {/* 8. 강의 요청 상세 */}
        {/* 1) 글자수 제한 500 거는 방법 찾아내고 */}
        <SDetail>
          <h3>요청내용 상세</h3>
          <Textarea
            defaultValue={detail}
            color="warning"
            minRows={5}
            size="md"
            placeholder="강의에 대해 바라는 점을 자유롭게 작성해주세요"
            onChange={handleDetailChange}
          />
        </SDetail>

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
