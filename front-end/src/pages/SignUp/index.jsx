import React, { useCallback, useState } from "react";
import logoImg from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
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
  // SLoginButton,
  SMainContainer,
  SNextButton,
  SCancelButton,
} from "./styles";
import useInput from "../../hoocks/useInput"; // 커스텀 훅
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../../assets/images/SIGNUP";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  outline: "none",
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SignUp = () => {
  const [username, onChangeUsername] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [blogLing, setBlogLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [isNext, setIsNext] = useState(false);
  // const [isEmpty, setIsEmpty] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  // const navigate = useNavigate();

  // 이메일 유효성 검사를 위한 정규표현식
  const regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  // 비밀번호 유효성 검사를 위한 정규표현식
  const regExpPassword =
    /^.*(?=^.{9,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  // 이름, 이메일, 비밀번호, 비밀번호 확인을 규칙에 맞게 작성했는지 확인하는 함수
  // 규칙에 맞게 작성하지 않았으면 isCorrect를 false로 만들고, 규칙에 맞게 작성했으면 isCorrect를 true로 만든다.
  const handleInputCorrectChech = useCallback(() => {
    if (
      username.length > 30 ||
      !regexEmail.test(email) ||
      !regExpPassword.test(password) ||
      password !== passwordCheck
    ) {
      setIsCorrect(false);
    }
    if (
      username.length <= 30 &&
      regexEmail.test(email) &&
      regExpPassword.test(password) &&
      password === passwordCheck
    ) {
      setIsCorrect(true);
    }
  }, [username, email, password, passwordCheck, isCorrect]);

  // 필수입력사항을 모두 입력했으면 추가입력사항을 보여주기 위한 핸들러 함수
  const handleNextForm = (e) => {
    if (!username || !email || !password || !passwordCheck) {
      setOpen(true);
    }
    // 수정해야 됨,,, 하나라도 빈 칸이 있으면 위의 로직에 따라 모달 생기게 하고,
    // 입력단계에서 제대로 입력했으면 다음을 눌렀을 때 이메일 중복 로직 검사를 하고,
    // 이상이 없으면 다음으로 넘어가야 됨.
    // 밑의 가정문 위에 이메일 중복 api를 사용하는 코드를 작성해야 될듯
    // api쏴서 성공하면 setIsCorrect(true)
    // 실패하면 setIsCorrect(false) 로 하면 되려나...?

    if (isCorrect && !isNext) {
      setIsNext(true);
    }
  };

  // 회원가입 api를 사용하여 회원가입을 진행하는 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (isNext === true) {
        // 서버로 회원가입하기
        // 비동기 로직 실행 전에 초기화해주면 좋다.
        // 요청을 연달아서 연속으로 보내면 이전 요청에 남아있던 결과가 다음 요청에 남아있을 수 있다.
        setSignUpError("");
        axios
          .post("http://localhost:8080/user", {
            // 보내야 될 데이터
            username,
            email,
            password,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      } else if (isNext === false) {
        console.log("이메일 중복 api 사용");
      }
    },
    [username, email, password, isNext]
  );

  const handleClose = () => setOpen(false);

  // 필수 입력사항에서 문제가 발생할 경우 모달에 표시될 문구를 반환해주는 함수
  const handleModalText = () => {
    if (!username) return "이름(실명)을 입력해주세요.";
    if (!email) return "이메일을 입력해주세요.";
    if (!password) return "비밀번호를 입력해주세요.";
    if (!passwordCheck) return "비밀번호를 다시 입력해주세요.";
  };

  return (
    <SMain>
      <SMainContainer>
        <div>
          <NavLink to={"/"}>
            <img className="logo-img" src={logoImg} alt="logo_img" />
          </NavLink>
        </div>
        <SForm isNext={isNext} onSubmit={onSubmit}>
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
                    maxLength={500}
                    className={selfIntroduction ? "active__input" : ""}
                    value={selfIntroduction}
                    onChange={(e) => setSelfIntroduction(e.target.value)}
                    type="text"
                    placeholder="자기소개를 입력해주세요"
                  />
                  <p className="typing-length">
                    {selfIntroduction.length} / 500
                  </p>
                  <SEmailFontAwesomeIcon
                    className={
                      selfIntroduction
                        ? "self-introduction__img active__icon"
                        : "self-introduction__img"
                    }
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
                    onChange={onChangeUsername}
                    type="text"
                    placeholder="이름(실명)을 입력해주세요"
                    maxLength={30}
                    onKeyUp={handleInputCorrectChech}
                  />
                  <SEmailFontAwesomeIcon
                    className={username ? "active__icon" : ""}
                    icon={faUser}
                  />
                  <p>
                    {username.length >= 30 && "최대 30자까지 입력 가능합니다."}
                  </p>
                </SInputContainer>
                <SInputContainer>
                  <SEmailInput
                    className={email ? "active__input" : ""}
                    value={email}
                    onChange={onChangeEmail}
                    type="text"
                    placeholder="이메일을 입력해주세요"
                    onKeyUp={handleInputCorrectChech}
                  />
                  <SEmailFontAwesomeIcon
                    className={email ? "active__icon" : ""}
                    icon={faEnvelope}
                  />
                  <p>
                    {email &&
                      !regexEmail.test(email) &&
                      "올바른 이메일을 입력해주세요."}
                  </p>
                </SInputContainer>
                <SInputContainer>
                  <SPasswordInput
                    className={password ? "active__input" : ""}
                    value={password}
                    onChange={onChangePassword}
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    onKeyUp={handleInputCorrectChech}
                  />
                  <SEmailFontAwesomeIcon
                    className={password ? "active__icon" : ""}
                    icon={faLock}
                  />
                  <p>
                    {password &&
                      !regExpPassword.test(password) &&
                      "9~16자 영문, 숫자, 특수문자를 사용하세요."}
                  </p>
                </SInputContainer>
                <SInputContainer>
                  <SPasswordCheckInput
                    className={passwordCheck ? "active__input" : ""}
                    value={passwordCheck}
                    onChange={onChangePasswordCheck}
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                    onKeyUp={handleInputCorrectChech}
                  />
                  <SEmailFontAwesomeIcon
                    className={passwordCheck ? "active__icon" : ""}
                    icon={faUnlock}
                  />
                  {passwordCheck && password !== passwordCheck && (
                    <p>비밀번호가 일치하지 않습니다.</p>
                  )}
                </SInputContainer>
              </>
            )}
            <SNextButton
              isNext={isNext}
              type="submit"
              onClick={(e) => handleNextForm(e)}
            >
              {isNext ? "회원가입" : "다음"}
            </SNextButton>
          </SContainer>
        </SForm>
        <SImgSection>
          <h1>Welcome!</h1>
          {/* <img src={signupImg} alt="signup_img" /> */}
          <div>
            <Lottie
              options={defaultOptions}
              // height={400}
              // width={600}
            />
          </div>
        </SImgSection>
      </SMainContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{
                textAlign: "center",
                marginTop: "32px",
                fontFamily: "KIMM_Bold",
              }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              {handleModalText()}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <SCancelButton onClick={(e) => setOpen(false)}>
                확인
              </SCancelButton>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </SMain>
  );
};

export default SignUp;
