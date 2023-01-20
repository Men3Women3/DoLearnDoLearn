import styled from "styled-components";

export const SSection = styled.section`
  width: 100%;
  height: calc(1vh + 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: ${(props) => props.theme.fontFamily.Regular};
    font-size: calc(1vw + 28px);
    color: #f3bd2a;
  }
  span::after {
    content: "|";
    display: inline-block;
    font-size: calc(1vw + 32px);
    animation: moveCursor 500ms infinite;
  }

  @keyframes moveCursor {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;
