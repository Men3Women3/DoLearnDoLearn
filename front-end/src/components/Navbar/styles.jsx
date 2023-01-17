import styled from "styled-components";

export const Box = styled.main`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 10px 10px rgb(230 226 226);
  img {
    width: 120px;
    height: 40px;
  }
  .left-item {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 30px;
      height: 20px;
      margin-right: 8px;
    }
    .unread__notification {
      cursor: pointer;
      margin-left: 20px;
      font-size: 24px;
    }
    div {
      background-color: black;
      padding: 8px 12px;
      margin-right: 16px;
      margin-left: 24px;
      border-radius: 8px;
      color: white;
    }
    .username {
      color: black;
      font-size: 20px;
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
    }
  }
  .link__board {
    font-size: 20px;
    color: black;
    margin-left: 16px;
  }
  .link {
    margin-top: 0px;
    text-decoration: none;
    transition: all 300ms ease;
  }
  .link:hover {
    color: #f3bd2a;
  }
`;
