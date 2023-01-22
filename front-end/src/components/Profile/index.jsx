import React, { useState } from "react"
import {
  SProfileContainer,
  SSubContainerUp,
  SSubContainerDown,
  SOneLineContainer,
  SFontAwesomeIconAtProfile,
  SBlackButton,
} from "./styles"

import profileImg from "../../assets/images/thumbnail.png"
// import startRankImg from "../../assets/images/rank/start_rank.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { faIdCard } from "@fortawesome/free-solid-svg-icons"
import { faStaylinked } from "@fortawesome/free-brands-svg-icons"
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"

const Profile = (props) => {
  const [name, setName] = useState("김싸피")
  const [email, setEmail] = useState("ssafyKing@naver.com")
  const [selfInfo, setSelfInfo] = useState("")
  const [blogLink, setBlogLink] = useState("Hellossafy@tistory.com")
  const [youtubeLink, setYoutubeLink] = useState("유튜브 채널 링크")
  const [instaLink, setInstaLink] = useState("instaSSafy")
  const [faceBookLink, setFaceBookLink] = useState("faceSSafy")

  return (
    <SProfileContainer>
      <div className="profileContentContainer">
        <SSubContainerUp>
          {/* 프로필 이미지 */}
          <img className="profile-img" src={profileImg} alt="defaultProfile" />
          <section>
            <div className="name-email__container">
              {/* 이름 */}
              <span>{name}</span>
              {/* 이메일 */}
              <p>{email}</p>
            </div>
            {/* 마일리지 바 */}
            <div>
              <FontAwesomeIcon
                icon={faLocationPin}
                style={{
                  color: "#24E843",
                  height: "calc(1vw + 10px) !important",
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

        {/* 선택항목 */}
        <SSubContainerDown>
          <div className="cd1tip">
            <SFontAwesomeIconAtProfile icon={faIdCard} />
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
            </span>
          </div>

          <section>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faStaylinked} />
              <div>{blogLink}</div>
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareYoutube} />
              <div>{youtubeLink}</div>
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareInstagram} />
              <div>{instaLink}</div>
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareFacebook} />
              <div>{faceBookLink}</div>
            </SOneLineContainer>
          </section>
          {/* {props.textValue} */}
          <SBlackButton onClick={props.handleProfileEditBtn}>
            프로필 수정
          </SBlackButton>
        </SSubContainerDown>
      </div>
    </SProfileContainer>
  )
}

export default Profile
