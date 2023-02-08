import styled from "styled-components"
import { Tooltip } from "@mui/material"
import { SCard } from "../ProfileCardBox/styles"

export const SSCard = styled(SCard)`
  position: relative;
  height: 33vw;
  box-shadow: 5px 5px 30px #c4c4c454;
  .button__section {
    position: absolute;
    bottom: 2.5vw;
    left: 50%;
    transform: translate(-50%);
  }
`

export const SProfileContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  width: 100%;
  .cd1tip {
    width: 100%;
    display: flex;
  }

  .tip {
    width: 100%;
    height: 15vw;
    word-wrap: break-word;
    white-space: -moz-pre-wrap;
    white-space: pre-wrap;
    border: 4px dashed ${(props) => props.theme.lightGray};
    color: black;
    padding: calc(1vw + 5px);
    border-radius: 10px;
    font-size: ${(props) => props.theme.fontSize.p};

    /* 스클롤러 변경 */
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d4d4d4;
      border-radius: 10px;
    }
  }
`

export const SSubContainerUp = styled.div`
  display: flex;
  align-items: center;
  /* 프로필 이미지 */
  .profile-img {
    height: calc(3vw + 70px);
    width: calc(3vw + 70px);
    border-radius: 50%;
    border: calc(0.1vw + 1px) solid #6e6e6eec;
    object-fit: cover;
    text-align: center;
  }
  /* 이름 + 이메일 + 마일리지바 */
  section {
    width: 100%;
    margin-left: 15px;
    display: inline;
    .info__container {
      display: flex;
      justify-content: space-between;
    }
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
    }
  }
`

export const SSnsContainer = styled.div`
  display: flex;
  column-gap: 8px;
  justify-content: space-between;
  align-items: center;
  img {
    height: calc(1.5vw + 0.1px);
    cursor: pointer;
  }
`

export const SSubContainerDown = styled.div`
  width: 100%;
  padding: 20px 0;
  font-size: calc(0.7vw + 2px);
  line-height: calc(1vw + 5px);
  display: flex;
  flex-direction: column;
`

export const SBlackButton = styled.button`
  width: calc(2vw + 80px);
  font-family: ${(props) => props.theme.fontFamily.Bold};
  font-size: ${(props) => props.theme.fontSize.p};
  background-color: black;
  padding: 8px 10px;
  border-radius: 8px;
  color: white;
  /* margin: 0 auto;
  margin-top: 40px; */
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.deeperYellow};
    font-weight: bolder;
  }
`

export const SCustomToolTip = styled(Tooltip)`
  background-color: yellow;
`
