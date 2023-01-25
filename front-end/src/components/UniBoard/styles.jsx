import styled from "styled-components";
// import Paging from "../Paging";

export const SImg = styled.img`
  display: flex;
  margin: auto;
  width: 10vw;
  aspect-ratio: 3/2;
`;

// UniBoard에 스타일 입히기
export const SUniBoard = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  /* font-size: ${(props) => props.theme.fontSize.p}; */
  margin: 1vw;

  border: 1px solid black;
  /* font-size: 0.7rem;
  width: 13vw;
  padding: 1vh 1vw 1vh 1vw;
  box-shadow: 0px 0px 3px 0px black;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  place-items: center; */

  /* aspect-ratio: 5/6; */
  /* display: grid; */
`;
