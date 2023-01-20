import styled from "styled-components"

export const SCalendar = styled.div`
  /* 일자에 커서 올리면 포인트로 만들기 */
  .fc-event-title {
    cursor: pointer;
  }

  /* 현재 날짜 셀 */
  .fc-day-today {
    background: white !important;
    /* border: none !important; */

    /* 후보 3 */
    /* background: ${(props) => props.theme.lightYellow} !important; */

    /* 현재 날짜 셀의 우측상단 날짜 */
    .fc-daygrid-day-number {
      /* 후보 1 */
      /* border: 2px solid black; */

      /* 후보 2 */
      /* background-color: black; */
      background-color: #ff9898;
      color: white;
      border-radius: 50%;
    }
    .fc-col-header-cell-cushion {
      background-color: #ffb3b3;
      border-radius: 20px;
      color: white;
    }
  }

  /* 일요일 날짜: 빨간색 */
  .fc-day-sun a {
    color: #f87b7b;
  }
  /* 토요일 날짜: 파란색 */
  .fc-day-sat a {
    color: #6767fe;
  }

  /* 달력 타이틀 */
  .fc-toolbar-title {
    font-family: ${(props) => props.theme.fontFamily.ExtraBold};
    font-size: ${(props) => props.theme.fontSize.h1} !important;
    /* font-size: calc(2vw + 1px); */
  }

  /* 달력 타이틀 옆 버튼 */
  .fc-button {
    font-family: ${(props) => props.theme.fontFamily.Medium};
    font-size: ${(props) => props.theme.fontSize.p} !important;
  }
  /* 버튼 활성일 때 */
  .fc .fc-button-primary:not(:disabled).fc-button-active,
  .fc .fc-button-primary:not(:disabled):active {
    background-color: ${(props) => props.theme.deeperYellow};
    border-color: ${(props) => props.theme.deeperYellow};
    color: white;
  }
  /* 비활성일 때 */
  .fc .fc-button-primary {
    background-color: #ffffff;
    border-color: ${(props) => props.theme.deeperYellow};
    /* border-color: var(--fc-button-active-border-color); */
    color: ${(props) => props.theme.deeperYellow};
  }
  .fc .fc-prev-button {
    background-color: #ffffff;
    border-color: ${(props) => props.theme.deeperYellow};
    color: ${(props) => props.theme.deeperYellow};
  }
  .fc .fc-next-button {
    background-color: #ffffff;
    border-color: ${(props) => props.theme.deeperYellow};
    color: ${(props) => props.theme.deeperYellow};
  }
  .fc .fc-today-button {
    background-color: #ffebd2;
    border-color: #ffebd2;
    color: #f88d00;
  }
  .fc .fc-button-primary:disabled {
    background-color: #fd9e23;
    border-color: #fd9e23;
    color: #ffebd2;
  }

  /* 일자 */
  .fc-daygrid-day-number {
    font-size: ${(props) => props.theme.fontSize.p};
  }

  /* 요일 */
  .fc-col-header {
    /* background-color: #e8e8e8; */
    font-size: ${(props) => props.theme.fontSize.p};
  }

  /* 일정 셀 */
  .fc-daygrid-day-frame {
    overflow-y: auto;
    max-height: 50px;

    /* 스크롤바 */
    /* Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
      width: 12px;
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
`
