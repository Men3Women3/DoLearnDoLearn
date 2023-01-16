import React from "react"
import { Scontainer } from "./styles"

import defaultProfile from "../../assets/images/default_profile.png"
import startRankImg from "../../assets/images/rank/start_rank.svg"

import { Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdCard } from "@fortawesome/free-solid-svg-icons"
import { faStaylinked } from "@fortawesome/free-brands-svg-icons"
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"

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
})

const Profile = () => {
  return (
    <Scontainer>
      <div>
        <div style={{ display: "flex" }}>
          {/* 프로필 이미지 */}
          <img
            src={defaultProfile}
            alt="defaultProfile"
            style={{ width: 90, height: 90 }}
          />
          {/* 배지 / 이름 / 이메일 정보 */}
          <div>
            <img
              src={startRankImg}
              alt="start_rank_Img"
              style={{ width: "20px" }}
            />
            <span>김싸피</span>
            <p style={{ color: "#8E8E8E" }}>ssafyKing@naver.com</p>
          </div>
          {/* 선택항목 */}
        </div>

        <div className="cd1tip">
          <FontAwesomeIcon
            icon={faIdCard}
            // flip="horizontal"
            style={{ color: "black" }}
            size="2x"
          />
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
            <br />- 미리대학원 중어중문학 석사
            <br />
            - 미리대학원 중어중문학 박사
            <br />- 미리에듀 중국어 재수강 강의 1위
          </span>
        </div>

        <div style={{ display: "absolute" }}>
          <p>
            <FontAwesomeIcon
              icon={faStaylinked}
              style={{ color: "black" }}
              size="2x"
            />
            <span>Hellossafy@tistory.com</span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faSquareYoutube}
              style={{ color: "black" }}
              size="2x"
            />
            <span>유튜브 채널 링크</span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faSquareInstagram}
              style={{ color: "black" }}
              size="2x"
            />
            <span>instaSsafy</span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              style={{ color: "black" }}
              size="2x"
            />
            <span>faceSsafy</span>
          </p>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <Button color="black" variant="contained">
          프로필 수정
        </Button>
      </ThemeProvider>
    </Scontainer>
  )
}

export default Profile
