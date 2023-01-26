import styled from "styled-components";

// 살펴보기 버튼
export const SLectureModalButton = styled.button`
  display: grid;
  margin: auto;
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: calc(0.8vw + 0.5px);
  width: 5vw;
  height: 4vh;
  border-radius: 5px;
  cursor: pointer;
  place-items: center;
  :hover {
    background-color: ${(props) => props.theme.deeperYellow};
    border-color: ${(props) => props.theme.deeperYellow};
  }
`;
