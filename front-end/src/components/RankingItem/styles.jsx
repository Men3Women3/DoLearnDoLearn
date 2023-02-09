import styled from "styled-components";
import rankItemImg from "../../assets/images/rankItem.png";

export const SContainer = styled.div`
  cursor: pointer;
  position: relative;
  font-family: ${(props) => props.theme.fontFamily.Light};
  background-image: url(${rankItemImg});
  background-size: cover;
  border-radius: 12px;
  color: #000000;
  padding: calc(0.5vw + 3px) calc(0.5vw + 5px);
  transition: all 300ms linear;
  &:hover {
    transform: scale(1.05);
  }
  /* 프로필 사진과 이름, 점수를 묶는 div */
  .profile-container {
    display: flex;
    align-items: center;
    /* 이름 */
    .name {
      margin: 0;
      font-size: ${(props) => props.theme.fontSize.h2};
      font-weight: bold;
    }
    /* 점수 */
    .point {
      margin: 0px;
      margin-top: 0.5vw;
      font-size: ${(props) => props.theme.fontSize.h4};
    }
    /* 프로필 사진 */
    img {
      width: 4.5vw;
      height: 4.5vw;
      margin-right: calc(0.5vw + 2px);
      border: 3px solid transparent;
      border-radius: 50%;
      background-image: linear-gradient(#fff, #fff),
        linear-gradient(to right, #ff6a00 0%, #ffb700 100%);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
  }
`;

// SNS 링크를 묶는 div
export const SSNSContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.67vw;
  bottom: 1vw;
  margin-top: 1vw;
  margin-bottom: 0.5vw;
  .icon {
    font-size: calc(1vw + 4px);
    color: #000000;
    margin-bottom: 0px;
    transition: all 300ms linear;
  }
  .icon:hover {
    color: #f3bd2a;
  }
`;

export const SRank = styled.div`
  user-select: none;
  font-size: calc(1vw + 24px);
  font-family: "Pacifico";
  color: #ffffff;
  position: absolute;
  bottom: calc(0.8vw + 1px);
  right: calc(1vw + 12px);
`;
