import React, { useCallback, useState } from "react";
import loginImg from "../../assets/images/login_img.svg";
import logoImg from "../../assets/images/logo.png";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import naverLogoImg from "../../assets/images/login/naver_logo.png";
import kakaoLogoImg from "../../assets/images/login/kakao_logo.png";
import googleLogoImg from "../../assets/images/login/google_logo.png";
import {
  SMain,
  SForm,
  SImgSection,
  SContainer,
  SSNSContainer,
  SInputContainer,
  SEmailFontAwesomeIcon,
  SEmailInput,
  SPasswordInput,
  SLoginButton,
  SnaverLoginButton,
  SkakaoLoginButton,
  SgoogleLoginButton,
  SNaverContainer,
  SKakaoContainer,
  SGoogleContainer,
  SMainContainer,
  SSignUpButton,
  SFindPassword,
  SCancelButton,
} from "./styles";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/images/LOGIN";
import axios from "axios";
import { useContext } from "react";
import { LoginStateContext, LoginStateHandlerContext } from "../../App";

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

const axiosDefaultURL = "http://localhost:8080";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  // context api를 통해 handleIsLogined 함수 가져오기
  const { handleIsLogined, handleLogout, handleUserInfo } = useContext(
    LoginStateHandlerContext
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (!open) {
      axios
        .post(`${axiosDefaultURL}/user/login`, {
          email,
          password,
        })
        .then((response) => {
          const responseData = response.data.response;
          localStorage.clear();
          // 로그인 성공하면 localStorage에 토큰과 유저 id 저장
          localStorage.setItem("accessToken", responseData.accessToken);
          localStorage.setItem("refreshToken", responseData.refreshToken);
          localStorage.setItem("id", responseData.id);
          // 유저 정보 상태 변경
          handleUserInfo(responseData);
          // 로그인 상태 변경
          handleIsLogined();

          // setTimeout() 로직 작성해야 됨. 리프레시 토큰 끝나기 5분 전에 로그아웃 시키기

          // 메인페이지로 이동
          navigate("/");
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  // 회원가입으로 이동시키는 함수
  const handleMoveToSignUp = () => {
    navigate("/signup");
  };

  // 모달을 여는 핸들러 함수
  const handleOpen = (e) => {
    if (!email || !password) {
      setOpen(true);
    }
  };

  // 모달을 닫는 핸들러 함수
  const handleClose = () => setOpen(false);

  const handleOnChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleOnPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <SMain>
      <SMainContainer>
        {/* <div className="nav__section">
          <NavLink to={"/"}>
            <img src={logoImg} alt="logo_img" />
          </NavLink>
        </div> */}
        <SImgSection>
          <div className="nav__section">
            <NavLink className="Home-link" to={"/"}>
              <img src={logoImg} alt="logo_img" />
            </NavLink>
          </div>
          <h1>Welcome Back!</h1>
          <div>
            <Lottie
              options={defaultOptions}
              // height={400}
              // width={600}
            />
          </div>
        </SImgSection>
        <SForm onSubmit={onSubmit}>
          <SContainer>
            <h1>로그인</h1>
            <SInputContainer>
              <SEmailInput
                className={email ? "active__input" : ""}
                value={email}
                onChange={handleOnChangeEmail}
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
                onChange={handleOnPassword}
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <SEmailFontAwesomeIcon
                className={password ? "active__icon" : ""}
                icon={faLock}
              />
            </SInputContainer>
            <SFindPassword>
              <div>비밀번호 찾기</div>
            </SFindPassword>
            <SLoginButton type="submit" onClick={(e) => handleOpen(e)}>
              로그인
            </SLoginButton>
            <SSignUpButton onClick={handleMoveToSignUp}>
              새로운 계정 만들기
            </SSignUpButton>
            <hr
              style={{
                width: "62%",
                height: "2px",
                border: "0px",
                backgroundColor: "#e4e4e4",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            />
            <SnaverLoginButton>
              <img src={naverLogoImg} alt="naver_logo" />
              네이버로 로그인
            </SnaverLoginButton>

            <SkakaoLoginButton>
              <img src={kakaoLogoImg} alt="kakao_logo" />
              카카오로 로그인
            </SkakaoLoginButton>

            <SgoogleLoginButton>
              <img src={googleLogoImg} alt="google_logo" />
              구글로 로그인
            </SgoogleLoginButton>
          </SContainer>
        </SForm>
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
              {email
                ? password
                  ? ""
                  : "비밀번호를 입력해주세요."
                : "이메일을 입력해주세요."}
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

export default Login;
