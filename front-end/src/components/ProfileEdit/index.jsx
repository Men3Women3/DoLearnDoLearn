import React, { useState } from "react"
import {
  SProfileEditContainer,
  SSubContainerUp,
  SSubContainerDown,
  SOneLineContainer,
  SFontAwesomeIconAtProfile,
  SSelfIntroduction,
  SInput,
  SBlackButton,
} from "./styles"

import profile from "../../assets/images/thumbnail.png"

import { Button } from "@mui/material"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { faIdCard } from "@fortawesome/free-solid-svg-icons"
import { faStaylinked } from "@fortawesome/free-brands-svg-icons"
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"

const ProfileEdit = (props) => {
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
          <section>
            <div style={{ display: "flex" }}>
              {/* <SFontAwesomeIconAtProfile icon={faIdCard} /> */}
              <SSelfIntroduction
                maxLength={500}
                value={selfIntroduction}
                onChange={(e) => setSelfIntroduction(e.target.value)}
                type="text"
                placeholder="자기소개를 입력해주세요"
              />
            </div>
            <p className="typing-length">{selfIntroduction.length} / 500</p>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faStaylinked} />
              <SInput
                //   className={facebookLink ? "active__input" : ""}
                //   value={facebookLink}
                //   onChange={(e) => setFacebookLink(e.target.value)}
                type="text"
                placeholder="페이스북 계정을 입력해주세요"
              />
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareYoutube} />
              <SInput
                //   className={facebookLink ? "active__input" : ""}
                //   value={facebookLink}
                //   onChange={(e) => setFacebookLink(e.target.value)}
                type="text"
                placeholder="페이스북 계정을 입력해주세요"
              />
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareInstagram} />
              <SInput
                //   className={facebookLink ? "active__input" : ""}
                //   value={facebookLink}
                //   onChange={(e) => setFacebookLink(e.target.value)}
                type="text"
                placeholder="페이스북 계정을 입력해주세요"
              />
            </SOneLineContainer>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faSquareFacebook} />
              <SInput
                //   className={facebookLink ? "active__input" : ""}
                //   value={facebookLink}
                //   onChange={(e) => setFacebookLink(e.target.value)}
                type="text"
                placeholder="페이스북 계정을 입력해주세요"
              />
            </SOneLineContainer>
          </section>

          <SBlackButton onClick={props.handleProfileEditBtn}>
            수정 완료
          </SBlackButton>
        </SSubContainerDown>
      </div>
    </SProfileEditContainer>
  )
}

export default ProfileEdit
