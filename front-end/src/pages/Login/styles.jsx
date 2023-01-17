import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SMain = styled.main`
  z-index: 1;
  position: relative;
  display: flex;
  height: 100%;
  background-color: ${(props) => props.theme.deepYellow};
`;

export const SMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 40px;
  border-radius: 8px;
  img {
    width: 120px;
    height: 44px;
    padding: 10px;
  }

`

export const SImgSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 80px;
  h1 {
    font-size: 40px;
    border-bottom: 5px solid ${props => props.theme.deeperYellow};
  }
  img {
    width: 450px;
    height: 366px;
  }
`;

export const SForm = styled.form`
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
    margin-bottom: 50px;
  }
`;

export const SFindPassword = styled.div`
  width: 100%;
  text-align: right;
  transform: translateX(-55px);
  p {
    margin: 20px 0px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.deeperYellow};
    }
  }
`;

export const SInputContainer = styled.div`
  position: relative;
  .active__input {
      border: 3px solid ${props => props.theme.deepYellow};
  }
  .active__icon {
    color: ${props => props.theme.deepYellow};
  }
`;

export const SEmailInput = styled.input`
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
    font-size: 20px;
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
    margin: 10px 42px;
  }
`;

export const SLoginButton = styled.button`
  margin: 12px;
  margin-top: 0px;
  background-color: black;
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  width: 418px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SSignUpButton = styled.button`
  background-color: white;
  color: black;
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  width: 418px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SNaverContainer = styled.div`
  button {
    background-color: #23c03c;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 24px;
    font-family: ${props => props.theme.fontFamily};
    width: 42px;
    height: 42px;
  }
`

export const SKakaoContainer = styled.div`
  button {
    background-color: #F5D60B;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 24px;
    font-family: ${props => props.theme.fontFamily};
    width: 42px;
    height: 42px;
  }
`

export const SGoogleContainer = styled.div`
  button {
    background-color: #D9D9D9;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 24px;
    font-family: ${props => props.theme.fontFamily};
    width: 42px;
    height: 42px;
  }
`