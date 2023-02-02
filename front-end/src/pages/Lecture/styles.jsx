import styled from "styled-components";

export const SMainContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  /* background-color: black; */
  background: rgb(255, 232, 154);
  background: linear-gradient(
    90deg,
    rgba(255, 232, 154, 1) 25%,
    rgba(255, 153, 98, 1) 100%
  );
  .participant {
    position: relative;
    margin: 0px calc(1vw + 20px);
  }
  #participants {
    display: flex;
    justify-content: center;
  }
  video {
    border-radius: 12px;
    border: 5px solid transparent;
  }
  .username_span {
    position: absolute;
    bottom: -2px;
    right: -7px;
    background-color: white;
    padding: 3px;
    border-radius: 4px;
  }
  .help {
    animation: help 500ms infinite;
  }
  @keyframes help {
    0% {
      border: 5px solid transparent;
    }

    50% {
      border: 5px solid ${(props) => props.theme.lighterYellow};
    }

    100% {
      border: 5px solid transparent;
    }
  }

  #container {
    margin-top: calc(0.5vw + 1px);
    margin-bottom: calc(1vw + 16px);
  }
`;

export const SLeftItemContainer = styled.div`
  position: relative;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SRightItemContainer = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
`;

export const SContainer = styled.section`
  height: 85%;
  width: 100%;
  /* margin: calc(1vw + 8px) 0px; */
`;

export const SStudentsContainer = styled.div`
  height: 20%;
  /* div {
    background-color: white;
    width: 20%;
    margin: calc(1vh + 12px) calc(0.5vw + 2px);
    margin-top: 0px;
    border-radius: 12px;
  } */
`;

export const SLecturerCameraContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

export const SLecturerCamera = styled.div`
  width: 100%;
  height: 97%;
  background-color: white;
  border-radius: 12px;
  margin: 0px calc(0.5vw + 2px);
`;

export const SOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #242424; */
  background-color: #fffbe6;
  text-align: center;
  margin: auto;
  width: 65%;
  margin-top: calc(0.8vw + 2px);
  border-radius: 8px;
  button {
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: calc(0.5vw + 2px);
    background-color: transparent;
    width: 10%;
    height: 10%;
    border-radius: 8px;
    padding: calc(0.8vw + 2px) calc(1vh + 12px);
    border: none;
    outline: none;
  }
  button:hover {
    background-color: #ffc07d;
    .icon {
      /* color: ${(props) => props.theme.deeperYellow}; */
      color: white;
    }
  }
  /* select {
    border: none;
    background-color: transparent;
    outline: none;
  } */
  .icon {
    width: calc(1vw + 12px);
    height: calc(1vh + 12px);
    color: #7e7e7e;
  }
  /* .big-icon {
    width: calc(1vw + 12px);
    height: calc(1vh + 12px);
  } */
  /* .camera-icon {
    transform: translateX(32px);
  }
  .mike-icon {
    transform: translateX(32px);
  } */
  .exit-button:hover {
    background-color: #e53e3e;
    opacity: 1;
    .exit-icon {
      color: white;
    }
  }
`;
