import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Box } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logoImg from "../../assets/images/logo.png";
import defaultProfile from "../../assets/images/defaultProfile.png";

import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import {
  LoginStateContext,
  LoginStateHandlerContext,
  UnreadMessageContext,
} from "../../App";
import { Badge } from "@mui/material";
import { NotificationsNone } from "@mui/icons-material";

// import startRankImg from "../../assets/images/rank/start_rank.svg";

const Navbar = () => {
  // context api를 통해 로그인 상태 받아오기
  const { isLogined, userInfo } = useContext(LoginStateContext);
  const getUserInfo = useContext(LoginStateContext);
  const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

  // context api를 통해 로그인 상태 관리 함수들 받아오기
  const { handleIsLogined, handleLogout } = useContext(
    LoginStateHandlerContext
  );
  const { unreadMessageCnt, setStateMessageUpdate } =
    useContext(UnreadMessageContext);
  const navigate = useNavigate();

  // 종(bell) 아이콘 눌렀을 때 메시지함으로 이동
  const handleMoveToMessage = () => {
    navigate("/mypage", {
      state: {
        message: "message",
      },
    });
  };

  return (
    <Box>
      <div className="left-item">
        <NavLink to={"/"}>
          <img src={logoImg} alt="logo" />
        </NavLink>
        <NavLink to={"/board"} className="link link__board">
          강의장
        </NavLink>
        <NavLink className="link link__board">이용안내</NavLink>
      </div>
      <div className="right-item">
        {isLogined && (
          <NavLink to={"/mypage"} className="link username">
            <img
              src={
                getUserInfo.userInfo.imgUrl
                  ? `${IMAGE_URL}${getUserInfo.userInfo.imgUrl}`
                  : defaultProfile
              }
              alt="profileImg"
            />
            <span
              style={{
                margin: "auto 10px auto 5px",
                cursor: "pointer",
              }}
            >
              {userInfo.name}
            </span>
          </NavLink>
        )}
        {isLogined && (
          <div className="unread-container">
            <Badge
              // variant="dot"
              badgeContent={unreadMessageCnt}
              color="warning"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <FontAwesomeIcon
                className="unread__notification"
                icon={faBell}
                onClick={handleMoveToMessage}
              />
            </Badge>
          </div>
        )}

        <div className="user-state">
          {isLogined ? (
            <>
              <p className="link logout" onClick={handleLogout}>
                로그아웃
              </p>
            </>
          ) : (
            <>
              <Link to={"/login"} className="link user-state-nuLogined">
                로그인
              </Link>
              <span id="division">|</span>
              <Link to={"/signup"} className="link user-state-nuLogined">
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
