import React, { useContext, useState } from "react";
import {
  SProfileContainer,
  SSubContainerUp,
  SSubContainerDown,
  SBlackButton,
  SSnsContainer,
} from "./styles";
import { Tooltip } from "@mui/material";

import defaultProfile from "../../assets/images/defaultProfile.png";
// import startRankImg from "../../assets/images/rank/start_rank.svg";

import blogImg from "../../assets/images/sns/blog.png";
import youtubeImg from "../../assets/images/sns/youtube.png";
import instagramImg from "../../assets/images/sns/instagram.png";
import facebookImg from "../../assets/images/sns/facebook.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import ProfileCardBox from "../ProfileCardBox";
import { baseURL } from "../../utils/api/baseURL";

const Profile = ({
  handleProfileEditBtn,
  // isProfileEditActive,
  user,
  userState,
}) => {
  // console.log("유저정보", user)
  const blog = user.blog;
  const youtube = user.youtube;
  const instagram = user.instagram;
  const facebook = user.facebook;

  // 받은 유저정보가 본인인지 확인하는 변수
  const isMe = userState === "me" ? true : false;

  return (
    <ProfileCardBox>
      <SProfileContainer>
        <SSubContainerUp>
          {/* 프로필 이미지 */}
          <img
            className="profile-img"
            src={user.imgUrl ? `${baseURL}${user.imgUrl}` : defaultProfile}
            alt="defaultProfile"
          />
          <section>
            <div className="info__container">
              <div>
                {/* 이름 */}
                <span>{user.name}</span>
                {/* 이메일 */}
                <p>{user.email}</p>
              </div>
              {/* SNS 아이콘 */}
              <SSnsContainer>
                {blog && (
                  <Tooltip
                    title={`${user.name}님의 블로그 바로가기`}
                    // placement="top"
                    followCursor
                  >
                    <a href={`${blog}`} target="_blank">
                      <img src={blogImg} />
                    </a>
                  </Tooltip>
                )}
                {youtube && (
                  <Tooltip
                    title={`${user.name}님의 유튜브 채널 바로가기`}
                    // placement="top"
                    // arrow
                    followCursor
                  >
                    <a href={`${user.youtube}`} target="_blank">
                      <img src={youtubeImg} />
                    </a>
                  </Tooltip>
                )}
                {instagram && (
                  <Tooltip
                    title={`${user.name}님의 인스타그램 바로가기`}
                    // placement="top"
                    // arrow
                    followCursor
                  >
                    <a
                      href={`https://www.instagram.com/${user.instagram}/`}
                      target="_blank"
                    >
                      <img src={instagramImg} />
                    </a>
                  </Tooltip>
                )}
                {facebook && (
                  <Tooltip
                    title={`${user.name}님의 페이스북 바로가기`}
                    // placement="top"
                    // arrow
                    followCursor
                  >
                    <a
                      href={`https://facebook.com/${user.facebook}/`}
                      target="_blank"
                    >
                      <img src={facebookImg} />
                    </a>
                  </Tooltip>
                )}
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
            <div className="tip">
              {user.info ? user.info : `반가워요:D \n${user.name}입니다~!!`}
            </div>
          </div>
          {/* 본인일 경우에만 프로필 수정 버튼 보이도록 */}
          {isMe ? (
            <SBlackButton onClick={handleProfileEditBtn}>
              프로필 수정
            </SBlackButton>
          ) : null}
        </SSubContainerDown>
      </SProfileContainer>
    </ProfileCardBox>
  );
};

export default Profile;
