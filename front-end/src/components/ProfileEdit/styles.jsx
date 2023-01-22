import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SProfileEditContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  width: 100%;

  .cd1tip {
    width: 100%;
    display: flex;
  }
`

export const SSubContainerUp = styled.div`
  display: flex;
  align-items: center;
  .profile-container {
    position: relative;
  }
  /* 프로필 이미지 */
  .profile__img {
    height: calc(3vw + 70px);
    width: calc(3vw + 70px);
    border-radius: 50%;
    object-fit: cover;
    text-align: center;
    border: calc(0.1vw + 1px) solid black;
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
    right: 5px;
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

    /* 이름 */
    span {
      font-size: ${(props) => props.theme.fontSize.h3};
      font-weight: bold;
    }
    /* 이메일 */
    p {
      color: #9a9a9a;
      font-size: ${(props) => props.theme.fontSize.p};
      margin: 5px 0;
    }
    /* 마일리지바 */
    .wrapper {
      /* display: flex;
      flex-direction: row; */
      /* align-items: stretch; */
      width: 100%;
      height: calc(1vw + 2px);
      /* 그라데이션 임시로 넣었음. 더 좋은 그라데이션 찾으면 바꾸기 */
      background: rgb(238, 242, 67);
      background: linear-gradient(
        90deg,
        rgba(238, 242, 67, 1) 0%,
        rgba(198, 255, 117, 1) 50%,
        rgba(36, 232, 67, 1) 100%
      );
      border-radius: 4px;
    }
    .wrapper > div {
      flex: 1;
      /* border: calc(0.1vw + 1px) solid black; */
    }
  }
`

export const SSubContainerDown = styled.div`
  width: 100%;
  padding: 20px 0;
  font-size: calc(0.7vw + 2px);
  line-height: calc(1vw + 5px);
  display: flex;
  flex-direction: column;
  .typing-length {
    float: right;
    text-align: right;
    color: #ababab;
    margin-top: 5px;
  }
`

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
`

export const SFontAwesomeIconAtProfile = styled(FontAwesomeIcon)`
  color: black;
  height: calc(1vw + 5px);
`

export const SSelfIntroduction = styled.textarea`
  width: 100%;
  height: calc(3vw + 80px);
  font-family: ${(props) => props.theme.fontFamily.Bold};
  font-size: ${(props) => props.theme.fontSize.p};
  line-height: calc(1vw + 5px);
  border: 2px solid #cdcdcd;
  border-radius: 10px;
  outline: none;
  padding: 10px;
  margin-left: 7px;
  resize: none;
  overflow-y: auto;
  &::placeholder {
    color: #cdcdcd;
  }
  &::-webkit-scrollbar {
    width: calc(0.5vw + 1px);
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
  }
`

export const SInput = styled.input`
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily.Bold};
  font-size: ${(props) => props.theme.fontSize.p};
  /* width: 150px; */
  /* height: 40px; */
  padding: 10px;
  border: 2px solid #cdcdcd;
  border-radius: 10px;
  outline: none;
  margin-left: 10px;
  /* margin-bottom: 12px; */
  /* font-size: 20px; */
  &::placeholder {
    color: #cdcdcd;
  }
`

export const SBlackButton = styled.button`
  width: calc(2vw + 80px);
  font-family: ${(props) => props.theme.fontFamily.Bold};
  font-size: ${(props) => props.theme.fontSize.p};
  background-color: black;
  padding: 8px 10px;
  border-radius: 8px;
  color: white;
  margin: 10px auto 0 auto;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.deeperYellow};
    font-weight: bolder;
  }
`
