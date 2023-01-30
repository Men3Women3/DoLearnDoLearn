import React from "react";
import {
  SContainer,
  SStudentsContainer,
  SLecturerCameraContainer,
  SLecturerCamera,
  SOptionContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faVideo,
  faVideoSlash,
  faMicrophone,
  faMicrophoneSlash,
  faComment,
  faCommentSlash,
} from "@fortawesome/free-solid-svg-icons";
import CastIcon from "@mui/icons-material/Cast";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LectureCameraContainer = () => {
  return (
    <SContainer>
      <SStudentsContainer>
        <div className="first-user">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div className="last-user">5</div>
      </SStudentsContainer>
      <SLecturerCameraContainer>
        <SLecturerCamera></SLecturerCamera>
      </SLecturerCameraContainer>
    </SContainer>
  );
};

export default LectureCameraContainer;
