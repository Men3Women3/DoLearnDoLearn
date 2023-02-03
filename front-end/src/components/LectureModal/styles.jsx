import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const STitle = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Bold};
  font-size: ${(props) => props.theme.fontSize.h2};
  padding-bottom: 1vh;
  margin-bottom: 2vh;
  border-bottom: 2px solid black;
`;

// LectureModal 부분을 제외한 div
export const SContentBox = styled.div`
  width: 26rem;
`;

// 강사 목록까지 포함한 div
export const SNoBtnBox = styled.div`
  display: flex;
`;

// global span 태그
export const SSpan = styled.span`
  font-family: ${(props) => props.theme.fontFamily.Light};
  font-size: ${(props) => props.theme.fontSize.p};
`;

// 작성자 아이콘
export const SWriter = styled(FontAwesomeIcon)`
  width: calc(1vw + 5px);
  margin-right: 1vw;
`;

// 시계 아이콘
export const SClock = styled(FontAwesomeIcon)`
  width: calc(1vw + 5px);
  margin-right: 1vw;
`;

// 달력 아이콘
export const SCalendar = styled(FontAwesomeIcon)`
  width: calc(1vw + 5px);
  margin-right: 1vw;
`;

// 강사 아이콘
export const SLecturer = styled(FontAwesomeIcon)`
  width: calc(1vw + 5px);
  margin-right: 1vw;
`;

// 수강생 아이콘
export const SStudent = styled(FontAwesomeIcon)`
  width: calc(1vw + 5px);
  margin-right: 1vw;
`;

// 연필 아이콘
export const SPencil = styled(FontAwesomeIcon)`
  width: calc(1vw + 5px);
  margin-right: 1vw;
`;

// 강의 디테일 담은 div
export const SDetail = styled.div`
  background-color: #f0f0f0;
  color: black;
  padding: 0.5vw 1vw 0.2vw 1vw;
  border-radius: 12px;
  width: 350px;
  height: 100px;
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 12px;
    border: 3px solid #f0f0f0;
  }

  font-family: ${(props) => props.theme.fontFamily.Light};
  font-size: ${(props) => props.theme.fontSize.p};
`;

// 각 아이템을 담은 div
export const SInfoItem = styled.div`
  display: flex;
  margin-bottom: calc(0.8vw + 1px);
`;
