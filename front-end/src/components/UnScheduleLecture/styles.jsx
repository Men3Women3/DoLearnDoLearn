import styled from "styled-components"

import { SCard } from "../CardBox/styles"

export const Scontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`
export const SSCard = styled(SCard)`
  position: relative;
  height: 80%;
  .pagination__section {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`
