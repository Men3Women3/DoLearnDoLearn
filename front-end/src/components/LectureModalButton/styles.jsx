import styled from "styled-components";

export const SButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  padding: 0 5vw;
  justify-content: center;
`;

export const SButton = styled.button`
  border: none;
  background-color: black;
  margin: 0 1rem;
  color: white;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: calc(0.8vw + 0.5px);
  width: 5rem;
  height: 2rem;
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

export const SFullStudent = styled.button`
  border: none;
  background-color: #bbbbbb;
  margin: 0 1rem;
  color: white;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: calc(0.8vw + 0.5px);
  width: 5rem;
  height: 2rem;
  border-radius: 5px;
  pointer-events: none;
  place-items: center;
  text-align: center;
`;
