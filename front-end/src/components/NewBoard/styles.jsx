import styled from "styled-components"
import Slider from "react-slick"

// import SCard from "../CardBox";

export const SCardBox = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 30px #c4c4c454;
  padding: calc(1vw + 30px);
  padding: calc(3vw + 10px);
  margin: calc(1vw + 0.5px) calc(1vw + 20px);

  background-color: transparent;
`

// 모든 내용물을 담은 div!
export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontFamily};
  /* font-size: calc(1.5vw + 1px); */
  margin: 10%;
  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
  h5 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
  input {
    font-size: ${(props) => props.theme.fontSize.p};
    height: 4vh;
  }
  div {
    margin-bottom: 1vh;
    align-items: center;
  }
  .slick-slider {
    margin-bottom: 0;
    div {
      margin: 0;
    }
    .slick-prev:before {
      color: black;
    }
    .slick-next:before {
      color: black;
    }
    img {
      /* width: 100%;
      height: 100%;  */
      height: calc(8vw);
      width: calc(12vw);
      border: solid calc(0.15vw + 1px) #e2e2e2;
      border-radius: 10px;
      padding: 15px;
      cursor: pointer;
      /* background-color: yellow; */
      &.active {
        border: solid calc(0.15vw + 2px) ${(props) => props.theme.deeperYellow};
      }
    }
  }
`

// 1. 페이지 제목
export const STitle = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 1%;
`

// 3. 사용자 지정 제목 - custom-title
export const SBoardTitle = styled.div`
  display: flex;
  h3 {
    margin-right: 1vw;
  }
`

export const STitleInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  /* transform: translate(0, 15%); */
  width: calc(40vw + 10px);
  height: calc(3.5vh + 15px);
  border: 2px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 1vw;
`

// 4. 참여 인원 - people-number
export const SParticipant = styled.div`
  display: flex;
  h3 {
    margin-right: 1vw;
  }
  h5 {
    margin-left: 10px;
  }
  .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    width: 7vw;
    height: 2.5vw;
    margin: auto 0;
    font-family: ${(props) => props.theme.fontFamily.Regular};
    font-size: ${(props) => props.theme.fontFamily.Regular};
    /* border: 2px solid #cdcdcd;
    border-radius: 8px; */
  }
`

export const SParticipantInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: 5vw;
  height: calc(3.5vh + 15px);
  border: 2px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 1vw;
  ::placeholder {
    font-family: ${(props) => props.theme.fontFamily.Regular};
    ${(props) => props.theme.fontFamily.Regular};
  }
`

// 5. 모집 기간 - recruit-period
export const SRecruit = styled.div`
  display: flex;
  h3 {
    margin-right: 1vw;
  }
`

export const SRecruitInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: 15%;
  height: calc(3.5vh + 15px);
  border: 2px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 1vw;
  padding-right: 30px;
  margin-right: 1vw;
`

// 6. 강의 일시
export const SLecture = styled.div`
  display: flex;
  h3 {
    margin-right: 1vw;
  }
`

export const SLectureInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: 15%;
  height: calc(3.5vh + 15px);
  border: 2px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 1vw;
  padding-right: 30px;
  margin-right: 1vw;
`

export const STimeInput = styled.input`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  width: 15%;
  height: calc(3.5vh + 15px);
  border: 2px solid #cdcdcd;
  border-radius: 8px;
  padding-left: 1vw;
  padding-right: 30px;
`

export const SRadio = styled.fieldset`
  border: none;
  display: flex;
  align-items: center;
  margin: auto 0;
  .radio-container {
    display: flex;
    margin: 0;
  }
  input {
    margin: 0;
    margin-left: 5px;
    margin-right: 8px;
  }
  div {
    font-family: ${(props) => props.theme.fontFamily.Regular};
    font-size: ${(props) => props.theme.fontSize.p};
  }
  span {
    margin: 0;
    margin-right: 5px;
  }
`

// 글자수 제한 p태그
export const SLimit = styled.p`
  text-align: right;
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
`

// 요청내용 요약 - request-summary
export const SSummary = styled.div`
  font-size: ${(props) => props.theme.fontSize.p};
  resize: none;
`

export const SSummaryText = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  width: 98%;
  height: 15%;
  border: 2px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 1vw;
  padding-top: 10px;
  padding-bottom: 10px;
  resize: none;
  &::placeholder {
    color: #cdcdcd;
  }
`

// 요청내용 상세 - request-detail
export const SDetail = styled.div`
  font-size: ${(props) => props.theme.fontSize.p};
  resize: none;
`

export const SDetailText = styled.textarea`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.p};
  width: 98%;
  height: 15%;
  border: 2px solid #cdcdcd;
  border-radius: 8px;
  outline: none;
  padding-left: 1vw;
  padding-top: 10px;
  padding-bottom: 10px;
  resize: none;
  &::placeholder {
    color: #cdcdcd;
  }
`

// 마지막 등록 버튼
export const SButton = styled.div`
  display: grid;
`

export const SRegistButton = styled.button`
  border: none;
  background-color: black;
  margin: auto;
  color: white;
  font-family: ${(props) => props.theme.fontFamily.Medium};
  font-size: calc(0.8vw + 0.5px);
  width: 7vw;
  height: 4.5vh;
  border-radius: 5px;
  cursor: pointer;
  place-items: center;
  text-align: center;

  :hover {
    font-family: ${(props) => props.theme.fontFamily.Bold};
    transform: translateY(-1px);
    color: ${(props) => props.theme.deeperYellow};
  }
`

export const SModal = styled.div`
  font-family: ${(props) => props.theme.fontFamily.Regular};
  font-size: ${(props) => props.theme.fontSize.h2};
`

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
`
