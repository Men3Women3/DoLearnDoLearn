import React from "react";
import defaultProfile from "../../assets/images/default_profile.png";
import startRankImg from "../../assets/images/rank/start_rank.svg";
import inputBubble from "../../assets/images/input_bubble.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
// import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <div style={{ display: "flex" }}>
          {/* 프로필 이미지 */}
          <img
            src={defaultProfile}
            alt="defaultProfile"
            style={{ width: 70, height: 70 }}
          />
          {/* 배지 / 이름 / 이메일 정보 */}
          <div>
            <img src={startRankImg} alt="start_rank_Img" />
            <span>김싸피</span>
            <p style={{ color: "#8E8E8E" }}>ssafyKing@naver.com</p>
          </div>
          {/* 선택항목 */}
        </div>

        <div>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faFaceSmile}
              flip="horizontal"
              style={{ color: "black" }}
            />
            <img src={inputBubble} alt="" />
          </div>

          <p>
            <FontAwesomeIcon icon={faLink} style={{ color: "black" }} />
            <span>Hellossafy@tistory.com</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faYoutube} style={{ color: "black" }} />
            <span>유튜브 채널 링크</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faInstagram} style={{ color: "black" }} />
            <span>instaSsafy</span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              style={{ color: "black" }}
            />
            <span>faceSsafy</span>
          </p>
        </div>
      </div>
      <button>프로필 수정</button>
    </div>
  );
};

export default Profile;
