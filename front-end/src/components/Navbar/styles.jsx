import styled from "styled-components"

export const Box = styled.main`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 10px 10px 10px 10px rgb(230 226 226); */
  img {
    height: calc(2vw + 17px);
  }
  .left-item {
    /* margin-left: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: calc(1vw + 2px);
      margin-left: calc(0.3vw + 2px);
    }
    .unread__notification {
      cursor: pointer;
      margin-left: calc(1vw + 5px);
      font-size: calc(1vw + 4px);
    }
    div {
      background-color: black;
      padding: 8px 12px;
      /* margin-right: 16px; */
      margin-left: calc(1vw + 6px);
      border-radius: 8px;
      color: white;
    }
    .username {
      color: black;
      font-size: calc(1vw + 1px);
    }
    p {
      font-size: 18px;
      margin-bottom: 0px;
      cursor: pointer;
    }
    span {
      margin: 0px 12px;
      cursor: default;
    }
    .user-state {
      color: white;
      font-size: calc(0.6vw + 0.5px);
    }
  }
  .link__board {
    font-size: calc(1vw + 1px);
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
  }
`
