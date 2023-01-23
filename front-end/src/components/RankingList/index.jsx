import React from "react";
import { useState } from "react";
import RankingItem from "../RankingItem";
import { SRankingSection, SRankingItemContainer } from "./styles";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar, faTrophy } from "@fortawesome/free-solid-svg-icons";

const RankingList = () => {
  const [rankingList, setRankingList] = useState([
    // 임시 데이터
    {
      id: 1,
      name: "김싸피",
      point: 4500,
      profileImg: "url",
      youtubeURL: "example",
      instaURL: "example",
      facebookURL: "example",
    },
    {
      id: 2,
      name: "박싸피",
      point: 4400,
      profileImg: "url",
      youtubeURL: "example",
      instaURL: "example",
      facebookURL: "example",
    },
    {
      id: 3,
      name: "최싸피",
      point: 4300,
      profileImg: "url",
      youtubeURL: "example",
      instaURL: "example",
      facebookURL: "example",
    },
    {
      id: 4,
      name: "홍싸피",
      point: 4200,
      profileImg: "url",
      youtubeURL: "example",
      instaURL: "example",
      facebookURL: "example",
    },
    {
      id: 5,
      name: "김싸피",
      point: 4100,
      profileImg: "url",
      youtubeURL: "example",
      instaURL: "example",
      facebookURL: "example",
    },
    {
      id: 6,
      name: "박싸피",
      point: 4000,
      profileImg: "url",
      youtubeURL: "example",
      instaURL: "example",
      facebookURL: "example",
    },
    {
      id: 7,
      name: "최싸피",
      point: 3900,
      profileImg: "url",
      youtubeURL: "example",
      instaURL: "example",
      facebookURL: "example",
    },
    {
      id: 8,
      name: "홍싸피",
      point: 3800,
      profileImg: "url",
      youtubeURL: "example",
      instaURL: "example",
      facebookURL: "example",
    },
  ]);
  // 데이터 불러오기

  return (
    <SRankingSection>
      <Grid container>
        <Grid item xs={0} md={1.5} />
        <Grid item xs={12} md={9}>
          <h1>
            {/* <FontAwesomeIcon className="ranking-icon" icon={faTrophy} /> */}
            최고의 선생님들(미정)
          </h1>
          <SRankingItemContainer>
            {rankingList.map((item) => (
              <RankingItem key={item.id} item={item} />
            ))}
          </SRankingItemContainer>
        </Grid>
        <Grid item xs={0} md={1.5} />
      </Grid>
    </SRankingSection>
  );
};

export default RankingList;
