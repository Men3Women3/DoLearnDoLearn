import styled from "styled-components";

export const SSidebarContainer = styled.section`
  width: 20%;
  position: relative;
  padding-top: 80px;
  border-right: 3px solid #e7e7e7;
  /* background-color: black; */
`;

export const SButtonContainer = styled.div`
  position: relative;
  button {
    position: relative;
    z-index: 2;
    text-align: left;
    font-family: ${(props) => props.theme.fontFamily};
    /* width: 160px; */
    font-size: 24px;
    margin: 40px;
    margin-left: 20px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  div {
    z-index: 1;
    position: absolute;
    top: 50px;
    left: 35px;
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
  .profile-page__background {
    width: 70px;
    height: 28px;
    background-color: ${(props) => props.theme.deeperYellow};
  }
`;

export const SUserDeleteButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  .user-delete {
    color: rgb(142, 142, 142);
    width: 25px;
    height: 25px;
  }
  button {
    color: rgb(142, 142, 142);
    text-align: left;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 20px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
