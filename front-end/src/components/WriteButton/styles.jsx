import styled from "styled-components";

export const SWriteButton = styled.button`
  float: right;
  display: flex;
  margin: 1vh 0;
  margin-left: auto;
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: calc(0.8vw + 0.5px);
  width: 5vw;
  height: 4vh;
  border-radius: 5px;
  cursor: pointer;
  place-items: center;
  :hover {
    color: ${(props) => props.theme.deeperYellow};
    font-weight: bold;
  }
`;
