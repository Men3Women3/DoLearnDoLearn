import styled from "styled-components";
// import Paging from "../Paging";

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

// // Pagination 스타일
// // Paging 컴포넌트를 가져와서 스타일 입히기..
// export const SPaging = styled(Paging)`
//   .pagination {
//     display: flex;
//     justify-content: center;
//     margin-top: 15px;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//   }

//   ul.pagination li {
//     display: inline-block;
//     width: 30px;
//     height: 30px;
//     border: 1px solid #e2e2e2;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1rem;
//   }

//   ul.pagination li:first-child {
//     border-radius: 5px 0 0 5px;
//   }

//   ul.pagination li:last-child {
//     border-radius: 0 5px 5px 0;
//   }

//   ul.pagination li a {
//     text-decoration: none;
//     color: #337ab7;
//     font-size: 1rem;
//   }

//   ul.pagination li.active a {
//     color: white;
//   }

//   ul.pagination li.active {
//     background-color: #337ab7;
//   }

//   ul.pagination li a:hover,
//   ul.pagination li a.active {
//     color: blue;
//   }

//   .page-selection {
//     width: 48px;
//     height: 30px;
//     color: #337ab7;
//   }
// `;
