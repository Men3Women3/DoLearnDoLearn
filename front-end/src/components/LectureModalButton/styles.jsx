import styled from "styled-components";

export const SBox = styled.div`
  background-color: ${(props) => props.theme.lighterYellow};
  border: 1px solid black;
  border-radius: 8px;
  margin: 1rem 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SListBox = styled.fieldset`
  border: none;
  display: flex;
  justify-content: center;
  margin: auto 0;
  input {
    margin: 0;
    margin-right: 3px;
  }
  div {
    font-family: ${(props) => props.theme.fontFamily.Bold};
    font-size: ${(props) => props.theme.fontSize.p};
  }
  span {
    margin: 0;
    margin-right: 3px;
  }
`;

export const SButtonBox = styled.div`
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
