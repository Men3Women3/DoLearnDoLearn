import React, { useState } from "react";
import logoImg from "../../assets/images/logo.png";
import signupImg from "../../assets/images/sign_img.svg";
import { Button } from "@mui/joy";
import { NavLink } from "react-router-dom";
import {
  faEnvelope,
  faLock,
  faUser,
  faUnlock,
  faLink,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  SMain,
  SForm,
  SImgSection,
  SContainer,
  SInputContainer,
  SEmailFontAwesomeIcon,
  SUsernameInput,
  SEmailInput,
  SPasswordInput,
  SPasswordCheckInput,
  SBlogInput,
  SYouTubeInput,
  SInstagramInput,
  SFacebookInput,
  SSelfIntroduction,
  SSNSInputContainer,
  SLoginButton,
  SMainContainer,
  SNextButton,
  SFindPassword,
} from "./styles";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [blogLing, setBlogLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [isNext, setIsNext] = useState(false);
  const [isEmpty, setIsEmpty] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleNextForm = (e) => {
    e.preventDefault();
    setIsNext(!isNext);
  };

  return (
    <SMain>
      {/* <TransitionsModal /> */}
      <SMainContainer>
        <NavLink to={"/"}>
          <img src={logoImg} alt="logo_img" />
        </NavLink>
        <SForm>
          <SContainer>
            <h1>회원가입</h1>
            {isNext ? (
              <>
                <p>
                  * 추가 입력사항입니다. 입력 시 다른 사용자들에게 보여지는
                  정보입니다.
                </p>
                <SInputContainer>
                  <SBlogInput
                    className={blogLing ? "active__input" : ""}
                    value={blogLing}
                    onChange={(e) => setBlogLink(e.target.value)}
                    type="text"
                    placeholder="블로그 링크를 입력해주세요"
                  />
                  <SEmailFontAwesomeIcon
                    className={blogLing ? "active__icon" : ""}
                    icon={faLink}
                  />
                </SInputContainer>
                <SInputContainer>
                  <SYouTubeInput
                    className={youtubeLink ? "active__input" : ""}
                    value={youtubeLink}
                    onChange={(e) => setYoutubeLink(e.target.value)}
                    type="text"
                    placeholder="유튜브 링크를 입력해주세요"
                  />
                  <SEmailFontAwesomeIcon
                    className={youtubeLink ? "active__icon" : ""}
                    icon={faYoutube}
                  />
                </SInputContainer>
                <SSNSInputContainer>
                  <SInputContainer>
                    <SInstagramInput
                      className={instagramLink ? "active__input" : ""}
                      value={instagramLink}
                      onChange={(e) => setInstagramLink(e.target.value)}
                      type="text"
                      placeholder="인스타 계정을 입력해주세요"
                    />
                    <SEmailFontAwesomeIcon
                      className={instagramLink ? "active__icon" : ""}
                      icon={faInstagram}
                    />
                  </SInputContainer>
                  <SInputContainer>
                    <SFacebookInput
                      className={facebookLink ? "active__input" : ""}
                      value={facebookLink}
                      onChange={(e) => setFacebookLink(e.target.value)}
                      type="text"
                      placeholder="페이스북 계정을 입력해주세요"
                    />
                    <SEmailFontAwesomeIcon
                      className={facebookLink ? "active__icon" : ""}
                      icon={faFacebook}
                    />
                  </SInputContainer>
                </SSNSInputContainer>
                <SInputContainer>
                  <SSelfIntroduction
                    className={selfIntroduction ? "active__input" : ""}
                    value={selfIntroduction}
                    onChange={(e) => setSelfIntroduction(e.target.value)}
                    type="text"
                    placeholder="자기소개를 입력해주세요"
                  />
                  <SEmailFontAwesomeIcon
                    className={selfIntroduction ? "active__icon" : ""}
                    icon={faComment}
                  />
                </SInputContainer>
              </>
            ) : (
              <>
                <SInputContainer>
                  <SUsernameInput
                    className={username ? "active__input" : ""}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="이름(실명)을 입력해주세요"
                  />
                  <SEmailFontAwesomeIcon
                    className={username ? "active__icon" : ""}
                    icon={faUser}
                  />
                </SInputContainer>
                <SInputContainer>
                  <SEmailInput
                    className={email ? "active__input" : ""}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="이메일을 입력해주세요"
                  />
                  <SEmailFontAwesomeIcon
                    className={email ? "active__icon" : ""}
                    icon={faEnvelope}
                  />
                </SInputContainer>
                <SInputContainer>
                  <SPasswordInput
                    className={password ? "active__input" : ""}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                  />
                  <SEmailFontAwesomeIcon
                    className={password ? "active__icon" : ""}
                    icon={faLock}
                  />
                </SInputContainer>
                <SInputContainer>
                  <SPasswordCheckInput
                    className={passwordCheck ? "active__input" : ""}
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                  />
                  <SEmailFontAwesomeIcon
                    className={passwordCheck ? "active__icon" : ""}
                    icon={faUnlock}
                  />
                </SInputContainer>
              </>
            )}
            {/* <SFindPassword>
              <span>비밀번호 찾기</span>
            </SFindPassword> */}
            {/* <SLoginButton type="submit">회원가입</SLoginButton> */}
            <SNextButton onClick={(e) => handleNextForm(e)}>
              {isNext ? "회원가입" : "다음"}
            </SNextButton>
          </SContainer>
        </SForm>
        <SImgSection>
          <h1>Welcome!</h1>
          <img src={signupImg} alt="signup_img" />
        </SImgSection>
      </SMainContainer>
    </SMain>
  );
};

export default SignUp;
