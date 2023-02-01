import React, { useState } from "react";
import { useContext } from "react";
import { LoginStateContext, LoginStateHandlerContext } from "../../App";
import {
  SProfileEditContainer,
  SSubContainerUp,
  SSubContainerDown,
  SSelfIntroduction,
  SInput,
  SBlackButton,
  STextAreaIcon,
  SInputIcon,
} from "./styles";

import defaultProfileImg from "../../assets/images/defaultProfile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faGear, faLink } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const ProfileEdit = (props) => {
  const SERVER_URL = "http://localhost:8080";
  // context API에서 유저 정보 가져오기
  const getUserInfo = useContext(LoginStateContext);
  const { handleIsLogined, handleLogout, handleUserInfo } = useContext(
    LoginStateHandlerContext
  );
  // 받아오는 데이터 -> 수정될 데이터
  const [blogLink, setBlogLink] = useState(getUserInfo.userInfo.blog);
  const [youtubeLink, setYoutubeLink] = useState(getUserInfo.userInfo.youtube);
  const [instagram, setInstagram] = useState(getUserInfo.userInfo.instagram);
  const [facebook, setFacebook] = useState(getUserInfo.userInfo.facebook);
  const [selfIntroduction, setSelfIntroduction] = useState(
    getUserInfo.userInfo.info
  );

  // 프로필 이미지 관련 변수
  const [profileImg, setProfileImg] = useState({
    image_file: "",
    preview_URL: getUserInfo.userInfo.imgUrl
      ? `${SERVER_URL}${getUserInfo.userInfo.imgUrl}`
      : defaultProfileImg,
  });

  const fileInput = React.useRef(null);

  // 프로필 이미지 수정을 눌렀을 때,
  // 사진 파일 선택할 수 있는 창 띄움
  const handleEditProfileImg = (e) => {
    fileInput.current.click();
  };
  // 사진 파일 선택한 후,
  // 바뀐 파일로 프로필 사진 변경 미리보기
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setProfileImg({
          image_file: file,
          preview_URL: previewImgUrl,
        });
      }
    };
  };

  // DB에 수정요청을 하는 axios 함수
  const updateUserInfoAPI = () => {
    const data = {
      id: getUserInfo.userInfo.id,
      info: selfIntroduction,
      blog: blogLink,
      instagram: instagram,
      facebook: facebook,
      youtube: youtubeLink,
    };
    axios
      .put(`${SERVER_URL}/user`, data, {
        headers: {
          // ------------------------------------------
          // -----------------수정 필요----------------
          // 일단은 갱신 신경안쓰고 로컬스토리지에 들어있는 엑세스토큰으로 변경 시도!!
          // ------------------------------------------
          // ------------------------------------------
          Authentication: localStorage.getItem("accessToken"),
        },
        // 성공하면 app에서 관리중인 유저 데이터 정보도 업데이트
      })
      .then((res) => {
        console.log("프로필 사진 제외 업데이트 완료");
        handleUserInfo(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfileImgAPI = () => {
    const formData = new FormData();
    formData.append("profileImg", profileImg.image_file);
    console.log("프로필 보내고 있어요", profileImg);
    console.log(formData);
    axios
      .post(
        `${SERVER_URL}/user/upload-img/${getUserInfo.userInfo.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log("이미지파일", profileImg);
        console.log("프로필 이미지 업데이트 완료");
        handleUserInfo(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 기본 이미지로 되돌리기 (defaultProfile로)
  const handleBackToDefaultProfile = () => {
    setProfileImg({
      image_file: null,
      preview_URL: "",
    });
  };

  // 수정완료 버튼을 눌렀을 때 기능
  // 입력받은 데이터를 db에서 수정하도록 PUT 요청
  // 다시 프로필 화면으로 이동
  const handleCompleteEdit = () => {
    updateUserInfoAPI();
    updateProfileImgAPI();
    props.handleProfileEditBtn();
  };

  return (
    <SProfileEditContainer>
      <div className="profileContentContainer">
        <SSubContainerUp>
          {/* 프로필 이미지 */}
          <div className="profile-container">
            <img
              className="profile__img"
              src={
                profileImg.preview_URL
                  ? profileImg.preview_URL
                  : defaultProfileImg
              }
              alt="defaultProfile"
              onClick={handleEditProfileImg}
            />
            <FontAwesomeIcon
              className="profil-edit__icon"
              icon={faGear}
              onClick={handleEditProfileImg}
            />
            <input
              type="file"
              // 가능한 업로드 파일 형식 제한
              accept="image/jpg, image/jpeg, image/png"
              ref={fileInput}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          <section>
            {/* 배지 */}
            {/* <img
                src={startRankImg}
                alt="start_rank_Img"
                // style={{ height: "calc(1vw + 8px) !important" }}
              /> */}
            <div>
              {/* 이름 */}
              <span>{getUserInfo.userInfo.name}</span>
              {/* 이메일 */}
              <p>{getUserInfo.userInfo.email}</p>
            </div>
            {/* 마일리지 바 */}
            <div>
              <button
                className="back__btn"
                onClick={handleBackToDefaultProfile}
              >
                기본 이미지로 되돌리기
              </button>
              {/* <FontAwesomeIcon
                icon={faLocationPin}
                style={{
                  color: "black",
                  height: "calc(1vw + 1px)",
                  marginTop: "10px",
                }}
              />
              <div className="wrapper" /> */}
            </div>
          </section>
        </SSubContainerUp>

        {/* 선택항목 */}
        <SSubContainerDown>
          <div className="input__container">
            <SInput
              className={blogLink ? "tip active__input" : "tip"}
              value={blogLink}
              onChange={(e) => setBlogLink(e.target.value)}
              type="text"
              placeholder="블로그 링크를 입력해 주세요"
            />
            <SInputIcon
              className={blogLink ? "active__icon" : ""}
              icon={faLink}
            />
          </div>
          <div className="input__container">
            <SInput
              className={youtubeLink ? "tip active__input" : "tip "}
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              type="text"
              placeholder="유튜브 링크를 입력해 주세요"
            />
            <SInputIcon
              className={youtubeLink ? "active__icon" : " "}
              icon={faYoutube}
            />
          </div>
          <div className="input__container">
            <SInput
              className={instagram ? "tip active__input" : "tip"}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              type="text"
              placeholder="인스타그램 계정을 입력해 주세요"
            />
            <SInputIcon
              className={instagram ? "active__icon" : ""}
              icon={faInstagram}
            />
          </div>
          <div className="input__container">
            <SInput
              className={facebook ? "tip active__input" : "tip"}
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              type="text"
              placeholder="페이스북 계정을 입력해 주세요"
            />
            <SInputIcon
              className={facebook ? "active__icon" : " "}
              icon={faFacebook}
            />
          </div>
          <div className="input__container">
            <SSelfIntroduction
              maxLength={500}
              className={selfIntroduction ? "tip active__input" : "tip"}
              value={selfIntroduction}
              onChange={(e) => setSelfIntroduction(e.target.value)}
              type="text"
              placeholder="자기소개를 입력해 주세요"
            />
            <STextAreaIcon
              className={
                selfIntroduction
                  ? "self-introduction__img active__icon"
                  : "self-introduction__img"
              }
              icon={faComment}
              flip="horizontal"
            />
          </div>
          <p className="typing-length">{selfIntroduction.length} / 500</p>
          <SBlackButton className="black-button" onClick={handleCompleteEdit}>
            수정 완료
          </SBlackButton>
        </SSubContainerDown>
      </div>
    </SProfileEditContainer>
  );
};

export default ProfileEdit;
