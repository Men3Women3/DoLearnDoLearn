import styled, { keyframes } from "styled-components";

export const Box = styled.main`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  /* box-shadow: 10px 10px 10px 10px rgb(230 226 226); */
  img {
    height: calc(2vw + 17px);
  }
  img:hover {
    animation: swing 5000ms infinite;
    /* transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px; */
  }

  @keyframes swing {
    0%,
    10% {
      transform: rotate(0deg);
    }
    5%,
    15%,
    25%,
    35%,
    45% {
      transform: rotate(5deg);
    }
    10%,
    20%,
    30%,
    40% {
      transform: rotate(-5deg);
    }
  }

  .left-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right-item {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    img {
      height: calc(1vw + 10px);
      width: calc(1vw + 10px);
      border-radius: 50%;
      object-fit: cover;
      text-align: center;
    }
    .unread__notification {
      cursor: pointer;
      font-size: ${(props) => props.theme.fontSize.h2};
    }
    .user-state {
      background-color: black;
      padding: 8px 12px;
      /* margin-left: calc(1vw + 6px); */
      border-radius: 8px;
      color: white;
      margin-left: calc(1vw + 1px);
    }
    .username {
      color: black;
      font-size: ${(props) => props.theme.fontSize.h4};
      display: flex;
    }
    /* p {
      font-size: 18px;
      margin-bottom: 0px;
      cursor: pointer;
    } */
    span {
      margin: 0px 12px;
      cursor: default;
    }
    .user-state {
      color: white;
      font-size: ${(props) => props.theme.fontSize.p};
    }
  }
  .link__board {
    font-size: ${(props) => props.theme.fontSize.h4};
    color: #545151;
    margin-left: calc(1vw + 6px);
  }
  .link {
    margin-top: 0px;
    text-decoration: none;
    transition: all 300ms ease;
  }
  .link:hover {
    color: #f3bd2a;
    font-weight: bold;
    transform: scale(1.1);
  }
  .logout {
    margin-bottom: 0px;
    cursor: pointer;
  }
  .unread-container {
    position: relative;
  }
  .unread-message {
    position: absolute;
    width: calc(0.3vw + 1px);
    height: calc(0.3vw + 1px);
    background-color: red;
    border-radius: 50%;
    top: 0px;
  }
  .user-state-nuLogined {
    color: white;
  }
`;
