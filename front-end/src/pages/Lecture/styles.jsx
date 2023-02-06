import styled from "styled-components";

export const SMainContainer = styled.main`
  display: flex;
  width: 100%;
  /* height: 100%; */
  background-color: white;
  /* background: rgb(255, 232, 154);
  background: linear-gradient(
    90deg,
    rgba(255, 232, 154, 1) 25%,
    rgba(255, 153, 98, 1) 100%
  ); */
  .participant {
    text-align: center;
    position: relative;
    margin: 0px calc(1vw);
    margin-bottom: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    /* transform: translateX(-3vw); */
  }
  #participants {
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    height: 37.5vw;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 0;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.deepYellow};
      border-radius: 12px;
      border: 1px solid #f0f0f0;
    }
  }
  video {
    border-radius: 12px;
    border: 5px solid transparent;
    cursor: pointer;
    /* object-fit: fill; */
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
      border: 5px solid #ff7979;
    }

    100% {
      border: 5px solid transparent;
    }
  }

  #container {
    height: calc(1vw + 130px);
    margin-bottom: calc(0.5vw + 2px);
  }
  #lectuerer {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100%; */
  }
  .main {
    width: 45rem;
    /* width: 1000px;
    height: 450px; */
  }
  .sub {
    width: 12rem;
  }
  .mainScreen {
    width: 90%;
    height: 100%;
  }
  .subScreen {
    width: calc(1vw + 185px);
  }
`;

export const SHeader = styled.div`
  .logo {
    width: 8vw;
    margin-left: 1vw;
    margin-top: 1vw;
  }
`;

export const SLeftItemContainer = styled.div`
  position: relative;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SRightItemContainer = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
  margin: 0 2vw;
`;

export const SContainer = styled.section`
  /* height: 85%; */
  height: calc(9vw + 490px);
  width: 100%;
  /* margin-top: calc(1vw + 8px); */
  display: flex;
  /* flex-direction: row-reverse; */

  /* margin: calc(1vw + 8px) 0px; */
`;

export const SStudentsContainer = styled.div`
  /* height: 20%; */
  /* div {
    background-color: white;
    width: 20%;
    margin: calc(1vh + 12px) calc(0.5vw + 2px);
    margin-top: 0px;
    border-radius: 12px;
  } */
  transform: translateX(-3vw);
  margin-top: 1vw;
`;

export const SLecturerCameraContainer = styled.div`
  width: 100%;
  /* height: 80%; */
  display: flex;
  justify-content: center;
`;

export const SLecturerCamera = styled.div`
  width: 100%;
  /* height: 97%; */
  /* background-color: white; */
  border-radius: 12px;
  margin: 0px calc(0.5vw + 2px);
  display: flex;
  justify-content: center;
  align-items: center;
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
