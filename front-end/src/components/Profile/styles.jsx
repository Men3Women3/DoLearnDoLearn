import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    font-family: ${(props) => props.theme.fontFamily.Light};
    font-size: ${(props) => props.theme.fontSize.p};
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
  /* 프로필 이미지 */
  .profileImg {
    height: calc(3vw + 50px);
    width: calc(3vw + 50px);
    border-radius: 50%;
    border: calc(0.1vw + 1px) solid black;
    object-fit: cover;
    text-align: center;
  }
  /* 이름 + 이메일 + 마일리지바 */
  section {
    width: 100%;
    margin-left: 15px;
    display: inline;
    /* 이름 */
    /* span {
      font-size: calc(0.9vw + 2px);
      margin-left: 0 !important;
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
    margin-left: 0;
  }
  a {
    margin-left: 10px;
  }
`;

export const SFontAwesomeIconAtProfile = styled(FontAwesomeIcon)`
  color: black;
  height: calc(1vw + 5px);
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
