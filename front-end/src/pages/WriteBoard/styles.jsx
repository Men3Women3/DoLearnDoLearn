import styled from "styled-components";

// 모든 내용물을 담은 div!
export const SContainer = styled.div`
  font-size: calc(1.5vw + 1px);
  margin: 10%;
`;

// 1. 페이지 제목
export const STitle = styled.div`
  font-size: calc(1.5vw + 1px);
  border-bottom: 1px solid black;
  margin-bottom: 1%;
`;

// 3. 사용자 지정 제목 - custom-title
export const SBoardTitle = styled.div`
  font-size: calc(1.5vw + 1px);
  display: flex;
  h3 {
    /* display: inline-block;   */
    margin-right: 15px;
  }
`;
export const SCustomTitle = styled.input`
  /* font-size: calc(1.5vw + 1px);
  display: inline-block;
  width: 80%;
  height: calc(3vh + 5px);
  inline-size: 100%;
  padding-top: 10px;
  border-radius: 5%;
  border: 0.5px solid black; */
  font-family: ${(props) => props.theme.fontFamily};
  width: 80%;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  /* outline: none; */ // 작성된 내용이 있으면 색 들어오도록
  margin-bottom: 12px;
  padding-left: 50px;
  font-size: 20px;
  &::placeholder {
    color: #cdcdcd;
  }
`;

// 4. 참여 인원 - people-number
export const SParticipant = styled.div`
  font-size: calc(1.5vw + 1px);
  display: flex;
  h3 {
    margin-right: 15px;
  }
  h5 {
    margin-left: 10px;
  }
`;

// 5. 모집 기간 - recruit-period
export const SRecruit = styled.div`
  font-size: calc(1.5vw + 1px);
  display: flex;
  h3 {
    margin-right: 15px;
  }
`;

// 6. 강의 일시
export const SLecture = styled.div`
  font-size: calc(1.5vw + 1px);
  display: flex;
  h3 {
    margin-right: 15px;
  }
`;

// 글자수 제한 p태그
export const SLimit = styled.p`
  text-align: right;
  font-size: calc(1vw + 1px);
`;

// 요청내용 요약 - request-summary
export const SSummary = styled.div`
  font-size: calc(1.5vw + 1px);
  resize: none;
`;

// 요청내용 상세 - request-detail
export const SDetail = styled.div`
  font-size: calc(1.5vw + 1px);
  resize: none;
`;

// 마지막 등록 버튼
export const SButton = styled.div`
  /* color: ${(props) => props.theme.lightYellow}; */
  padding: 2%;
`;
