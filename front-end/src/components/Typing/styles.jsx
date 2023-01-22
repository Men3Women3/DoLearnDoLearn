import styled from "styled-components"

export const SSection = styled.section`
  width: 100%;
  height: calc(1vh + 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #000000; */
  span {
    /* font-family: "GmarketSansBold"; */
    font-family: ${(props) => props.theme.fontFamily.ExtraBold};
    /* font-family: "Noto Sans KR", sans-serif; */
    font-weight: 700;
    font-size: calc(1vw + 28px);
    /* color: #fe9400; */
    background: linear-gradient(to left top, #ff4f23, #ffaa00, #f5ca4a);
    color: transparent;
    -webkit-background-clip: text;
  }
  span::after {
    content: "|";
    display: inline-block;
    font-size: calc(1vw + 32px);
    /* animation: moveCursor 500ms infinite; */
  }

  @keyframes moveCursor {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`
