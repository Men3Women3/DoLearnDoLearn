import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SProfileContainer = styled.div`
  width: 100%;

  .cd1tip {
    width: 98%;
    display: flex;
  }

  .tip {
    width: calc(100% - 4vw);
    background-color: #f0f0f0;
    color: black;
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
`

export const SSubContainerUp = styled.div`
  display: flex;
  align-items: center;
  /* 프로필 이미지 */
  .profileImg {
    height: calc(3vw + 50px);
    width: calc(3vw + 50px);
    border-radius: 50%;
    /* border: calc(0.4vw + 1px) solid black; */
    object-fit: cover;
    text-align: center;
  }
  /* 이름 + 이메일 + 마일리지바 */
  section {
    width: 100%;
    margin-left: 15px;
    display: inline;
    /* 이름 */
    span {
      font-size: calc(0.9vw + 2px);
      margin-left: 5px !important;
    }
    /* 이메일 */
    p {
      color: #8e8e8e;
      font-size: calc(0.7vw + 1px);
    }
    /* 마일리지바 */
    .wrapper {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 60%;
      height: calc(0.8vw + 2px);
    }
    .wrapper > div {
      flex: 1;
      /* border: calc(0.1vw + 1px) solid black; */
    }
  }
`

export const SSubContainerDown = styled.div`
  width: 100%;
  padding: 20px 15px;
  font-size: calc(0.2vw + 1px);
  line-height: calc(1vw + 5px);
  display: flex;
  flex-direction: column;
`

export const SOneLineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: calc(0.5vw + 1px) 0;
  span {
    margin-left: 10px;
  }
`

export const SFontAwesomeIconAtProfile = styled(FontAwesomeIcon)`
  color: black;
  height: calc(1vw + 5px);
`
