import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CardBox from "../CardBox";
import {
  SContainer,
  STitle,
  SBoardTitle,
  STitleInput,
  SParticipant,
  SParticipantInput,
  SRecruit,
  SRecruitInput,
  SLecture,
  SLectureInput,
  STimeInput,
  SSummary,
  SDetail,
  SDetailText,
  SRegistButton,
  SButton,
  SLimit,
  SSummaryText,
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
          <h3>강의 제목</h3>
          <STitleInput
            value={title}
            placeholder="제목을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
          ></STitleInput>
        </SBoardTitle>

        {/* 4. 참여 인원 */}
        <SParticipant>
          <h3>참여 인원</h3>
          {/* 문제: 키보드로 입력시 5가 넘어감 */}
          <SParticipantInput
            type="number"
            defaultValue={participant}
            pattern={"0-9"}
            min={1}
            max={5}
            onChange={(e) => setParticipant(e.target.value)}
          ></SParticipantInput>
          <h5>명</h5>
        </SParticipant>

        {/* 5. 모집 기간(달력 넣어줭) */}
        <SRecruit>
          <h3>모집 기간</h3>
          {/* 요거는 시작날짜 */}
          <SRecruitInput type="date"></SRecruitInput>
          <h5>~</h5>
          {/* 요거는 마감날짜 */}
          <SRecruitInput type="date"></SRecruitInput>
        </SRecruit>

        {/* 6. 강의 일시(달력 + 시간 + 라디오 버튼) */}
        <SLecture>
          <h3>강의 일시</h3>
          <SLectureInput type="date"></SLectureInput>
          <h5>&nbsp;&nbsp;</h5>
          <STimeInput type="time"></STimeInput>

          {/* 라디오 버튼 넣기 */}
          {/* <fieldset>
            <label>
              <input type="radio" name="time" value="one" checked />
              <span>1시간</span>
            </label>

            <label>
              <input type="radio" name="time" value="two" />
              <span>2시간</span>
            </label>
          </fieldset> */}
          {/* <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="one"
              name="radio-buttons-group"
            >
              <FormControlLabel value="one" control={<Radio />} label="1시간" />
              <FormControlLabel value="two" control={<Radio />} label="2시간" />
            </RadioGroup>
          </FormControl> */}
        </SLecture>

        {/* 7. 강의 summary */}
        {/* 1) 글자수 제한 100 거는 방법 찾아내고 */}
        <SSummary>
          <h3>내용 요약</h3>
          <SSummaryText
            defaultValue={summary}
            maxLength={100}
            // minRows={2}
            placeholder="원하는 강의에 대해 요약해서 작성해주세요. 작성하신 내용은 공부방 목록에 표시됩니다"
            onChange={(e) => setSummary(e.target.value)}
          ></SSummaryText>
        </SSummary>
        <SLimit>{summary.length}/100</SLimit>

        {/* 8. 강의 요청 상세 */}
        {/* 1) 글자수 제한 500 거는 방법 찾아내고 */}
        <SDetail>
          <h3>내용 상세</h3>
          <SDetailText
            defaultValue={detail}
            maxLength={500}
            placeholder="강의에 대해 바라는 점을 자유롭게 작성해주세요"
            onChange={(e) => setDetail(e.target.value)}
          ></SDetailText>
          <SLimit>{detail.length}/500</SLimit>
        </SDetail>

        {/* 9. 등록(작성) 버튼 */}
        {/* <Button
            style={{ display: "block", margin: "auto" }}
            color="warning"
            onClick={handleRegister}
            variant="outlined"
            >
            등록
          </Button> */}
        <SButton>
          <SRegistButton onClick={handleRegister}>등록</SRegistButton>
        </SButton>
      </SContainer>
    </CardBox>
  );
};

export default NewBoard;
