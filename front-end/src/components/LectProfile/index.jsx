import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { lecProfileAPI } from "../../utils/api/boardAPI";
import Profile from "../Profile";
import { Grid } from "@mui/material";
import walkingChick from "../../assets/images/walkingChick.gif";

const LecProfile = () => {
  // URL의 강사 아이디를 useParama로 받아오기
  const id = useParams().lid;
  const [data, setData] = useState([]);

  useEffect(() => {
    lecProfileAPI(id, setData);
  }, []);

  return (
    <Grid container>
      <Grid item xs={0} md={2.5} />
      <Grid item xs={12} md={7}>
        <div style={{ position: "relative" }}>
          <h1 className="headline">
            📝강사 {data.name}님의 프로필 정보입니다!
          </h1>
          <Profile
            handleProfileEditBtn={null}
            user={data}
            userState={"other"}
          />
          <img
            styles={{
              position: "absolute",
              left: "510px",
              top: "740px",
              height: "100px",
            }}
            src={walkingChick}
            alt="삐약이는 삐약삐약"
          />
        </div>
      </Grid>
      <Grid item xs={0} md={2.5} />
    </Grid>
  );
};

export default LecProfile;
