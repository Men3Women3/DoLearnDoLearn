import styled from "styled-components";
import rankItemImg from "../../assets/images/rankItem.png";

export const SContainer = styled.div`
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.Light};
  background-image: url(${rankItemImg});
  background-size: cover;
  position: relative;
  width: calc(1vw + 200px);
  height: calc(1vw + 80px);
  border-radius: 12px;
  color: #000000;
  padding: calc(0.5vw + 3px) calc(0.5vw + 5px);
  transition: all 300ms linear;
  margin: calc(1vw + 12px) calc(1vw + 6px);
  &:hover {
    transform: scale(1.05);
  }
  /* 프로필 사진과 이름, 점수를 묶는 div */
  .profile-container {
    display: flex;
    align-items: center;
    /* 이름 */
    h3 {
      margin: 0px;
      /* margin-bottom: calc(0.2vw + 1px); */
      font-size: ${(props) => props.theme.fontSize.h3};
    }
    /* 점수 */
    p {
      margin: 0px;
    }
    /* 프로필 사진 */
    img {
      width: calc(1vw + 40px);
      height: calc(1vh + 45px);
      border-radius: 50%;
      margin-right: calc(0.5vw + 2px);
    }
  }
`;

// SNS 링크를 묶는 div
export const SSNSContainer = styled.div`
  display: flex;
  justify-content: start;
  .icon {
    font-size: calc(1vw + 4px);
    color: #000000;
    margin: calc(1vw + 4px) calc(0.4vw + 0.5px);
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
