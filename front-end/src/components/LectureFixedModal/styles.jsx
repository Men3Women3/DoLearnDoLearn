import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const SCustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 2vw;
`;

export const SSpan = styled.span`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: ${(props) => props.theme.fontSize.h3};
`;

export const SInfoItem = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  margin-bottom: calc(0.8vw + 1px);
`;
