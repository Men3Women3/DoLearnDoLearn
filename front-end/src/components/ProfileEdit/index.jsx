import React, { useState } from "react";
import {
  SProfileEditContainer,
  SSubContainerUp,
  SSubContainerDown,
  SOneLineContainer,
  SFontAwesomeIconAtProfile,
  SSelfIntroduction,
  SInput,
} from "./styles";

import profile from "../../assets/images/thumbnail.png";
import startRankImg from "../../assets/images/rank/start_rank.svg";

import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
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

const ProfileEdit = (props) => {
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const fileInput = React.useRef(null);
  const handleCompleteEditProfile = () => {
    props.setValue(!props.value);
  };

  // 프로필 이미지 변경
  const handleEditProfileImg = (e) => {
    fileInput.current.click();
  };

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
            {/* 배지 + 이름 */}
            <SOneLineContainer>
              {/* <img
                src={startRankImg}
                alt="start_rank_Img"
                // style={{ height: "calc(1vw + 8px) !important" }}
              /> */}
              <span>김싸피</span>
            </SOneLineContainer>
            {/* 이메일 */}
            <p>ssafyKing@naver.com</p>
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
                <div
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
                ></div>
              </div>
            </div>
          </section>
        </SSubContainerUp>

        {/* 선택항목 */}
        <SSubContainerDown>
          <section>
            <SOneLineContainer>
              <SFontAwesomeIconAtProfile icon={faIdCard} />
              <SSelfIntroduction
                maxLength={500}
                value={selfIntroduction}
                onChange={(e) => setSelfIntroduction(e.target.value)}
                type="text"
                placeholder="자기소개를 입력해주세요"
              />
              <p className="typing-length">{selfIntroduction.length} / 500</p>
            </SOneLineContainer>
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

          <ThemeProvider theme={theme}>
            <Button
              color="black"
              variant="contained"
              size="large"
              style={{ display: "block", margin: "auto" }}
              onClick={handleCompleteEditProfile}
            >
              <b>수정 완료</b>
            </Button>
          </ThemeProvider>
        </SSubContainerDown>
      </div>
    </SProfileEditContainer>
  );
};

export default ProfileEdit;
