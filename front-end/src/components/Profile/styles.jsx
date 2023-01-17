import styled from "styled-components";

export const SContainer = styled.div`
  .profileContentContainer {
    width: 100%;
  }

  .subContainer {
    padding: 20px 15px;
    font-size: calc(1vw + 1px);
    line-height: calc(1vw + 10px);
    display: flex;
    flex-direction: column;
  }

  // 말풍선
  /* .cd1tip {
    width: 100%;
    position: relative;
    background-color: pink;
  } */

  // 말풍선 꼬리
  /* .cd1tip .tip {
    background: black;
    color: white;
    padding: 3%;
    border-radius: 20px;
    line-height: 1.5em; */
  /* 말풍선 위치 잡기*/
  /* position: absolute;
    z-index: 1;
    top: -7px;
    left: 7vw;
  } */

  .cd1tip {
    width: 100%;
    display: flex;
  }

  .tip {
    width: calc(100% - 4vw);
    background-color: black;
    color: white;
    padding: calc(1vw + 5px);
    margin-left: 10px;
    border-radius: 20px;
  }

  /* 말풍선 화살표 */
  /* .tip:after {
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
    margin-left: -0.581em;
  } */

  .oneLineContainer {
    display: flex;
    align-items: center;
    margin: calc(0.5vw + 1px) 0;
    span {
      margin-left: 10px;
    }
  }
`;
