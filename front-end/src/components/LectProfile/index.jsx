import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import logoImg from "../../assets/images/logo.png"
import { lecProfileAPI } from "../../utils/api/boardAPI"
import Profile from "../Profile"
import { Grid } from "@mui/material"

const LecProfile = () => {
  // URL의 강사 아이디를 useParama로 받아오기
  const id = useParams().lid
  const [data, setData] = useState([])

  useEffect(() => {
    lecProfileAPI(id, setData)
  }, [])

  return (
    <Grid container>
      <Grid item xs={0} md={2.5} />
      <Grid item xs={12} md={7}>
        <div>
          <h1 className="headline">
            📝강사 {data.name}님의 프로필 정보입니다!
          </h1>
          <Profile
            handleProfileEditBtn={null}
            user={data}
            userState={"other"}
          />
        </div>
      </Grid>
      <Grid item xs={0} md={2.5} />
    </Grid>
  )
}

export default LecProfile
