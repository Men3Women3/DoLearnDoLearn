import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  .instructor__section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 1vw;
    background-color: ${(props) => props.theme.lightYellow};
    padding: 1vw;
  }
  .profile-img {
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    border: 2px solid black;
    background-color: white;
  }
  .instructor-name {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
  .instructor-email {
    font-size: ${(props) => props.theme.fontSize.p};
    color: gray;
  }
`;

export const SCustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 2vw;
`;

export const SSpan = styled.span`
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: ${(props) => props.theme.fontSize.p};
`;

export const SInfoItem = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  margin-bottom: 1vw;
`;
