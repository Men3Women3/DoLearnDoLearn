import styled from "styled-components"

export const SBox = styled.div`
  border: 2.5px dashed gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 14vw;
  height: 23vw;
  border-radius: 20px;
  margin-left: 1rem;
  .title {
    font-family: ${(props) => props.theme.fontFamily.Bold};
    font-size: ${(props) => props.theme.fontSize.h4};
    margin-top: 1rem;
  }
`

export const SContent = styled.div`
  margin-top: 20px;
  width: 12vw;
  height: 17vw;
  .full-list {
    font-family: ${(props) => props.theme.fontFamily.Medium};
    font-size: ${(props) => props.theme.fontSize.p};
    background-color: ${(props) => props.theme.lightYellow};
    /* box-shadow: 2px 3px 2px #ffc067; */
    /* box-shadow: 0px 3px 1px #ff9500; */
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: left;
    padding: 7px 7px;
    border-radius: 10px;
  }
  .empty-list {
    font-family: ${(props) => props.theme.fontFamily.Medium};
    font-size: ${(props) => props.theme.fontSize.p};
    text-align: center;
    background-color: ${(props) => props.theme.lighterYellow};
    /* background-color: #fff1de; */
    /* box-shadow: 1px 1px 2px #ff9500; */
    padding: 15px 10px;
    border-radius: 10px;
    cursor: default;
  }
`

export const SListBox = styled.div`
  height: 100%;
  text-align: left;
  color: black;
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
  overflow-y: auto;
  overflow-x: hidden;
  cursor: pointer;

  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.deepYellow};
    border-radius: 12px;
    border: 1px solid #f0f0f0;
  }
`

export const SList = styled.fieldset`
  border: none;
  display: flex;
  .instructor {
    font-weight: bold;
  }
  &:hover {
    color: #ff6905;
    transform: scale(1.03);
  }
`
