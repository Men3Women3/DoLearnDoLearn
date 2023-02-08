import React, { useContext, useState } from "react";
import {
  SProfileContainer,
  SSubContainerUp,
  SSubContainerDown,
  SBlackButton,
  SSnsContainer,
  SSCard,
  SPointContainer,
} from "./styles";
import { Tooltip } from "@mui/material";

import defaultProfile from "../../assets/images/defaultProfile.png";

import blogImg from "../../assets/images/sns/blog.png";
import youtubeImg from "../../assets/images/sns/youtube.png";
import instagramImg from "../../assets/images/sns/instagram.png";
import facebookImg from "../../assets/images/sns/facebook.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { imageURL } from "../../utils/api/baseURL";
import walkingChick from "../../assets/images/walkingChick.gif";

const Profile = ({
  handleProfileEditBtn,
  // isProfileEditActive,
  user,
  userState,
  chick,
}) => {
  const blog = user.blog;
  const youtube = user.youtube;
  const instagram = user.instagram;
  const facebook = user.facebook;
  const point = user.point;
  // 테스트용
  // const point = 5000;
  // const point = 0;
  // const point = 2500;

  // 받은 유저정보가 본인인지 확인하는 변수
  const isMe = userState === "me" ? true : false;

  return (
    <>
      {/* <div style={{ width: "100%", height: "100px", backgroundColor: "aqua" }}> */}
      {/* <Lottie options={defaultOptions} width={500} /> */}
      {/* </div> */}
      <SSCard chick={chick}>
        <SProfileContainer>
          <SSubContainerUp>
            {/* 프로필 이미지 */}
            <img
              className="profile-img"
              src={user.imgUrl ? `${imageURL}${user.imgUrl}` : defaultProfile}
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
                        <img src={blogImg} alt="" />
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
                        <img src={youtubeImg} alt="" />
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
                        <img src={instagramImg} alt="" />
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
                        <img src={facebookImg} alt="" />
                      </a>
                    </Tooltip>
                  )}
                </SSnsContainer>
              </div>
              {/* 마일리지 바 */}
              <div>
                <SPointContainer point={point}>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    style={{
                      color: "black",
                      height: "calc(1vw + 1px)",
                    }}
                  />
                  <span className="point">{point}</span>
                </SPointContainer>

                <div className="wrapper"></div>
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
              <div className="button__section">
                <SBlackButton onClick={handleProfileEditBtn}>
                  프로필 수정
                </SBlackButton>
              </div>
            ) : null}
          </SSubContainerDown>
        </SProfileContainer>
      </SSCard>
    </>
  );
};

export default Profile;
