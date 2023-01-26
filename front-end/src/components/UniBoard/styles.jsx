import styled from "styled-components";
// import Paging from "../Paging";

export const SImg = styled.img`
  display: flex;
  margin: auto;
  margin-top: 0.5vh;
  width: 10vw;
  aspect-ratio: 3/2;
`;

// UniBoard에 스타일 입히기
export const SUniBoard = styled.div`
  /* width: 150px; */
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: ${(props) => props.theme.fontSize.p};
  margin: 0.5vw;
  padding: 10px;
  border: 0.1px solid #f4e3b4;
  box-shadow: 5px 5px 5px #3737372d;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  :hover {
    transform: scale(1.01);
  }
  /* display: block;
  width: 185px; */
  /* margin-top: 7vh; */
  /*
  width: 13vw;
  padding: 1vh 1vw 1vh 1vw;
  */
  /*
  place-items: center; */
  /* aspect-ratio: 5/6; */
  /* display: grid; */
`;
