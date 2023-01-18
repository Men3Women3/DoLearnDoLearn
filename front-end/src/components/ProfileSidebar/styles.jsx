import styled from "styled-components"

export const SSidebarContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  /* padding-top: 80px; */
  /* padding-top: calc(1vw + 5px); */
  border-right: calc(0.5vw + 0.2px) solid #e7e7e7;
  /* background-color: black; */
`

export const SButtonContainer = styled.div`
  position: relative;
  button {
    position: relative;
    z-index: 2;
    text-align: left;
    font-family: ${(props) => props.theme.fontFamily};
    /* width: 160px; */
    /* font-size: 24px; */
    font-size: calc(1vw + 1px);
    /* margin: 40px; */
    margin: calc(1vw + 6px);
    margin-left: 20px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  button:hover {
    cursor: pointer;
    transform: scale(1.15);
    /* color: ${(props) => props.theme.deeperYellow}; */
  }
  div {
    z-index: 1;
    position: absolute;
    top: calc(1vw + 14px);
    left: calc(1vw + 28px);
  }
  .profile-page {
    min-width: 86px;
  }
  .schedule-page {
    min-width: 62px;
  }
  .undecided-lecture-page {
    min-width: 142px;
  }
  .message-page {
    min-width: 112px;
  }
  .page__background {
    font-size: calc(1vw + 5px);
    color: ${(props) => props.theme.deeperYellow};
    background-color: ${(props) => props.theme.deeperYellow};
  }
`

export const SUserDeleteButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  .user-delete {
    color: rgb(142, 142, 142);
    height: calc(1vw + 4px);
  }
  button {
    color: rgb(142, 142, 142);
    text-align: left;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: calc(1vw + 4px);
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
