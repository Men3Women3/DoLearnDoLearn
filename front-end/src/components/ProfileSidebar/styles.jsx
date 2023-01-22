import styled from "styled-components"

export const SSidebarContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  padding-top: calc(0.9vw + 0.2px);
  /* border-right: 6px solid #e6e6e6; */
  border-right: 10px solid;
  border-image-slice: 1;
  border-width: 6px;
  border-image-source: linear-gradient(
    to left top,
    #e67732,
    #ffe89e,
    #ffc507
  ); ;
`

export const SButtonContainer = styled.div`
  position: relative;
  button {
    position: relative;
    z-index: 2;
    text-align: left;
    font-family: ${(props) => props.theme.fontFamily.Bold};
    font-size: ${(props) => props.theme.fontSize.h3};
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
  }
  div {
    z-index: 1;
    position: absolute;
    /* top: calc(1vw + 4.5px);
    left: calc(1vw + 3px); */
    top: calc(1vw + 5px);
    left: calc(1vw + 5px);
  }
  .page__background {
    font-size: calc(1vw + 6px);

    /* font-size: 10px; */
    background-color: ${(props) => props.theme.deeperYellow};
    /* transform: skew(-30deg); */
    border-radius: 3px;
  }
`

export const SUserDeleteButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 10px;
  left: 20px;

  button {
    color: rgb(190, 190, 190);
    text-align: left;
    font-family: ${(props) => props.theme.fontFamily};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
