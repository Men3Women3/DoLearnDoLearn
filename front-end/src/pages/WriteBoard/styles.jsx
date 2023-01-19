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
    margin-right: 15px;
  }
`;
export const STitleInput = styled.input`
  margin-top: 1.4%;
  font-family: ${(props) => props.theme.fontFamily};
  width: 80%;
  height: calc(3vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 50px;
  font-size: 20px;
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

export const SParticipantInput = styled.input`
  margin-top: 1.5%;
  font-family: ${(props) => props.theme.fontFamily};
  width: 10%;
  height: calc(3vh + 18px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 50px;
  font-size: 20px;
`;

// 5. 모집 기간 - recruit-period
export const SRecruit = styled.div`
  font-size: calc(1.5vw + 1px);
  display: flex;
  h3 {
    margin-right: 15px;
  }
`;

export const SRecruitInput = styled.input`
  margin: 2% 1% 0% 1%;
  font-family: ${(props) => props.theme.fontFamily};
  width: 10%;
  height: calc(3vh + 18px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 30px;
  font-size: 20px;
`;

// 6. 강의 일시
export const SLecture = styled.div`
  font-size: calc(1.5vw + 1px);
  display: flex;
  h3 {
    margin-right: 15px;
  }
`;

export const SLectureInput = styled.input`
  margin: 2% 1% 0% 1%;
  font-family: ${(props) => props.theme.fontFamily};
  width: 10%;
  height: calc(3vh + 18px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 30px;
  font-size: 20px;
`;

export const STimeInput = styled.input`
  margin: 2% 1% 0% 1%;
  font-family: ${(props) => props.theme.fontFamily};
  width: 10%;
  height: calc(3vh + 18px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 30px;
  font-size: 20px;
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

export const SSummaryText = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily};
  width: 95%;
  height: 15%;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  resize: none;
  &::placeholder {
    font-size: 15px;
    color: #cdcdcd;
  }
`;

// 요청내용 상세 - request-detail
export const SDetail = styled.div`
  font-size: calc(1.5vw + 1px);
  resize: none;
`;

export const SDetailText = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily};
  width: 95%;
  height: 15%;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  resize: none;
  &::placeholder {
    font-size: 15px;
    color: #cdcdcd;
  }
`;

// 마지막 등록 버튼
export const SButton = styled.div`
  /* color: ${(props) => props.theme.lightYellow}; */
  /* padding: 2%; */
  display: grid;
`;

export const SRegistButton = styled.button`
  margin: auto;
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 16px;
  width: 20%;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.deeperYellow};
    border-color: ${(props) => props.theme.deeperYellow};
  }
`;
