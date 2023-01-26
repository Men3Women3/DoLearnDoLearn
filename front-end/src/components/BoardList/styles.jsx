import styled from "styled-components";

// board list 전체에 적용되는 css
export const SContainer = styled.div`
  /* width: 60%; */
  /* align-items: flex-start; */
  /* margin: auto; */
  /* grid-template-columns: repeat(3, 1fr); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.p};
`;

export const SUniDiv = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  width: 15vw;
  /* display: grid; */
  /* margin: 1vh 2vw 1vh 2vw; */
  // padding-top: 10%;
`;
