import React from "react";
import { SOptionContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faVideo,
  faVideoSlash,
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faHand as faRegularHand } from "@fortawesome/free-regular-svg-icons";
import CastIcon from "@mui/icons-material/Cast";
import CastConnectedIcon from "@mui/icons-material/CastConnected";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router";

const LiveOptionContainer = (props) => {
  const navigate = useNavigate();

  const handleMoveToHome = () => {
    props.leaveRoom();
    navigate("/");
  };

  return (
    <SOptionContainer>
      <button
        id="helpOff"
        style={{ display: "none" }}
        onClick={(e) => props.handleOnClickHelpRequest(e)}
      >
        <FontAwesomeIcon className="icon" icon={faRegularHand} />
      </button>
      <button id="helpOn" onClick={(e) => props.handleOnClickHelpRequest(e)}>
        <FontAwesomeIcon className="icon" icon={faHand} />
      </button>
      <button
        id="vidOff"
        onClick={(e) => props.vidOnOff(e)}
        style={{ display: "none" }}
      >
        <FontAwesomeIcon className="icon camera-icon" icon={faVideo} />
      </button>
      <button id="vidOn" onClick={(e) => props.vidOnOff(e)}>
        <FontAwesomeIcon className="icon camera-icon" icon={faVideoSlash} />
      </button>
      <button
        id="audOff"
        onClick={(e) => props.audOnOff(e)}
        style={{ display: "none" }}
      >
        <FontAwesomeIcon className="icon mike-icon" icon={faMicrophone} />
      </button>
      <button id="audOn" onClick={(e) => props.audOnOff(e)}>
        <FontAwesomeIcon className="icon mike-icon" icon={faMicrophoneSlash} />
      </button>
      <button style={{ display: "none" }}>
        <CastIcon className="icon big-icon" />
      </button>
      <button>
        <CastConnectedIcon className="icon big-icon" />
      </button>
      <button className="exit-button" onClick={handleMoveToHome}>
        <ExitToAppIcon className="icon big-icon exit-icon" />
      </button>
    </SOptionContainer>
  );
};

export default LiveOptionContainer;
