import React from "react";
import { SContainer } from "./styles";

import defaultProfile from "../../assets/images/default_profile.png";
import startRankImg from "../../assets/images/rank/start_rank.svg";

import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faStaylinked } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    black: {
      main: "#000000",
      contrastText: "#fff",
    },
  },
});

const Profile = () => {
  return (
    <SContainer>
      <div className="profileContentContainer">
        <div style={{ display: "flex" }}>
          {/* 프로필 이미지 */}
          <img
            src={defaultProfile}
            alt="defaultProfile"
            style={{ height: "calc(1.5vw + 120px)" }}
          />
          <div style={{ marginLeft: "10px" }}>
            {/* 배지 + 이름 */}
            <div className="oneLineContainer">
              <img
                src={startRankImg}
                alt="start_rank_Img"
                style={{ height: "calc(1vw + 11px)" }}
              />
              <span style={{ fontSize: "calc(1vw + 11px)" }}>김싸피</span>
            </div>
            {/* 이메일 */}
            <p style={{ color: "#8E8E8E", fontSize: "calc(1vw + 5px)" }}>
              ssafyKing@naver.com
            </p>
            {/* 마일리지 바 */}
            <div></div>
          </div>
        </div>

        {/* 선택항목 */}
        <div className="subContainer">
          <div className="cd1tip">
            <FontAwesomeIcon
              icon={faIdCard}
              // flip="horizontal"
              style={{ color: "black", height: "calc(1vw + 15px)" }}
            />
            <span className="tip contentFont">
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

          <div style={{ display: "absolute" }}>
            <div className="oneLineContainer">
              <FontAwesomeIcon
                icon={faStaylinked}
                style={{ color: "black", height: "calc(1vw + 15px)" }}
              />
              <span>Hellossafy@tistory.com</span>
            </div>
            <div className="oneLineContainer">
              <FontAwesomeIcon
                icon={faSquareYoutube}
                style={{ color: "black", height: "calc(1vw + 15px)" }}
              />
              <span>유튜브 채널 링크</span>
            </div>
            <div className="oneLineContainer">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                style={{ color: "black", height: "calc(1vw + 15px)" }}
              />
              <span>instaSsafy</span>
            </div>
            <div className="oneLineContainer">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                style={{ color: "black", height: "calc(1vw + 15px)" }}
              />
              <span>faceSsafy</span>
            </div>
          </div>

          <ThemeProvider theme={theme}>
            <Button
              color="black"
              variant="contained"
              size="large"
              style={{ display: "block", margin: "auto" }}
            >
              <b>프로필 수정</b>
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </SContainer>
  );
};

export default Profile;
