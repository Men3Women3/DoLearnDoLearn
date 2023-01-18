import React, { useCallback, useState } from "react";
import logoImg from "../../assets/images/logo.png";
import signupImg from "../../assets/images/sign_img.svg";
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
  // SFindPassword,
  SCancelButton,
} from "./styles";
import useInput from '../../hoocks/useInput';     // 커스텀 훅
import axios from 'axios';

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
  // const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState('');

  // const navigate = useNavigate();

  // 회원가입 api를 사용하여 회원가입을 진행하는 함수
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (isNext === true) {
      // 서버로 회원가입하기
      // 비동기 로직 실행 전에 초기화해주면 좋다. 
      // 요청을 연달아서 연속으로 보내면 이전 요청에 남아있던 결과가 다음 요청에 남아있을 수 있다.
      setSignUpError('')    
      axios.post('http://localhost:3090/api/users', {
        // 보내야 될 데이터
        username, email, password
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
        setSignUpError(error.response.data);
      })
      .finally(() => {})
    }
  }, [username, email, password, isNext])

  // 필수입력사항을 모두 입력했으면 추가입력사항을 보여주기 위한 핸들러 함수
  const handleNextForm = useCallback((e) => {
    if (!username || !email || !password || !passwordCheck) {
      setOpen(true);
    } else if (passwordCheck && password !== passwordCheck) {
      setOpen(true);
    } else if (!isNext) {
      setIsNext(!isNext);
    }
  }, [username, email, password, passwordCheck, isNext]);

  const handleClose = () => setOpen(false);

  // 필수 입력사항에서 문제가 발생할 경우 모달에 표시될 문구를 반환해주는 함수
  const handleModalText = () => {
    if (!username) return "이름(실명)을 입력해주세요.";
    if (!email) return "이메일을 입력해주세요.";
    if (!password) return "비밀번호를 입력해주세요.";
    if (!passwordCheck) return "비밀번호를 다시 입력해주세요.";
    if (password !== passwordCheck) return "비밀번호가 일치하지 않습니다.";
  };

  return (
    <SMain>
      {/* <TransitionsModal /> */}
      <SMainContainer>
        <div>
          <NavLink to={"/"}>
            <img src={logoImg} alt="logo_img" />
          </NavLink>
        </div>
        <SForm isNext onSubmit={onSubmit}>
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
                    onChange={onChangeUsername}
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
                    onChange={onChangeEmail}
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
                    onChange={onChangePassword}
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
                    onChange={onChangePasswordCheck}
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
            {/* <SLoginButton type="submit">회원가입</SLoginButton> */}
            <SNextButton type='submit' onClick={(e) => handleNextForm(e)}>
              {isNext ? "회원가입" : "다음"}
            </SNextButton>
          </SContainer>
        </SForm>
        <SImgSection>
          <h1>Welcome!</h1>
          <img src={signupImg} alt="signup_img" />
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
