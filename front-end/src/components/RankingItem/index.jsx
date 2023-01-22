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

const RankingItem = (props) => {
  console.log(props);
  return (
    <SContainer>
      {/* 프로필 사진, 이름, 점수 표시 */}
      <div className="profile-container">
        <img src={profileImg} alt="profile-img" />
        <div>
          <h3>{props.item.name}</h3>
          <p>{props.item.point}</p>
        </div>
      </div>
      {/* SNS */}
      <SSNSContainer>
        <NavLink>
          <FontAwesomeIcon className="icon" icon={faYoutube} />
        </NavLink>
        <NavLink>
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </NavLink>
        <NavLink>
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </NavLink>
      </SSNSContainer>
      {/* 랭크를 표시하기 위한 div */}
      <SRank className="rank">{props.item.id}</SRank>
    </SContainer>
  );
};

export default RankingItem;
