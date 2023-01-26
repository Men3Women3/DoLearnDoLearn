import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/thumbnail.png";

// import startRankImg from "../../assets/images/rank/start_rank.svg";

const Navbar = () => {
  const [isLogined, setIsLogined] = useState(false);

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
        {
          // isLogined &&
          <NavLink className="link username">
            <img src={profileImg} alt="profileImg" />
            <span style={{ margin: "auto 0 auto 5px", cursor: "pointer" }}>
              김싸피
            </span>
            {/* <img src={startRankImg} alt="start_rank_Img" /> */}
          </NavLink>
        }
        {
          // isLogined &&
          <FontAwesomeIcon className="unread__notification" icon={faBell} />
        }
        <div className="user-state">
          {isLogined ? (
            <>
              <p className="link">로그아웃</p>
            </>
          ) : (
            <>
              <Link to={"/login"} className="link user-state">
                로그인
              </Link>
              <span>|</span>
              <Link to={"signup"} className="link user-state">
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
