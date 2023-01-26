import styled from "styled-components";

export const SContainer = styled.section`
  width: 25%;
  margin: calc(1vw + 8px) 0px;
  margin-right: 10px;
`;

// 유저 프로필 사진을 감싸는 div
export const SUsersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: calc(1vw + 8px);
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 16px; */
  }
  /* 강사 프로필 */
  .lecturer {
    border: 3px solid ${(props) => props.theme.deeperYellow};
  }
  img {
    width: calc(1vw + 24px);
    height: calc(1vw + 24px);
    border-radius: 50%;
  }
`;

export const SChattingContainer = styled.div`
  text-align: center;
  margin: auto;
  margin: 0px;
  width: calc(1vw + 360px);
  height: 90%;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const SContentCantainer = styled.div`
  text-align: center;
  margin: auto;
  transform: translateY(16px);
  width: calc(1vw + 320px);
  height: 80%;
  background-color: #d9d9d9;
  box-shadow: 0 0 30px #ccc;
`;

export const SChattingContent = styled.div`
  text-align: left;
  padding: calc(0.5vw + 5px);
  /* 채팅 작성자 표시 */
  p {
    margin: 0px;
    font-size: calc(0.5vw + 1px);
  }
  /* 채팅내용이 들어갈 div */
  div {
    background-color: white;
    display: inline-block;
    padding: calc(0.5vw + 4px);
    border-radius: 8px;
    margin-top: calc(0.3vw + 1px);
    font-size: calc(0.5vw + 5px);
  }
`;

// 메시지를 작성할 textarea를 감싸는 div
export const SMessageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(20px);
  width: calc(1vw + 360px);
  height: 10%;
  margin-top: calc(1vw + 4px);
  textarea {
    width: calc(1vw + 300px);
    height: calc(10% + 55px);
    border-radius: 4px;
    border: none;
    outline: none;
    box-shadow: 0 0 30px #ccc;
    font-family: ${(props) => props.theme.fontFamily.Regular};
    resize: none;
    font-size: calc(1vw + 2px);
    padding: calc(0.3vw + 5px);

    /* Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
      width: calc(0.9vw + 1px);
    }

    ::-webkit-scrollbar-track {
      background: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c2c2c2;
      border-radius: 10px;
      border: 3px solid #ffffff;
    }
  }
  button {
    position: absolute;
    right: calc(0.8vw + 26px);
    bottom: calc(0.2vw + 0.3px);
    border: none;
    outline: none;
    background-color: #d9d9d9;
    border-radius: 50%;
    width: calc(1vw + 18px);
    height: calc(1vh + 26px);
    cursor: pointer;
  }
`;
