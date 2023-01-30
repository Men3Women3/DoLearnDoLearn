import styled from "styled-components";

export const SRankingSection = styled.section`
  .ranking-icon {
    margin-right: 6px;
  }
  h1 {
    border-bottom: 5px solid #ffc572;
    padding-bottom: calc(0.5vw + 1px);
    display: inline-block;
    margin-top: 0px;
    margin-bottom: calc(0.5vh + 12px);
  }
`;

export const SRankingItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: calc(1vw + 20px);
`;
