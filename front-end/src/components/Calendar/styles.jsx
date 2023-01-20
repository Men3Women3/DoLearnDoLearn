import styled from "styled-components";

export const SCalendar = styled.div`
  /* 일자에 커서 올리면 포인트로 만들기 */
  .fc-event-title {
    cursor: pointer;
  }

  /* 현재 날짜 셀 */
  .fc-day-today {
    background: white !important;

    /* 후보 3 */
    /* background: ${(props) => props.theme.lightYellow} !important; */

    border: none !important;

    /* 현재 날짜 셀의 우측상단 날짜 */
    .fc-daygrid-day-number {
      /* 후보 1 */
      /* border: 2px solid black; */

      /* 후보 2 */
      /* background-color: black; */
      background-color: ${(props) => props.theme.deeperYellow};
      color: white;
      border-radius: 50%;
    }
  }

  /* 일요일 날짜: 빨간색 */
  .fc-day-sun a {
    color: red;
  }
  /* 토요일 날짜: 파란색 */
  .fc-day-sat a {
    color: blue;
  }

  /* 달력 타이틀 */
  .fc-toolbar-title {
    font-family: ${(props) => props.theme.fontFamily.Bold};
    font-size: ${(props) => props.theme.fontSize.h1} !important;
    /* font-size: calc(2vw + 1px); */
  }

  /* 달력 타이틀 옆 버튼 */
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
    /* background-color: ${(props) => props.theme.deeperYellow}; */
    font-size: ${(props) => props.theme.fontSize.p};
  }
  .fc .fc-button-primary:not(:disabled).fc-button-active,
  .fc .fc-button-primary:not(:disabled):active {
    background-color: #aaaaaa;
    border-color: #aaaaaa;
    /* border-color: var(--fc-button-active-border-color); */
    color: var(--fc-button-text-color);
  }
  .fc .fc-button-primary {
    background-color: black;
    border-color: black;
    color: var(--fc-button-text-color);
  }

  /* 일정 셀 */
  .fc-daygrid-day-frame {
    overflow-y: auto;
    max-height: 50px;

    /* 스크롤바 */
    /* Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
      width: 13px;
    }
    ::-webkit-scrollbar-track {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #c2c2c2;
      border-radius: 10px;
      border: 3px solid #ffffff;
    }

    /* 이벤트 콘텐츠 */
    .fc-event-title-container {
      /* background-color: #dd9ae7; */
      background-color: balck;
      border: none;
      color: white;
      /* border-radius: 4px; */
    }
    .fc-event {
      /* background-color: #dd9ae7; */
      background-color: black;
      border: none;
      font-family: ${(props) => props.theme.fontFamily.Light};
      font-size: ${(props) => props.theme.fontSize.p};
      /* border-radius: 4px; */
    }
  }
`;
