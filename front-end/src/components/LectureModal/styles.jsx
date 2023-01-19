import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// global span 태그
export const SSpan = styled.span`
  font-family: ${(props) => props.theme.fontFamily.Light};
  font-size: ${(props) => props.theme.fontSize.p};
`;

// 작성자 아이콘
export const SWriter = styled(FontAwesomeIcon)`
  height: calc(1vh + 5px);
  margin-right: 1vw;
`;

// 시계 아이콘
export const SClock = styled(FontAwesomeIcon)`
  height: calc(1vh + 5px);
  margin-right: 1vw;
`;

// 달력 아이콘
export const SCalendar = styled(FontAwesomeIcon)`
  height: calc(1vh + 5px);
  margin-right: 1vw;
`;

// 강사 아이콘
export const SLecturer = styled(FontAwesomeIcon)`
  height: calc(1vh + 5px);
  margin-right: 1vw;
`;

// 수강생 아이콘
export const SStudent = styled(FontAwesomeIcon)`
  height: calc(1vh + 5px);
  margin-right: 1vw;
`;

// 연필 아이콘
export const SPencil = styled(FontAwesomeIcon)`
  height: calc(1vh + 5px);
  margin-right: 1vw;
`;

// 강의 디테일 담은 span
export const SDetail = styled.span`
  background-color: #f0f0f0;
  color: black;
  padding: 0.2vw 1vw 0.2vw 1vw;
  border-radius: 20px;
  font-family: ${(props) => props.theme.fontFamily.Light};
  font-size: ${(props) => props.theme.fontSize.p};
`;

// 살펴보기 버튼
export const SButton = styled.button`
  display: grid;
  margin: auto;
  padding-top: 1vh;
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize.p};
  width: 35%;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.deeperYellow};
    border-color: ${(props) => props.theme.deeperYellow};
  }
`;
