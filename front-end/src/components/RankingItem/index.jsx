import React from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/images/thumbnail.png";
import { SContainer, SSNSContainer, SRank } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import defaultProfile from "../../assets/images/defaultProfile.png";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { imageURL } from "../../utils/api/baseURL";

const RankingItem = (props) => {
  const IMAGE_URL = imageURL;

  const handleMoveToProfile = (e) => {
    console.log(e.target);
    if (
      !e.target.className.includes("link") ||
      !e.target.className.includes("icon")
    ) {
      window.open(`/board/profile/${props.item.id}`);
    }
  };

  return (
    <SContainer onClick={(e) => handleMoveToProfile(e)}>
      {/* 프로필 사진, 이름, 점수 표시 */}
      <div className="profile-container">
        <img
          src={
            props.item.imgUrl
              ? `${IMAGE_URL}${props.item.imgUrl}`
              : defaultProfile
          }
          alt="profile-img"
        />
        <div>
          <div className="name">{props.item.name}</div>
          <div className="point">{props.item.point}</div>
        </div>
      </div>
      {/* SNS */}
      <SSNSContainer>
        {props.item.blog && (
          <a className="link" href={props.item.blog} target={"_blank"}>
            <FontAwesomeIcon className="icon" icon={faLink} />
          </a>
        )}
        {props.item.youtube && (
          <a className="link" href={props.item.youtube} target={"_blank"}>
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </a>
        )}
        {props.item.instagram && (
          <a
            className="link"
            href={`https://www.instagram.com/${props.item.instagram}/`}
            target={"_blank"}
          >
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        )}
        {props.item.facebook && (
          <a
            className="link"
            href={`https://facebook.com/${props.item.facebook}/`}
            target={"_blank"}
          >
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
        )}
      </SSNSContainer>
      {/* 랭크를 표시하기 위한 div */}
      <SRank className="rank">{props.index + 1}</SRank>
    </SContainer>
  );
};

export default RankingItem;
