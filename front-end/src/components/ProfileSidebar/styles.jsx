import styled from "styled-components";

export const SSidebarContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: calc(0.9vw + 0.2px);
  /* padding-top: calc(1vw + 5px); */
  border-right: calc(0.5vw + 0.2px) solid #e7e7e7;
  /* background-color: black; */
`;

export const SButtonContainer = styled.div`
  position: relative;
  button {
    position: relative;
    z-index: 2;
    text-align: left;
    font-family: ${(props) => props.theme.fontFamily.Bold};
    /* width: 160px; */
    /* font-size: 24px; */
    font-size: ${(props) => props.theme.fontSize.h3};
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
    top: calc(1vw + 11.5px);
    left: calc(1vw + 26px);
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
    font-size: calc(1vw + 2px);
    /* color: ${(props) => props.theme.deeperYellow}; */
    background-color: ${(props) => props.theme.deeperYellow};
    transform: skew(-30deg);
    border-radius: 3px;
  }
`;

export const SUserDeleteButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  .user-delete {
    color: rgb(190, 190, 190);
    height: calc(1vw + 2px);
  }
  button {
    color: rgb(190, 190, 190);
    text-align: left;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: calc(1vw + 1.2px);
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
