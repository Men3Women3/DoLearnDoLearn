import styled from "styled-components";

export const SContainer = styled.div`
  /* transition: all 300ms linear; */
  /* position: absolute; */
  /* right: 20px; */
  min-width: 400px;
  background-color: white;
  padding: 12px 18px;
  border-radius: 20px;
  border: 4px solid #f4e3b4;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  .header {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    p {
      margin-top: 0px;
    }
  }
  .todaySchedule__clock {
    margin-right: 4px;
  }
  .todaySchedule {
    /* overflow-y: auto; */
    max-height: 190px;
    .todaySchedule__item {
      border-radius: 8px;
      padding: 6px 8px;
      padding-right: 12px;
      background-color: #fffaec;
      font-size: 10px;
      margin-bottom: 12px;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 10px;
          margin-bottom: 0px;
        }
        button {
          font-size: 10px;
          font-weight: bold;
          border: none;
          border-radius: 20px;
          background-color: #f3bd2a;
          padding: 6px 14px;
        }
      }
    }
  }
  .boundary {
    text-align: center;
    margin: auto;
    margin-top: 14px;
    margin-bottom: 14px;
    height: 2px;
    width: 100%;
    background-color: black;
  }

  .totalSchedule__header {
    font-size: 14px;
    margin-top: 0px;
  }
  .totalSchedule__calendar {
    margin-right: 4px;
  }
  .totalSchedule {
    max-height: 190px;
    .totalSchedule__item {
      border-radius: 8px;
      padding: 6px 8px;
      padding-right: 12px;
      background-color: #fffaec;
      font-size: 10px;
      margin-bottom: 12px;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 10px;
          margin-bottom: 0px;
        }
        button {
          font-size: 10px;
          font-weight: bold;
          border: none;
          border-radius: 20px;
          background-color: #f3bd2a;
          padding: 6px 14px;
        }
      }
    }
  }
`;
