import styled from "styled-components";

// board list 전체에 적용되는 css
export const SContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.p};
  grid-template-columns: repeat(3, 1fr);
  /* width: 60%; */
  /* align-items: flex-start; */
  /* margin: auto; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.p};
`;

export const SUniDiv = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  /* width: 100%; */
  /* display: grid; */
  /* margin: 1vh 2vw 1vh 2vw; */
  // padding-top: 10%;
`;

export const SNoBoard = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: ${(props) => props.theme.fontSize.h1};
`;
