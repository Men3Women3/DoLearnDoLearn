import styled from "styled-components"

export const Scontainer = styled.main`
  .cd1tip {
    position: relative;
    display: inline-block;
  }

  .cd1tip .tip {
    width: 40vw;
    background: black;
    color: white;
    font-weight: bold;
    padding: 20px;
    border-radius: 20px;
    line-height: 2em;
    /* 말풍선 위치 잡기*/
    position: absolute;
    z-index: 1;
    top: -3px;
    left: 150%;
  }

  /* 말풍선 화살표 */
  .cd1tip .tip:after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    top: 1em;
    border: 0.781em solid transparent;
    border-right-color: black;
    border-left: 0;
    border-top: 0;
    margin-left: -0.781em;
  }
`
