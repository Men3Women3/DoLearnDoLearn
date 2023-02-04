import styled from "styled-components"

export const SMain = styled.main`
  height: 100%;
  box-shadow: 5px 5px 5px #3737372d;
  border-radius: 20px;
  margin-bottom: 15px;
  /* margin: 0 14px 10px 0; */
  cursor: pointer;
  .main__container {
    background-color: ${(props) => props.theme.lightYellow};
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 15px;
    border-radius: 20px;
    transition: all 300ms ease;
    .thumbnail-img {
      width: 9vw;
      height: 6vw;
    }
    .lecture-info__section {
      width: 12vw;
      margin-left: 10px;
      p {
        font-size: ${(props) => props.theme.fontSize.p};
      }
      span {
        font-size: ${(props) => props.theme.fontSize.h2};
        font-weight: bold;
        width: 100%;
        margin: 7px 0;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      /* .content {
        font-size: ${(props) => props.theme.fontSize.p};
        font-weight: lighter;
      } */
    }
  }
  &:hover {
    transform: scale(1.02);
  }
`
