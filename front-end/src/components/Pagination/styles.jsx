import styled from "styled-components";

export const SNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

export const SButton = styled.button`
  border: 1px solid black;
  border-radius: 10%;
  padding: 0.7vh 0.5vw;
  margin: 0.1rem;
  background: white;
  color: black;
  font-size: 1rem;

  &:hover {
    background: ${(props) => props.theme.deeperYellow};
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
