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
  img {
    height: calc(2vw + 17px);
  }
`;

export const SImgSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 85px 85px;
  h1 {
    font-size: calc(1vw + 36px);
    border-bottom: 5px solid ${(props) => props.theme.deeperYellow};
    margin-bottom: 40px;
    margin-top: 0px;
  }
  img {
    width: calc(1vw + 400px);
    height: calc(1vh + 310px);
  }
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(1vw + 380px);
  box-shadow: 10px 10px 30px 0px rgb(158 158 158);
  margin: 120px 120px;
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
    margin-bottom: 30px;
  }
`;

export const SFindPassword = styled.div`
  width: calc(1vw + 260px);
  div {
    display: flex;
    justify-content: end;
    margin: 10px 0px;
    font-size: ${(props) => props.theme.fontSize.p};
    cursor: pointer;
  }
  div:hover {
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
  width: calc(1vw + 240px);
  height: calc(1vh + 20px);
  border: 3px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSize.p};
  &::placeholder {
    font-family: ${(props) => props.theme.fontFamily.Regular};
    color: #cdcdcd;
  }
`;

export const SSNSContainer = styled.div`
  width: calc(1vw + 240px);
  display: flex;
  justify-content: center;
  margin-top: 12px;
  div {
    margin: 0px 20px;
  }
`;

export const SLoginButton = styled.button`
  margin: 12px;
  margin-top: 0px;
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  width: calc(1vw + 280px);
  height: calc(1vh + 20px);
  border-radius: 4px;
  cursor: pointer;
`;

export const SSignUpButton = styled.button`
  background-color: white;
  color: black;
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  width: calc(1vw + 280px);
  height: calc(1vh + 20px);
  border-radius: 4px;
  cursor: pointer;
`;

export const SNaverContainer = styled.div`
  button {
    background-color: #23c03c;
    cursor: pointer;
    border: none;
    color: white;
    font-size: ${(props) => props.theme.fontSize.h2};
    font-family: ${(props) => props.theme.fontFamily.SemiBold};
    width: calc(1vw + 28px);
    height: calc(1vh + 32px);
    border-radius: 4px;
  }
`;

export const SKakaoContainer = styled.div`
  button {
    background-color: #f5d60b;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: ${(props) => props.theme.fontSize.h2};
    font-family: ${(props) => props.theme.fontFamily.SemiBold};
    width: calc(1vw + 28px);
    height: calc(1vh + 32px);
  }
`;

export const SGoogleContainer = styled.div`
  button {
    background-color: #d9d9d9;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: ${(props) => props.theme.fontSize.h2};
    font-family: ${(props) => props.theme.fontFamily.SemiBold};
    width: calc(1vw + 28px);
    height: calc(1vh + 32px);
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
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.h3};
`;
