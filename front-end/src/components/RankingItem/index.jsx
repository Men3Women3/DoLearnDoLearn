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
import { imageURL } from "../../utils/api/baseURL";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const RankingItem = (props) => {
  const handleMoveToProfile = (userId) => {
    window.open(`/board/profile/${userId}`);
  };

  return (
    <SContainer onClick={(e) => handleMoveToProfile(props.item.id)}>
      {/* 프로필 사진, 이름, 점수 표시 */}
      <div className="profile-container">
        <img
          src={
            props.item.imgUrl
              ? `${imageURL}${props.item.imgUrl}`
              : defaultProfile
          }
          alt="profile-img"
        />
        <div>
          <h3>{props.item.name}</h3>
          <p>{props.item.point}</p>
        </div>
      </div>
      {/* SNS */}
      <SSNSContainer>
        {props.item.blog && (
          <a href={props.item.blog} target={"_blank"}>
            <FontAwesomeIcon className="icon" icon={faLink} />
          </a>
        )}
        {props.item.youtube && (
          <a href={props.item.youtube} target={"_blank"}>
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </a>
        )}
        {props.item.instagram && (
          <a href={props.item.instagram} target={"_blank"}>
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        )}
        {props.item.facebook && (
          <a href={props.item.facebook} target={"_blank"}>
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
