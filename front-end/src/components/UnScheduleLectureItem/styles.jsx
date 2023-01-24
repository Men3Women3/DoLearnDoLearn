import styled from "styled-components"

export const SMain = styled.main`
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 5px #3737372d;
  border-radius: 20px;
  cursor: pointer;
  .main__container {
    background-color: ${(props) => props.theme.lightYellow};
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-radius: 20px;

    .lecture-info__section {
      p {
        font-size: ${(props) => props.theme.fontSize.p};
        margin: 7px 0;
      }
      span {
        font-size: ${(props) => props.theme.fontSize.h4};
        font-weight: bold;
      }
    }
    .host__section {
      display: flex;
      margin: auto 0;
      align-items: center;
      img {
        height: calc(1vw + 12px);
        width: calc(1vw + 12px);
        border-radius: 50%;
        object-fit: cover;
        text-align: center;
      }
      span {
        margin-left: 5px;
      }
    }
    &:hover {
      transform: scale(1.05);
    }
  }
`
