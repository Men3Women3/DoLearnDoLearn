import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/thumbnail.png";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { LoginStateContext, LoginStateHandlerContext } from "../../App";

// import startRankImg from "../../assets/images/rank/start_rank.svg";

const defaultURL = "http://localhost:3000";

const Navbar = () => {
  // context api를 통해 로그인 상태 받아오기
  const { isLogined, userInfo } = useContext(LoginStateContext);
  // context api를 통해 로그인 상태 관리 함수들 받아오기
  const { handleIsLogined, handleLogout } = useContext(
    LoginStateHandlerContext
  );

  return (
    <Box>
      <div className="left-item">
        <NavLink to={"/"}>
          <img src={logoImg} alt="logo" />
        </NavLink>
        <NavLink to={"/board"} className="link link__board">
          공부방
        </NavLink>
        <NavLink className="link link__board">이용안내</NavLink>
      </div>
      <div className="right-item">
        {isLogined && (
          <NavLink to={"/mypage"} className="link username">
            <img src={profileImg} alt="profileImg" />
            <span
              style={{
                margin: "auto calc(1vw + 1px) auto 5px",
                cursor: "pointer",
              }}
            >
              {userInfo.name}
            </span>
          </NavLink>
        )}
        {isLogined && (
          <div className="unread-container">
            <FontAwesomeIcon className="unread__notification" icon={faBell} />
            <div className="unread-message"></div>
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
              <span>|</span>
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
