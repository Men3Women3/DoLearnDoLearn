import styled from "styled-components";

export const SContainer = styled.main`
  width: 100%;
  height: 100%;
  .main__section {
    font-family: ${props => props.theme.fontFamily.Regular};
    position: static;
    width: 100%;
    height: 550px;
    background-color: #fff9db;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: ${props => props.theme.fontFamily.Light};
      margin: 0px;
      font-size: 3.5vw;
      margin-bottom: 40px;
    }
    h3 {
      font-family: ${props => props.theme.fontFamily.Thin};
      font-size: 2.5vw;
      margin: 0px;
    }
    span {
      font-size: 1.5vw;
    }
    & > div {
      display: flex;
      justify-content: center;
      .main__content {
        /* min-width: 525px; */
        /* padding-left: 50px; */
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .added-margin-right {
      margin-right: 14px;
    }
    .normal-margin-right {
    }
    img {
    }
    .main__normal-img {
      width: 480px;
      height: 346px;
    }
    .main__small-img {
      width: 320px;
      height: 346px;
      margin-right: 146px;
      transform: translateX(-60px);
    }
    .lottie-container {
      cursor: pointer;
      transform: translateX(60px);
    }
  }

  .typing__action {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 36px;
      color: #f3bd2a;
    }
    span::after {
      content: "|";
      display: inline-block;
      font-size: 50px;
      animation: moveCursor 500ms infinite;
    }

    @keyframes moveCursor {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  }
`;
