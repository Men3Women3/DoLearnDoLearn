import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SMain = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.deepYellow};
`;

export const SMainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  .logo-img {
    height: calc(2vw + 17px);
  }
`;

export const SImgSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(-100px);
  padding: 90px 60px;
  h1 {
    font-size: calc(1vw + 36px);
    border-bottom: 5px solid ${(props) => props.theme.deeperYellow};
    margin: 0px;
  }
  img {
    width: calc(1vw + 450px);
    height: calc(1vh + 360px);
  }
`;

export const SForm = styled.form`
  height: ${(props) => (props.isNext ? "1vh + 580px" : "1vh + 80px")};
  transform: translateX(-95px);
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    props.isNext ? "calc(1vw + 440px)" : "calc(1vw + 380px)"};
  box-shadow: 10px 10px 30px 0px rgb(158 158 158);
  margin: ${(props) => (props.isNext ? "40px 120px" : "100px 120px")};
`;

export const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
    margin-top: 0px;
    margin-bottom: ${(props) => (props.isNext ? "15px" : "30px")};
  }
  p {
    font-size: ${(props) => props.theme.fontSize.p};
    margin-top: 0px;
    color: ${(props) => props.theme.red};
  }
`;

export const SInputContainer = styled.div`
  position: relative;
  .self-introduction__img {
    top: 14px;
  }
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
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 240px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SEmailInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 240px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SEmailFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.theme.fontSize.p};
  color: #cdcdcd;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const SPasswordInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 240px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SPasswordCheckInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 240px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SBlogInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 360px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SYouTubeInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 360px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SInstagramInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 150px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  margin-right: 8px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SFacebookInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 150px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    color: #cdcdcd;
  }
`;

export const SSNSInputContainer = styled.div`
  /* width: 90%; */
  display: flex;
  justify-content: space-evenly;
`;

export const SSelfIntroduction = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: calc(1vw + 360px);
  height: 167px;
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: ${(props) => props.theme.fontSize.p};
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

export const SNextButton = styled.button`
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  width: ${(props) =>
    props.isNext ? "calc(1vw + 400px)" : "calc(1vw + 280px)"};
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 24px;
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
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: bold;
`;
