import React, { useState } from "react";
import LectureCameraContainer from "../../components/LectureCameraContainer";
import LectureChattingContainer from "../../components/LectureChattingContainer";
import LiveOptionContainer from "../../components/LiveOptionContainer";
import kurentoUtils from "kurento-utils";
// import "./sss.css";

import {
  SMainContainer,
  SRightItemContainer,
  SContainer,
  SStudentsContainer,
  SLecturerCameraContainer,
  SLecturerCamera,
  SLeftItemContainer,
  SOptionContainer,
} from "./styles";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginStateContext } from "../../App";

/*
 * (C) Copyright 2014 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const Lecture = () => {
  const location = useLocation();
  const { userInfo } = useContext(LoginStateContext);

  const [username, setUsername] = useState(userInfo.name);
  const [roomId, setRoomId] = useState(location.state.roomId);
  const [helpOnOff, setHelpOnOff] = useState(false);

  const ws = new WebSocket("wss://localhost:8443/groupcall");
  console.log(ws);

  var participants = {};
  var name = username;

  useEffect(() => {
    ws.onopen = () => {
      register(name, roomId);
    };
  }, []);

  const PARTICIPANT_MAIN_CLASS = "participant main";
  const PARTICIPANT_CLASS = "participant";

  /**
   * Creates a video element for a new participant
   *
   * @param {String} name - the name of the new participant, to be used as tag
   *                        name of the video element.
   *                        The tag of the new element will be 'video<name>'
   * @return
   */

  var rtcPeer;

  function Participant(name) {
    this.name = name;
    // 카메라를 담을 컨테이너 div 생성
    let container = document.createElement("div");
    // 컨테이너 클래스 이름 부여 (메인이면 큰 화면, 메인이 아니면 작은 화면)
    container.className = isPresentMainParticipant()
      ? PARTICIPANT_CLASS
      : PARTICIPANT_MAIN_CLASS;
    container.id = name;
    let span = document.createElement("span");
    span.className = "username_span";
    let video = document.createElement("video");
    this.rtcPeer = rtcPeer;

    container.appendChild(video);
    container.appendChild(span);
    container.onclick = switchContainerClass;
    document.getElementById("participants").appendChild(container);

    span.appendChild(document.createTextNode(name));

    video.id = "video-" + name;
    video.autoplay = true;
    video.controls = false;
    video.style.width = "calc(1vw + 150px)";
    // video.style.height = "120px";

    this.getElement = function () {
      return container;
    };

    this.getVideoElement = function () {
      return video;
    };

    function switchContainerClass() {
      if (container.className === PARTICIPANT_CLASS) {
        var elements = Array.prototype.slice.call(
          document.getElementsByClassName(PARTICIPANT_MAIN_CLASS)
        );
        elements.forEach(function (item) {
          item.className = PARTICIPANT_CLASS;
        });

        container.className = PARTICIPANT_MAIN_CLASS;
      } else {
        container.className = PARTICIPANT_CLASS;
      }
    }

    function isPresentMainParticipant() {
      return (
        document.getElementsByClassName(PARTICIPANT_MAIN_CLASS).length !== 0
      );
    }

    this.offerToReceiveVideo = function (error, offerSdp, wp) {
      if (error) return console.error("sdp offer error");
      console.log("Invoking SDP offer callback function");
      var msg = { id: "receiveVideoFrom", sender: name, sdpOffer: offerSdp };
      sendMessage(msg);
    };

    this.onIceCandidate = function (candidate, wp) {
      console.log("Local candidate" + JSON.stringify(candidate));

      var message = {
        id: "onIceCandidate",
        candidate: candidate,
        name: name,
      };
      sendMessage(message);
    };

    Object.defineProperty(this, "rtcPeer", { writable: true });

    this.dispose = function () {
      console.log("Disposing participant " + this.name);
      this.rtcPeer.dispose();
      container.parentNode.removeChild(container);
    };
  }

  window.onbeforeunload = function () {
    ws.close();
  };

  ws.onmessage = function (message) {
    var parsedMessage = JSON.parse(message.data);
    console.info("Received message: " + message.data);

    switch (parsedMessage.id) {
      case "joinRoom":
        onJoinRoom(parsedMessage);
        break;
      case "helpUser":
        handleHelpRequest(parsedMessage);
        break;
      case "existingParticipants":
        onExistingParticipants(parsedMessage);
        break;
      case "newParticipantArrived":
        onNewParticipant(parsedMessage);
        break;
      case "participantLeft":
        onParticipantLeft(parsedMessage);
        break;
      case "receiveVideoAnswer":
        receiveVideoResponse(parsedMessage);
        break;
      case "iceCandidate":
        participants[parsedMessage.name].rtcPeer.addIceCandidate(
          parsedMessage.candidate,
          function (error) {
            if (error) {
              console.error("Error adding candidate: " + error);
              return;
            }
          }
        );
        break;
      default:
        console.error("Unrecognized message", parsedMessage);
    }
  };

  function register(name, roomId) {
    document.getElementById("room-header").innerText = "ROOM " + roomId;
    document.getElementById("room").style.display = "block";

    var message = {
      id: "joinRoom",
      room: roomId,
      name: name,
    };
    sendMessage(message);

    return false;
  }

  function onNewParticipant(request) {
    receiveVideo(request.name);
  }

  function receiveVideoResponse(result) {
    participants[result.name].rtcPeer.processAnswer(
      result.sdpAnswer,
      function (error) {
        if (error) return console.error(error);
      }
    );
  }

  // function callResponse(message) {
  //   if (message.response !== "accepted") {
  //     console.info("Call not accepted by peer. Closing call");
  //     stop();
  //   } else {
  //     webRtcPeer.processAnswer(message.sdpAnswer, function (error) {
  //       if (error) return console.error(error);
  //     });
  //   }
  // }

  function onExistingParticipants(msg) {
    var constraints = {
      audio: true,
      video: {
        mandatory: {
          maxWidth: 320,
          maxFrameRate: 15,
          minFrameRate: 15,
        },
      },
    };
    console.log(name + " registered in room " + msg.room);
    var participant = new Participant(name);
    participants[name] = participant;
    var video = participant.getVideoElement();

    var options = {
      localVideo: video,
      mediaConstraints: constraints,
      onicecandidate: participant.onIceCandidate.bind(participant),
    };
    participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(
      options,
      function (error) {
        if (error) {
          return console.error(error);
        }
        this.generateOffer(participant.offerToReceiveVideo.bind(participant));
      }
    );

    msg.data.forEach(receiveVideo);
  }

  function leaveRoom() {
    sendMessage({
      id: "leaveRoom",
    });

    for (var key in participants) {
      participants[key].dispose();
    }

    document.getElementById("room").style.display = "none";

    ws.close();
  }

  function receiveVideo(sender) {
    var participant = new Participant(sender);
    participants[sender] = participant;
    var video = participant.getVideoElement();

    var options = {
      remoteVideo: video,
      onicecandidate: participant.onIceCandidate.bind(participant),
    };

    participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(
      options,
      function (error) {
        if (error) {
          return console.error(error);
        }
        this.generateOffer(participant.offerToReceiveVideo.bind(participant));
      }
    );
  }

  function onParticipantLeft(request) {
    console.log("Participant " + request.name + " left");
    var participant = participants[request.name];
    participant.dispose();
    delete participants[request.name];
  }

  function sendMessage(message) {
    var jsonMessage = JSON.stringify(message);
    console.log("Sending message: " + jsonMessage);
    ws.send(jsonMessage);
  }

  const vidOnOff = () => {
    if (participants[username].rtcPeer.videoEnabled) {
      participants[username].rtcPeer.videoEnabled = false;
      document.getElementById("vidOn").style.display = "none";
      document.getElementById("vidOff").style.display = "";
    } else {
      participants[username].rtcPeer.videoEnabled = true;
      document.getElementById("vidOn").style.display = "";
      document.getElementById("vidOff").style.display = "none";
    }
  };

  const audOnOff = () => {
    if (participants[username].rtcPeer.audioEnabled) {
      participants[username].rtcPeer.audioEnabled = false;
      document.getElementById("audOn").style.display = "none";
      document.getElementById("audOff").style.display = "";
    } else {
      participants[username].rtcPeer.audioEnabled = true;
      document.getElementById("audOn").style.display = "";
      document.getElementById("audOff").style.display = "none";
    }
  };

  const handleOnClickHelpRequest = () => {
    let message = {
      id: "helpUser",
      name: name,
    };
    sendMessage(message);
  };

  const handleHelpRequest = (request) => {
    const targetUser = request.name;

    const userVideo = document.getElementById("video-" + targetUser);

    if (!userVideo.classList.contains("help")) {
      userVideo.classList.add("help");
      document.getElementById("helpOn").style.display = "none";
      document.getElementById("helpOff").style.display = "";
    } else {
      userVideo.classList.remove("help");
      document.getElementById("helpOn").style.display = "";
      document.getElementById("helpOff").style.display = "none";
    }
  };

  const onJoinRoom = (request) => {
    const chattingContentContainer =
      document.getElementById("chatting-Content");
    const entranceContent = document.createElement("p");
    entranceContent.className = "entrance";
    entranceContent.innerText = `${request.name} 님이 접속했습니다.`;
    chattingContentContainer.appendChild(entranceContent);
  };

  return (
    <>
      <SMainContainer>
        <SLeftItemContainer>
          <SContainer>
            <SStudentsContainer>
              <div id="container">
                <div id="wrapper">
                  <div id="room" style={{ display: "none" }}>
                    <h2 id="room-header" style={{ display: "none" }}></h2>
                    <div id="participants"></div>
                  </div>
                </div>
              </div>
            </SStudentsContainer>
            <SLecturerCameraContainer>
              <SLecturerCamera></SLecturerCamera>
            </SLecturerCameraContainer>
          </SContainer>
          <LiveOptionContainer
            leaveRoom={leaveRoom}
            vidOnOff={vidOnOff}
            audOnOff={audOnOff}
            // handleHelpRequest={handleHelpRequest}
            handleOnClickHelpRequest={handleOnClickHelpRequest}
          />
        </SLeftItemContainer>
        <SRightItemContainer>
          <LectureChattingContainer></LectureChattingContainer>
        </SRightItemContainer>
      </SMainContainer>
    </>
  );
};

export default Lecture;
