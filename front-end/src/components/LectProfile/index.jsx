import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { lecProfileAPI } from "../../utils/api/boardAPI";
import Profile from "../Profile";
import { Grid } from "@mui/material";

const LecProfile = () => {
  // URL의 강사 아이디를 useParama로 받아오기
  const id = useParams().lid;
  const [data, setData] = useState([]);
  const isMe = "other";

  useEffect(() => {
    lecProfileAPI(id, setData);
  }, []);

  return (
    <Grid container>
      <Grid item xs={0} md={1.5} />
      <Grid item xs={12} md={9}>
        <div>
          <Profile handleProfileEditBtn={null} user={data} userState={isMe} />
        </div>
      </Grid>
      <Grid item xs={0} md={1.5} />
    </Grid>
  );
};

export default LecProfile;
