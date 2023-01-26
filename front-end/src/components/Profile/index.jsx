import React from "react";
import {
  SProfileContainer,
  SSubContainerUp,
  SSubContainerDown,
  SOneLineContainer,
  SFontAwesomeIconAtProfile,
  SBlackButton,
} from "./styles";

import profileImg from "../../assets/images/thumbnail.png";
// import startRankImg from "../../assets/images/rank/start_rank.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faStaylinked } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const Profile = (props) => {
  const handleEditProfile = () => {
    props.setValue(!props.value);
  };

  return (
    <SProfileContainer>
      <div className="profileContentContainer">
        <SSubContainerUp>
          {/* 프로필 이미지 */}
          <img className="profileImg" src={profileImg} alt="defaultProfile" />
          <section>
            {/* 배지 + 이름 */}
            <SOneLineContainer>
              {/* <img
                src={startRankImg}
                alt="start_rank_Img"
                style={{ height: "calc(1vw + 5px) !important" }}
              /> */}
              <span>김싸피</span>
            </SOneLineContainer>
            {/* 이메일 */}
            <p>ssafyKing@naver.com</p>
            {/* 마일리지 바 */}
            <div>
              <FontAwesomeIcon
                icon={faLocationPin}
                style={{
                  color: "#24E843",
                  height: "calc(1vw + 10px) !important",
                }}
              />
              <div className="wrapper">
                <div
                  style={{
                    backgroundColor: "#24E843",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#9f551c",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#DCD7D4",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#FFD258",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#FF0C63",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                ></div>
              </div>
            </div>
          </section>
        </SSubContainerUp>

        {/* 선택항목 */}
        <SSubContainerDown>
          <div className="cd1tip">
            <SFontAwesomeIconAtProfile icon={faIdCard} />
            <span className="tip">
              안녕하세요.싸피입니다...................................
              <br />- 미리대학원 중어중문학 석사
              <br />
              - 미리대학원 중어중문학 박사
              <br />- 미리에듀 중국어 재수강 강의 1위
              <br />
              안녕하세요.싸피입니다.....................................
              <br />- 미리대학원 중어중문학 석사
              <br />
              - 미리대학원 중어중문학 박사
              <br />- 미리에듀 중국어 재수강 강의 1위
              <br />
              안녕하세요.싸피입니다........................................
            </span>
          </div>

          <section>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faStaylinked} />
              <a href="#">Hellossafy@tistory.com</a>
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareYoutube} />
              <a href="#">유튜브 채널 링크</a>
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareInstagram} />
              <a href="#">instaSsafy</a>
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareFacebook} />
              <a href="#">faceSsafy</a>
            </SOneLineContainer>
          </section>
          {/* {props.textValue} */}
          <SBlackButton onClick={handleEditProfile}>프로필 수정</SBlackButton>
        </SSubContainerDown>
      </div>
    </SProfileContainer>
  );
};

export default Profile;
