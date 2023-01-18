import styled from "styled-components";

export const SContainer = styled.section`
  width: 25%;
  /* display: flex; */
`;

export const SUsersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }
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
  height: calc(1vh + 660px);
  background-color: #ffffff;
  border-radius: 8px;
`;

export const SContentCantainer = styled.div`
  text-align: center;
  margin: auto;
  transform: translateY(20px);
  width: calc(1vw + 320px);
  height: calc(1vh + 500px);
  background-color: #d9d9d9;
  box-shadow: 0 0 30px #ccc;
`;

export const SChattingContent = styled.div`
  text-align: left;
  padding: 10px;
  p {
    margin: 0px;
    font-size: calc(0.5vw + 1px);
  }
  div {
    background-color: white;
    display: inline-block;
    padding: 10px;
    border-radius: 8px;
    margin-top: 4px;
    font-size: calc(0.5vw + 5px);
  }
`;

export const SMessageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(20px);
  width: calc(1vw + 360px);
  margin-top: 10px;
  textarea {
    width: calc(1vw + 300px);
    /* transform: translateX(-5px); */
    border-radius: 4px;
    border: none;
    outline: none;
    box-shadow: 0 0 30px #ccc;
    font-family: ${(props) => props.theme.fontFamily};
    resize: none;
    font-size: calc(1vw + 2px);
    padding: 10px;
  }
  button {
    position: absolute;
    right: 40px;
    bottom: 16px;
    border: none;
    outline: none;
    background-color: #d9d9d9;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
