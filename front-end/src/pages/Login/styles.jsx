import styled from "styled-components";

export const SMain = styled.main`
  background-color: ${(props) => props.theme.deepYellow};
  padding: 50px;
  height: 100%;
`;

export const SSection = styled.section`
  padding: 30px;
  background-color: white;
  border-radius: 20px;
`;

export const SContainer = styled.div`
  display: flex;
`;

export const SHeader = styled.header`
  img {
    width: 120px;
    height: 44px;
  }
`;
