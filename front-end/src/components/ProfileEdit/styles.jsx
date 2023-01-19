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
    height: calc(3vw + 90px);
    width: calc(3vw + 90px);
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
    height: calc(1vw + 12px);
    border: calc(0.1vw + 1px) solid black;
    border-radius: 50px;
    padding: 2px;
    position: absolute;
    background-color: white;
    bottom: 5px;
    right: 8px;
    cursor: pointer;
  }
  Input {
    display: none;
  }
  /* 이름 + 이메일 + 마일리지바 */
  section {
    width: 100%;
    margin-left: 30px;
    display: inline;

    /* 이름 */
    span {
      font-size: calc(1vw + 8px);
      margin-left: 5px !important;
    }
    /* 이메일 */
    p {
      color: #8e8e8e;
      font-size: calc(1vw + 1.4px);
    }
    /* 마일리지바 */
    .wrapper {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 60%;
      height: calc(1vw + 5px);
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
  font-size: calc(1vw + 1px);
  line-height: calc(1vw + 10px);
  display: flex;
  flex-direction: column;
`;

export const SOneLineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: calc(0.5vw + 1px) 0;
  span {
    margin-left: 10px;
  }
`;

export const SFontAwesomeIconAtProfile = styled(FontAwesomeIcon)`
  color: black;
  height: calc(1vw + 17px);
  margin-right: 10px;
`;

export const SSelfIntroduction = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily};
  width: 360px;
  height: 167px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
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
  font-family: ${(props) => props.theme.fontFamily};
  width: 150px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 45px;
  margin-bottom: 12px;
  font-size: 20px;
  &::placeholder {
    color: #cdcdcd;
    font-size: 10px;
  }
`;
