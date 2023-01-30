import styled from "styled-components";

export const SMainContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  /* background-color: black; */
  background: rgb(255, 232, 154);
  background: linear-gradient(
    90deg,
    rgba(255, 232, 154, 1) 25%,
    rgba(255, 153, 98, 1) 100%
  );
`;

export const SLeftItemContainer = styled.div`
  position: relative;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SRightItemContainer = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
`;
