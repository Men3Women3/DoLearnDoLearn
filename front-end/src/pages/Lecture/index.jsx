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
