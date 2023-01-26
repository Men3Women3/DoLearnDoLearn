import styled from "styled-components";

export const SContainer = styled.section`
  width: 75%;
`;

export const SStudentsContainer = styled.div`
  display: flex;
  text-align: center;
  height: 20%;
  div {
    background-color: white;
    width: 20%;
    margin: 16px 6px;
    border-radius: 4px;
  }
  .first-user {
    margin-left: 16px;
  }
  .last-user {
    margin-right: 16px;
  }
`;

export const SLecturerCameraContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
`;

export const SLecturerCamera = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 4px;
  margin: 0px 12px;
`;

export const SOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  select {
    border: none;
    background-color: transparent;
    outline: none;
  }
  .icon {
    width: calc(1vw + 10px);
    height: calc(1vh + 10px);
  }
  .big-icon {
    width: calc(1vw + 10px);
    height: calc(1vh + 10px);
  }
  .camera-icon {
    transform: translateX(32px);
  }
  .mike-icon {
    transform: translateX(32px);
  }
  .exit-button:hover {
    background-color: #e53e3e;
    .exit-icon {
      color: white;
    }
  }
  button {
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
    background-color: #d9d9d9;
    width: 10%;
    height: 10%;
    border-radius: 20px;
    padding: 10px;
  }
`;
