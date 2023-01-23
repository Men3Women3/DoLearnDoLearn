import styled from 'styled-components';
// import Paging from "../Paging";

export const SImg = styled.img`
  width: 100%;
`;

// UniBoard에 스타일 입히기
export const SUniBoard = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid black;
  padding: 5%;
  box-shadow: 0px 0px 3px 0px black;
  border-radius: 2%;
  h4 {
    font-size: ${(props) => props.theme.fontSize.p};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.p};
  }
  p {
    font-size: ${(props) => props.theme.fontSize.p};
  }
`;
