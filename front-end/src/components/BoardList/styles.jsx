import styled from "styled-components";

// board list 전체에 적용되는 css
export const SContainer = styled.div`
  /* width: 60%; */
  /* align-items: flex-start; // 이거..좌우로 정렬하고 싶은디 */
  /* margin: auto; // 이거 어떻게 주냐에 따라 왔다리 갔다리 */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* grid-template-columns: repeat(3, 1fr); */
  font-size: ${(props) => props.theme.fontSize.p};
`;

export const SUniDiv = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  /* display: grid; */
  /* margin: 1vh 2vw 1vh 2vw; */
  // padding-top: 10%;
  width: 15vw;
`;
