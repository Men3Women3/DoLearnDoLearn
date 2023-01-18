import styled from "styled-components";

export const SImg = styled.img`
  width: 100%;
`;

// board list 전체에 적용되는 css
export const SContainer = styled.div`
  width: 60%;
  margin: 10px; // 이거 어떻게 주냐에 따라 왔다리 갔다리
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: calc(1.5vw + 1px);
  .uni-board {
    border: 1px solid black;
    border-radius: 3%;
    padding: 5%; // 요렇게 하면 뽀드 안에서 폭이 생기고(padding: 안쪽 여백)
    margin: 5%; // 요렇게 하면 uni 뽀드끼리 폭이 생김(margin: 바깥쪽 여백)
  }
`;

export const SUni = styled.div`
  margin: 5px;
  padding-bottom: 1.3%;
  width: 350px;
  display: inline-block;
`;

export const SLabel = styled.label`
  position: relative;

  .search-bar {
    border: none;
    /* padding: 1% 10%; // 안쪽 여백 */
    margin: 3% 15%; // 바깥쪽 여백
    height: 40px;
    border-color: black;
  }
  .glass-button {
    /* position: relative; */
    top: 0;
    right: 5px;
  }
`;
