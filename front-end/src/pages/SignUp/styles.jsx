import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SMain = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.deepYellow};
`;

export const SMainContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 40px;
  border-radius: 8px;
  img {
    height: calc(2vw + 25px);
  }
`;

export const SImgSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(-100px);
  padding: 80px 60px;
  h1 {
    font-size: 40px;
    border-bottom: 5px solid ${(props) => props.theme.deeperYellow};
  }
  img {
    width: 450px;
    height: 366px;
  }
`;

export const SForm = styled.form`
  height: ${(props) => (props.isNext ? "580px" : "450px")};
  transform: translateX(-95px);
  transition: all 1000ms linear;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 10px 10px 30px 0px rgb(158 158 158);
  margin: 60px 120px;
`;

export const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 36px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
  p {
    font-size: 12px;
    margin-top: 0px;
    color: ${(props) => props.theme.red};
  }
`;

export const SFindPassword = styled.div`
  width: 100%;
  /* text-align: right; */
  display: flex;
  justify-content: end;
  transform: translateX(-42px);
  span {
    margin: 20px 0px;
    font-size: 16px;
    cursor: pointer;
  }
  span:hover {
    color: ${(props) => props.theme.deeperYellow};
  }
`;

export const SInputContainer = styled.div`
  position: relative;
  .active__input {
    border: 3px solid ${(props) => props.theme.deepYellow};
  }
  .active__icon {
    color: ${(props) => props.theme.deepYellow};
  }
  .typing-length {
    text-align: right;
    color: black;
    margin-bottom: 0px;
  }
`;

export const SUsernameInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily};
  width: 360px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 50px;
  font-size: 20px;
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SEmailInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily};
  width: 360px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 50px;
  font-size: 20px;
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SEmailFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #cdcdcd;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const SPasswordInput = styled.input`
  width: 360px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  margin-bottom: 12px;
  font-size: 20px;
  &::placeholder {
    font-family: ${(props) => props.theme.fontFamily};
    color: #cdcdcd;
  }
`;

export const SPasswordCheckInput = styled.input`
  width: 360px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  font-size: 20px;
  &::placeholder {
    font-family: ${(props) => props.theme.fontFamily};
    color: #cdcdcd;
  }
`;

export const SBlogInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily};
  width: 360px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  margin-bottom: 12px;
  font-size: 20px;
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SYouTubeInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily};
  width: 360px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  margin-bottom: 12px;
  font-size: 20px;
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SInstagramInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily};
  width: 150px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 45px;
  margin-bottom: 12px;
  font-size: 20px;
  &::placeholder {
    color: #cdcdcd;
    font-size: 10px;
  }
`;

export const SFacebookInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily};
  width: 150px;
  height: 40px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 45px;
  margin-bottom: 12px;
  font-size: 20px;
  &::placeholder {
    color: #cdcdcd;
    font-size: 10px;
  }
`;

export const SSNSInputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
`;

export const SSelfIntroduction = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily};
  width: 360px;
  height: 167px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  resize: none;
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SSNSContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  div {
    margin: 10px 60px;
  }
`;

export const SLoginButton = styled.button`
  margin: 12px;
  margin-top: 0px;
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 16px;
  width: 418px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SNextButton = styled.button`
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 16px;
  width: 418px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 24px;
`;

export const SNaverContainer = styled.div`
  button {
    background-color: #23c03c;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 24px;
    font-family: ${(props) => props.theme.fontFamily};
    width: 42px;
    height: 42px;
  }
`;

export const SKakaoContainer = styled.div`
  button {
    background-color: #f5d60b;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 24px;
    font-family: ${(props) => props.theme.fontFamily};
    width: 42px;
    height: 42px;
  }
`;

export const SGoogleContainer = styled.div`
  button {
    background-color: #d9d9d9;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 24px;
    font-family: ${(props) => props.theme.fontFamily};
    width: 42px;
    height: 42px;
  }
`;

export const SCancelButton = styled.button`
  margin-top: 40px;
  margin-bottom: 20px;
  color: #f3bd2a;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
`;
