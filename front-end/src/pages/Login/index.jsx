import React, { useState } from "react";
import loginImg from "../../assets/images/login_img.svg";
import logoImg from "../../assets/images/logo.png";
import { SMain, SForm, SImgSection, SContainer, SSNSContainer, SInputContainer, SEmailFontAwesomeIcon, SEmailInput, SPasswordInput, SLoginButton, SNaverContainer, SKakaoContainer, SGoogleContainer, SMainContainer, SSignUpButton, SFindPassword } from "./styles";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import TransitionsModal from '../../components/Modal';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState('');
  const [isCorrect, setIsCorrect] = useState(false)

  
  return (
    <SMain>
      {/* <TransitionsModal /> */}
      <SMainContainer>
        <NavLink to={'/'} >
          <img src={logoImg} alt="logo_img" />
        </NavLink>
        <SImgSection>
          <h1>Welcome Back!</h1>
          <img src={loginImg} alt="login_img" />
        </SImgSection>
        <SForm>
          <SContainer>
            <h1>로그인</h1>
            <SInputContainer>
              <SEmailInput className={email ? 'active__input' : ''} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="이메일을 입력해주세요"/>
              <SEmailFontAwesomeIcon className={email ? 'active__icon' : ''} icon={faEnvelope} />
            </SInputContainer>
            <SInputContainer>
              <SPasswordInput className={password ? 'active__input' : ''} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호를 입력해주세요" />
              <SEmailFontAwesomeIcon className={password ? 'active__icon' : ''} icon={faLock} />
            </SInputContainer>
            <SFindPassword>
              <p>비밀번호 찾기</p>
            </SFindPassword>
            <SLoginButton type='submit'>로그인</SLoginButton>
            <SSignUpButton>회원가입</SSignUpButton>
            <SSNSContainer>
              <SNaverContainer>
                <button>N</button>
              </SNaverContainer>
              <SKakaoContainer>
                <button>K</button>
              </SKakaoContainer>
              <SGoogleContainer>
                <button>G</button>
              </SGoogleContainer>
            </SSNSContainer>
          </SContainer>
        </SForm>

      </SMainContainer>
    </SMain>
  );
};

export default Login;
