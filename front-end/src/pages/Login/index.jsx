import React from "react";
import loginImg from "../../assets/images/login_img.svg";
import logoImg from "../../assets/images/logo.png";
import { SHeader, SMain, SSection, SContainer } from "./styles";

const Login = () => {
  return (
    <SMain>
      <SSection>
        <SHeader>
          <img src={logoImg} alt="logo_img" />
        </SHeader>
        <SContainer>
          <div>
            <h1>Welcome Back!</h1>
            <img src={loginImg} alt="login_img" />
          </div>
          <div>
            <h2>로그인</h2>
            <div>
              <input type="text" />
              <p></p>
            </div>
            <div>
              <input type="text" />
              <p></p>
            </div>
            <div>
              <input type="checkbox" />
              <p>아이디 저장</p>
            </div>
            <button>로그인</button>
            <p>아직 회원이 아니신가요?</p>
            <div></div> {/* 구분선  */}
            <div>
              <div>
                <button>N</button>
                <p>네이버로 시작하기</p>
              </div>
              <div>
                <button>K</button>
                <p>카카오로 시작하기</p>
              </div>
              <div>
                <button>G</button>
                <p>구글로 시작하기</p>
              </div>
            </div>
          </div>
        </SContainer>
      </SSection>
    </SMain>
  );
};

export default Login;
