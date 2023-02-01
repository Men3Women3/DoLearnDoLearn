import styled from "styled-components";

export const SBox = styled.div`
  background-color: ${(props) => props.theme.lighterYellow};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 10rem;
  height: 15rem;
  border: 1px;
  border-radius: 8px;
  margin: auto;
  margin-left: 1rem;
  /* padding: 7em 0; */
  text-align: center;
  .title {
    font-family: ${(props) => props.theme.fontFamily.Regular};
    font-size: ${(props) => props.theme.fontSize.h3};
    margin-top: 2.5rem;
  }
  .full-list {
    font-family: ${(props) => props.theme.fontFamily.Medium};
    font-size: ${(props) => props.theme.fontSize.p};
    margin: auto;
  }
  .empty-list {
    font-family: ${(props) => props.theme.fontFamily.Bold};
    font-size: ${(props) => props.theme.fontSize.h3};
    margin: auto;
  }
`;

export const SListBox = styled.div`
  color: black;
  padding: 0.5vw 1vw 0.2vw 1vw;
  border-radius: 12px;
  width: 6rem;
  height: 6.5rem;
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
    background-color: ${(props) => props.theme.deepYellow};
    border-radius: 12px;
    border: 1px solid #f0f0f0;
  }
`;

export const SList = styled.fieldset`
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
