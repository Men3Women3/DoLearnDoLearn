import styled from "styled-components";

export const SGroup = styled.div`
  display: flex;
  padding: 0 5vw;
`;

export const SButton = styled.button`
  border: none;
  background-color: black;
  margin: auto;
  color: white;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: calc(0.8vw + 0.5px);
  width: 7vw;
  height: 4.5vh;
  border-radius: 5px;
  cursor: pointer;
  place-items: center;
  text-align: center;

  :hover {
    font-family: ${(props) => props.theme.fontFamily.Bold};
    transform: translateY(-1px);
    color: ${(props) => props.theme.deeperYellow};
  }
`;
