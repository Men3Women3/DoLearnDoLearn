import styled from "styled-components";

export const SSection = styled.section`
  .modal-button {
    font-size: ${(props) => props.theme.fontSize.p};
  }
`;

export const SSpan = styled.span`
  font-size: ${(props) => props.theme.fontSize.h1};
  color: #ff7979;
  display: block;
  border-bottom: 2px solid #cbcbcb;
  font-family: ${(props) => props.theme.fontFamily.Regular};
`;

export const SUl = styled.ul`
  padding-left: 30px;
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: calc(0.5vw + 8px);
  .delete-warning {
    color: #ff0000;
  }
`;

export const SButtonContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  button {
    font-size: ${(props) => props.theme.fontSize.p};
    color: white;
    width: calc(1vw + 100px);
    height: calc(1vh + 30px);
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .delete-button {
    background-color: #ff7979;
  }
  .cancel-button {
    background-color: #cbcbcb;
  }
`;
