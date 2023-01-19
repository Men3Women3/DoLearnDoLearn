import styled from "styled-components";

export const SCalendar = styled.div`
  /* 일자에 커서 올리면 포인트로 만들기 */
  .fc-event-title {
    cursor: pointer;
  }
  /* 현재 날짜 셀 */
  .fc-day-today {
    background: white !important;
    border: none !important;
  }

  /* 일요일 날짜: 빨간색 */
  .fc-day-sun a {
    color: red;
  }

  /* 토요일 날짜: 파란색 */
  .fc-day-sat a {
    color: blue;
  }

  /* 달력 타이틀(몇월 며칠) */
  .fc-toolbar-title {
    font-family: ${(props) => props.theme.fontFamily.Medium};
    font-size: ${(props) => props.theme.fontSize.h1} !important;
  }

  /* 달력 타이틀 버튼 */
  .fc-button {
    font-family: ${(props) => props.theme.fontFamily.Medium};
    font-size: ${(props) => props.theme.fontSize.p} !important;
  }

  /*일자*/
  .fc-daygrid-day-number {
    font-size: ${(props) => props.theme.fontSize.p};
  }

  /* 요일 행 */
  .fc-col-header {
    font-size: ${(props) => props.theme.fontSize.p};
  }

  .fc-daygrid-day-frame {
    overflow-y: auto;
    max-height: 50px;

    /* Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
      width: 16px;
    }

    ::-webkit-scrollbar-track {
      background: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c2c2c2;
      border-radius: 10px;
      border: 3px solid #ffffff;
    }

    .fc-event-title-container {
      background-color: black;
      border: none;
      color: white;
      /* border-radius: 4px; */
    }

    .fc-event {
      border: none;
      font-family: ${(props) => props.theme.fontFamily.Light};
      /* border-radius: 4px; */
    }
  }
`;
