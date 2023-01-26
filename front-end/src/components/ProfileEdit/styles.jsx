import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SProfileEditContainer = styled.div`
  width: 100%;

  .cd1tip {
    width: 98%;
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

  .oneLineContainer {
    display: flex;
    align-items: center;
    margin: calc(0.5vw + 1px) 0;
    span {
      margin-left: 10px;
    }
  }
`;

export const SSubContainerUp = styled.div`
  display: flex;
  align-items: center;
  .profile-container {
    position: relative;
  }
  /* 프로필 이미지 */
  .profile__img {
    height: calc(3vw + 50px);
    width: calc(3vw + 50px);
    border-radius: 50%;
    /* border: calc(0.4vw + 1px) solid black; */
    object-fit: cover;
    text-align: center;
    border: calc(0.1vw + 1px) solid black;
    border-radius: 50%;
    cursor: pointer;
  }
  .profil-edit__icon {
    color: black;
    height: calc(1vw + 7px);
    border: calc(0.1vw + 1px) solid black;
    border-radius: 50px;
    padding: 2px;
    position: absolute;
    background-color: white;
    bottom: 5px;
    right: 3px;
    cursor: pointer;
  }
  Input {
    display: none;
  }
  /* 이름 + 이메일 + 마일리지바 */
  section {
    width: 100%;
    margin-left: 15px;
    display: inline;
    /* div {
      display: flex;
      background-color: pink;
    } */

    /* 이름 */
    /* span {
      font-size: calc(1vw + 8px);
      margin-left: 5px !important;
    } */
    /* 이메일 */
    p {
      color: #8e8e8e;
      font-size: calc(0.7vw + 2px);
    }
    /* 마일리지바 */
    .wrapper {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 60%;
      height: calc(0.5vw + 2px);
    }
    .wrapper > div {
      flex: 1;
      /* border: calc(0.1vw + 1px) solid black; */
    }
  }
`;

export const SSubContainerDown = styled.div`
  width: 100%;
  padding: 20px 15px;
  font-size: calc(0.7vw + 2px);
  line-height: calc(1vw + 5px);
  display: flex;
  flex-direction: column;
`;

export const SOneLineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: calc(1vw + 1px) 0;
  span {
    font-size: calc(0.9vw + 2px);
  }
  a {
    margin-left: 10px;
  }
`;

export const SFontAwesomeIconAtProfile = styled(FontAwesomeIcon)`
  color: black;
  height: calc(1vw + 5px);
`;

export const SSelfIntroduction = styled.textarea`
  width: 85%;
  height: calc(3vw + 80px);
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: ${(props) => props.theme.fontSize.p};
  line-height: calc(1vw + 5px);
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  outline: none;
  /* padding-left: 50px; */
  /* padding-top: 10px; */
  /* padding-bottom: 10px; */
  /* font-size: 20px; */
  padding: 10px;
  margin-left: 7px;
  resize: none;
  &::placeholder {
    color: #cdcdcd;
  }
  .typing-length {
    text-align: right;
    color: black;
    margin-bottom: 0px;
  }
`;

export const SInput = styled.input`
  width: 85%;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: ${(props) => props.theme.fontSize.p};
  /* width: 150px; */
  /* height: 40px; */
  padding: 10px;
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  outline: none;
  margin-left: 10px;
  /* margin-bottom: 12px; */
  /* font-size: 20px; */
  &::placeholder {
    color: #cdcdcd;
    font-size: 10px;
  }
`;

export const SBlackButton = styled.button`
  width: 20%;
  font-family: ${(props) => props.theme.fontFamily.Bold};
  font-size: ${(props) => props.theme.fontSize.p};
  background-color: black;
  padding: 8px 10px;
  border-radius: 8px;
  color: white;
  margin: auto;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.deeperYellow};
  }
`;
