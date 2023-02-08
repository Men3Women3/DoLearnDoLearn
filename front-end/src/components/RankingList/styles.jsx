import styled from "styled-components";

export const SRankingSection = styled.section`
  .ranking-icon {
    margin-right: 6px;
  }
  h1 {
    font-family: "GmarketSansBold";
    /* border-bottom: 5px solid #ffc572; */
    padding-bottom: calc(0.5vw + 1px);
    display: inline-block;
    margin-top: 0px;
    /* margin-bottom: calc(0.5vh + 12px); */
  }
`;

export const SRankingItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  /* row-gap: 22px; */
  /* margin-top: 15px; */
  /* margin-bottom: calc(1vw + 20px); */
`;
