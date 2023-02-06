import styled from "styled-components";

export const SOptionContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  /* background-color: #242424; */
  background-color: #dedede;
  text-align: center;
  margin: auto;
  width: 65%;
  margin-top: calc(0.8vw + 2px);
  border-radius: 8px 8px 0px 0px;
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
