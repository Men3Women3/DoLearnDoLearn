import styled from 'styled-components';

export const SSidebarContainer = styled.section`
  width: 20%;
  position: relative;
  padding-top: 80px;
  /* background-color: black; */
`

export const SButtonContainer = styled.div`
  position: relative;
  button {
    position: relative;
    z-index: 2;
    text-align: left;
    font-family: ${props => props.theme.fontFamily};
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
    width: 70px;
    height: 28px;
    background-color: ${props => props.theme.deeperYellow};
  }
`

export const SUserDeleteButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`