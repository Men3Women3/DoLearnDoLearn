import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/thumbnail.png";
import { useEffect } from "react";

// import startRankImg from "../../assets/images/rank/start_rank.svg";

const defaultURL = "http://localhost:3000";

const Navbar = () => {
  const [isLogined, setIsLogined] = useState(true);
  const navigate = useNavigate();

  // localStorage에 엑세스 토큰의 존재여부를 확인하여 로그인 / 비로그인 상태를 구분
  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.replace(defaultURL);
  };

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
            <span style={{ margin: "auto 0 auto 5px", cursor: "pointer" }}>
              김싸피
            </span>
          </NavLink>
        )}
        {isLogined && (
          <FontAwesomeIcon className="unread__notification" icon={faBell} />
        )}
        <div className="user-state">
          {isLogined ? (
            <>
              <p className="link logout" onClick={logout}>
                로그아웃
              </p>
            </>
          ) : (
            <>
              <Link to={"/login"} className="link user-state">
                로그인
              </Link>
              <span>|</span>
              <Link to={"/signup"} className="link user-state">
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
