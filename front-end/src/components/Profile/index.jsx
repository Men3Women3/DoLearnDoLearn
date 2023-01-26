import React, { useContext, useState } from "react";
import {
  SProfileContainer,
  SSubContainerUp,
  SSubContainerDown,
  SBlackButton,
  SSnsContainer,
  SCustomToolTip,
} from "./styles";
import { Tooltip } from "@mui/material";

import profileImg from "../../assets/images/thumbnail.png";
// import startRankImg from "../../assets/images/rank/start_rank.svg";

import blogImg from "../../assets/images/sns/blog.png";
import youtubeImg from "../../assets/images/sns/youtube.png";
import instagramImg from "../../assets/images/sns/instagram.png";
import facebookImg from "../../assets/images/sns/facebook.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { LoginStateContext } from "../../App";

const Profile = (props) => {
  // context API에서 유저 정보 가져오기
  const getUserInfo = useContext(LoginStateContext);
  console.log(getUserInfo);

  return (
    <SProfileContainer>
      <SSubContainerUp>
        {/* 프로필 이미지 */}
        <img className="profile-img" src={profileImg} alt="defaultProfile" />
        <section>
          <div className="info__container">
            <div>
              {/* 이름 */}
              <span>{getUserInfo.userInfo.name}</span>
              {/* 이메일 */}
              <p>{getUserInfo.userInfo.email}</p>
            </div>
            {/* SNS 아이콘 */}
            <SSnsContainer>
              <Tooltip
                title={`${getUserInfo.userInfo.name}님의 블로그 바로가기`}
                // placement="top"
                followCursor
              >
                <a
                  // className="tooltip"
                  href={`https://${getUserInfo.userInfo.blog}`}
                  target="_blank"
                  // info={`${name}님의 블로그 바로가기`}
                >
                  <img src={blogImg} />
                </a>
              </Tooltip>
              <Tooltip
                title={`${getUserInfo.userInfo.name}님의 유튜브 채널 바로가기`}
                // placement="top"
                // arrow
                followCursor
              >
                <a
                  // className="tooltip"
                  href={`https://${getUserInfo.userInfo.youtube}`}
                  target="_blank"
                  // info={`${name}님의 유튜브 채널 바로가기`}
                >
                  <img src={youtubeImg} />
                </a>
              </Tooltip>
              <Tooltip
                title={`${getUserInfo.userInfo.name}님의 인스타그램 바로가기`}
                // placement="top"
                // arrow
                followCursor
              >
                <a
                  // className="tooltip"
                  href={`https://${getUserInfo.userInfo.instagram}`}
                  target="_blank"
                  // info={`${name}님의 인스타그램 바로가기`}
                >
                  <img src={instagramImg} />
                </a>
              </Tooltip>
              <Tooltip
                title={`${getUserInfo.userInfo.name}님의 페이스북 바로가기`}
                // placement="top"
                // arrow
                followCursor
              >
                <a
                  // className="tooltip"
                  href={`https://${getUserInfo.userInfo.facebook}`}
                  target="_blank"
                  // info={`${name}님의 페이스북 바로가기`}
                >
                  <img src={facebookImg} />
                </a>
              </Tooltip>
            </SSnsContainer>
          </div>
          {/* 마일리지 바 */}
          <div>
            <FontAwesomeIcon
              icon={faLocationPin}
              style={{
                color: "black",
                height: "calc(1vw + 1px)",
                marginTop: "10px",
              }}
            />
            <div className="wrapper">
              {/* <div
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
                ></div> */}
            </div>
          </div>
        </section>
      </SSubContainerUp>

      <SSubContainerDown>
        <div className="cd1tip">
          {/* <SFontAwesomeIconAtProfile icon={faIdCard} /> */}
          <div className="tip">{getUserInfo.userInfo.info}</div>
        </div>
        <SBlackButton onClick={props.handleProfileEditBtn}>
          프로필 수정
        </SBlackButton>
      </SSubContainerDown>
    </SProfileContainer>
  );
};

export default Profile;
