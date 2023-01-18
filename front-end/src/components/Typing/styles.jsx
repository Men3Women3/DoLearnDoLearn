import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 36px;
    color: #f3bd2a;
  }
  span::after {
    content: "|";
    display: inline-block;
    font-size: 46px;
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
