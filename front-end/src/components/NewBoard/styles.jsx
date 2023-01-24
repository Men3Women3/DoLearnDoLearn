import styled from "styled-components";
// import SCard from '../CardBox';

// export const SCardBox = styled(SCard)`
//   margin-top: 100px;
//   width: 50px;
//   height: 80vh;
// `;

// 모든 내용물을 담은 div!
export const SContainer = styled.div`
  font-size: calc(1.5vw + 1px);
  margin: 10%;
  h1 {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSize.h1};
  }
  h3 {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSize.h3};
  }
  h5 {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

// 1. 페이지 제목
export const STitle = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 1%;
`;

// 3. 사용자 지정 제목 - custom-title
export const SBoardTitle = styled.div`
  display: flex;
  h3 {
    margin-right: 1vw;
  }
`;

export const STitleInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  transform: translate(0, 15%);
  width: calc(40vw + 10px);
  height: calc(3.5vh + 15px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 50px;
`;

// 4. 참여 인원 - people-number
export const SParticipant = styled.div`
  display: flex;
  h3 {
    margin-right: 1vw;
  }
  h5 {
    margin-left: 10px;
  }
`;

export const SParticipantInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  transform: translate(0, 15%);
  width: 5vw;
  height: calc(3.5vh + 15px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 3vw;
  ::placeholder {
    font-family: ${(props) => props.theme.fontFamily.Regular};
    font-size: ${(props) => props.theme.fontSize.p};
  }
`;

// 5. 모집 기간 - recruit-period
export const SRecruit = styled.div`
  display: flex;
  h3 {
    margin-right: 1vw;
  }
`;

export const SRecruitInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  transform: translate(0, 15%);
  width: 15%;
  height: calc(3.5vh + 15px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 30px;
  margin-right: 1vw;
`;

// 6. 강의 일시
export const SLecture = styled.div`
  display: flex;
  h3 {
    margin-right: 1vw;
  }
`;

export const SLectureInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  transform: translate(0, 15%);
  width: 15%;
  height: calc(3.5vh + 15px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 30px;
  margin-right: 1vw;
`;

export const STimeInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  transform: translate(0, 15%);
  width: 15%;
  height: calc(3.5vh + 15px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 30px;
`;

export const SRadio = styled.fieldset`
  transform: translate(0, 15%);
  border: none;
  label {
    font-family: ${(props) => props.theme.fontFamily.Regular};
    font-size: calc(1vw + 1px);
    line-height: 2rem;
    padding: 0.2em 0.4em;
  }
  span {
    /* verticle-align: middle; */
  }
`;

// 글자수 제한 p태그
export const SLimit = styled.p`
  text-align: right;
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
`;

// 요청내용 요약 - request-summary
export const SSummary = styled.div`
  font-size: calc(1.5vw + 1px);
  resize: none;
`;

export const SSummaryText = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: calc(1vw + 1px);
  width: 95%;
  height: 15%;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  resize: none;
  &::placeholder {
    font-size: calc(1vw + 1px);
    color: #cdcdcd;
  }
`;

// 요청내용 상세 - request-detail
export const SDetail = styled.div`
  font-size: calc(1.5vw + 1px);
  resize: none;
  /* display: flex;
  justify-content: space-evenly; */
`;

export const SDetailText = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: calc(1vw + 1px);
  width: 95%;
  height: 15%;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  resize: none;
  &::placeholder {
    font-size: calc(1vw + 1px);
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
  font-family: ${(props) => props.theme.fontFamily.Bold};
  font-size: calc(0.8vw + 1px);
  width: 20%;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.deeperYellow};
  }
`;

export const SModal = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.h2};
`;

export const SCancelButton = styled.button`
  margin-top: 40px;
  margin-bottom: 20px;
  color: #f3bd2a;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  outline: none;
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.h3};
`;
