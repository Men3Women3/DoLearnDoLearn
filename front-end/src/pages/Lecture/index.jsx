import React from "react";
import LectureCameraContainer from "../../components/LectureCameraContainer";
import LectureChattingContainer from "../../components/LectureChattingContainer";
import { SMainContainer } from "./styles";

const Lecture = () => {
  return (
    <SMainContainer>
      <LectureCameraContainer></LectureCameraContainer>
      <LectureChattingContainer></LectureChattingContainer>
    </SMainContainer>
  );
};

export default Lecture;
