import styled from "styled-components";

export const SSmallScheduleMain = styled.main`
  .smallSchedule-container {
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    .smallSchedule__toggle-button {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: none;
      background-color: white;
      transition: all 300ms linear;
      font-size: ${(props) => props.theme.fontSize.h1};
      cursor: pointer;
      box-shadow: 0 0 30px #dedede;
    }
    .smallSchedule__toggle-button:hover {
      transform: scale(1.1);
    }
  }
`;
