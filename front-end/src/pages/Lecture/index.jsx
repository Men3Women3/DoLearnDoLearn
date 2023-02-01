import React from "react";
import LectureCameraContainer from "../../components/LectureCameraContainer";
import LectureChattingContainer from "../../components/LectureChattingContainer";
import LiveOptionContainer from "../../components/LiveOptionContainer";
import {
  SMainContainer,
  SLeftItemContainer,
  SRightItemContainer,
} from "./styles";

const Lecture = () => {
  const ws = new WebSocket("wss://localhost:8443/groupcall");
  console.log(ws);
  return (
    <SMainContainer>
      <SLeftItemContainer>
        <LectureCameraContainer></LectureCameraContainer>
        <LiveOptionContainer />
      </SLeftItemContainer>
      <SRightItemContainer>
        <LectureChattingContainer></LectureChattingContainer>
      </SRightItemContainer>
    </SMainContainer>
  );
};

export default Lecture;
