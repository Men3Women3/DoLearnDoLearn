import React, { useState } from "react"
import {
  SProfileEditContainer,
  SSubContainerUp,
  SSubContainerDown,
  SSelfIntroduction,
  SInput,
  SBlackButton,
  STextAreaIcon,
  SInputIcon,
} from "./styles"

import profile from "../../assets/images/thumbnail.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faGear, faLink } from "@fortawesome/free-solid-svg-icons"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { faIdCard } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faInstagram,
  faStaylinked,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"

const ProfileEdit = (props) => {
  const [blogLink, setBlogLink] = useState("")
  const [youtubeLink, setYoutubeLink] = useState("")
  const [instagram, setInstagram] = useState("")
  const [facebook, setFacebook] = useState("")
  const [selfIntroduction, setSelfIntroduction] = useState("")
  const fileInput = React.useRef(null)
  // const handleCompleteEditProfile = () => {
  //   props.setValue(!props.value);
  // };

  // 프로필 이미지 변경
  const handleEditProfileImg = (e) => {
    fileInput.current.click()
  }

  return (
    <SProfileEditContainer>
      <div className="profileContentContainer">
        <SSubContainerUp>
          {/* 프로필 이미지 */}
          <div className="profile-container">
            <img
              className="profile__img"
              src={profile}
              alt="defaultProfile"
              onClick={handleEditProfileImg}
            />
            <FontAwesomeIcon
              className="profil-edit__icon"
              icon={faGear}
              onClick={handleEditProfileImg}
            />
            <input type="file" ref={fileInput} />
          </div>

          <section>
            {/* <img
                src={startRankImg}
                alt="start_rank_Img"
                // style={{ height: "calc(1vw + 8px) !important" }}
              /> */}
            <div>
              {/* 이름 */}
              <span>김싸피</span>
              {/* 이메일 */}
              <p>ssafyKing@naver.com</p>
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

        {/* 선택항목 */}
        <SSubContainerDown>
          <div className="input__container">
            <SInput
              className={blogLink ? "tip active__input" : "tip"}
              value={blogLink}
              onChange={(e) => setBlogLink(e.target.value)}
              type="text"
              placeholder="블로그 링크를 입력해 주세요"
            />
            <SInputIcon
              className={blogLink ? "active__icon" : ""}
              icon={faLink}
            />
          </div>
          <div className="input__container">
            <SInput
              className={youtubeLink ? "tip active__input" : "tip "}
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              type="text"
              placeholder="유튜브 링크를 입력해 주세요"
            />
            <SInputIcon
              className={youtubeLink ? "active__icon" : " "}
              icon={faYoutube}
            />
          </div>
          <div className="input__container">
            <SInput
              className={instagram ? "tip active__input" : "tip"}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              type="text"
              placeholder="인스타그램 계정을 입력해 주세요"
            />
            <SInputIcon
              className={instagram ? "active__icon" : ""}
              icon={faInstagram}
            />
          </div>
          <div className="input__container">
            <SInput
              className={facebook ? "tip active__input" : "tip"}
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              type="text"
              placeholder="페이스북 계정을 입력해주세요"
            />
            <SInputIcon
              className={facebook ? "active__icon" : " "}
              icon={faFacebook}
            />
          </div>
          <div className="input__container">
            <SSelfIntroduction
              maxLength={500}
              className={selfIntroduction ? "tip active__input" : "tip"}
              value={selfIntroduction}
              onChange={(e) => setSelfIntroduction(e.target.value)}
              type="text"
              placeholder="자기소개를 입력해주세요"
            />
            <STextAreaIcon
              className={
                selfIntroduction
                  ? "self-introduction__img active__icon"
                  : "self-introduction__img"
              }
              icon={faComment}
              flip="horizontal"
            />
          </div>
          <p className="typing-length">{selfIntroduction.length} / 500</p>
          <SBlackButton
            className="black-button"
            onClick={props.handleProfileEditBtn}
          >
            수정 완료
          </SBlackButton>
        </SSubContainerDown>
      </div>
    </SProfileEditContainer>
  )
}

export default ProfileEdit
