import React from "react";
import LectureCameraContainer from "../../components/LectureCameraContainer";
import LectureChattingContainer from "../../components/LectureChattingContainer";
import LiveOptionContainer from "../../components/LiveOptionContainer";
import kurentoUtils from "kurento-utils";

import {
  SMainContainer,
  SLeftItemContainer,
  SRightItemContainer,
} from "./styles";

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
  // let ws = new WebSocket("wss://i8a802.p.ssafy.io:8443/groupcall");
  const ws = new WebSocket("wss://localhost:8443/groupcall");

  let participants = {};

  console.log(ws);
  /**
   * Creates a video element for a new participant
   *
   * @param {String} name - the name of the new participant, to be used as tag
   *                        name of the video element.
   *                        The tag of the new element will be 'video<name>'
   * @return
   */

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
