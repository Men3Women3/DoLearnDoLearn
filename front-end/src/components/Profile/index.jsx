import React, { useState } from "react"
import {
  SProfileContainer,
  SSubContainerUp,
  SSubContainerDown,
  SBlackButton,
  SSnsContainer,
  SCustomToolTip,
} from "./styles"
import { Tooltip } from "@mui/material"

import profileImg from "../../assets/images/thumbnail.png"
// import startRankImg from "../../assets/images/rank/start_rank.svg";

import blogImg from "../../assets/images/sns/blog.png"
import youtubeImg from "../../assets/images/sns/youtube.png"
import instagramImg from "../../assets/images/sns/instagram.png"
import facebookImg from "../../assets/images/sns/facebook.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"

const Profile = (props) => {
  const [name, setName] = useState("김싸피")
  const [email, setEmail] = useState("ssafyKing@naver.com")
  const [selfInfo, setSelfInfo] = useState("")
  const [blogLink, setBlogLink] = useState("https://www.tistory.com/")
  const [youtubeLink, setYoutubeLink] = useState(
    "https://www.youtube.com/@hellossafy"
  )
  const [instagram, setInstagram] = useState("hellossafy")
  const [facebook, setFacebook] = useState("hellossafy")

  return (
    <SProfileContainer>
      <SSubContainerUp>
        {/* 프로필 이미지 */}
        <img className="profile-img" src={profileImg} alt="defaultProfile" />
        <section>
          <div className="info__container">
            <div>
              {/* 이름 */}
              <span>{name}</span>
              {/* 이메일 */}
              <p>{email}</p>
            </div>
            {/* SNS 아이콘 */}
            <SSnsContainer>
              <Tooltip
                title={`${name}님의 블로그 바로가기`}
                placement="top"
                arrow
              >
                <a
                  // className="tooltip"
                  href={blogLink}
                  target="_blank"
                  // info={`${name}님의 블로그 바로가기`}
                >
                  <img src={blogImg} />
                </a>
              </Tooltip>
              <Tooltip
                title={`${name}님의 유튜브 채널 바로가기`}
                placement="top"
                arrow
              >
                <a
                  // className="tooltip"
                  href={youtubeLink}
                  target="_blank"
                  // info={`${name}님의 유튜브 채널 바로가기`}
                >
                  <img src={youtubeImg} />
                </a>
              </Tooltip>
              <Tooltip
                title={`${name}님의 인스타그램 바로가기`}
                placement="top"
                arrow
              >
                <a
                  // className="tooltip"
                  href={`https://www.instagram.com/${instagram}/`}
                  target="_blank"
                  // info={`${name}님의 인스타그램 바로가기`}
                >
                  <img src={instagramImg} />
                </a>
              </Tooltip>
              <Tooltip
                title={`${name}님의 페이스북 바로가기`}
                placement="top"
                arrow
              >
                <a
                  // className="tooltip"
                  href={`https://www.facebook.com/${facebook}/`}
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
            <br />
            안녕하세요.싸피입니다........................................
          </span>
        </div>
        <SBlackButton onClick={props.handleProfileEditBtn}>
          프로필 수정
        </SBlackButton>
      </SSubContainerDown>
    </SProfileContainer>
  )
}

export default Profile
