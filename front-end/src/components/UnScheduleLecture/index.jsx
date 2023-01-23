import React from "react"
import UnScheduleLectureItem from "../UnScheduleLectureItem"
import profileImg from "../../assets/images/thumbnail.png"
import { Typography } from "@mui/material"
import { Modal } from "@mui/material"
import { Box } from "@mui/material"
import { useState } from "react"

const UnScheduleLecture = () => {
  const [totalSchedule, setTotalSchedule] = useState([
    {
      id: 1,
      time: "2023. 01. 16. 14:00 ~ 16:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "김싸피",
    },
    {
      id: 2,
      time: "2023. 01. 16. 16:00 ~ 18:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "이싸피",
    },
    {
      id: 3,
      time: "2023. 01. 16. 18:00 ~ 20:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "박싸피",
    },
    {
      id: 4,
      time: "2023. 01. 16. 20:00 ~ 22:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "정싸피",
    },
    {
      id: 5,
      time: "2023. 01. 16. 22:00 ~ 24:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "장싸피",
    },
    {
      id: 6,
      time: "2023. 01. 17. 20:00 ~ 22:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "한싸피",
    },
    {
      id: 7,
      time: "2023. 01. 18. 22:00 ~ 24:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "구싸피",
    },
  ])

  return (
    <div>
      <h2>매칭되기 전 강의 목록입니다</h2>
      {totalSchedule.map((item) => {
        return (
          <div key={item.id} style={{ margin: "15px 0" }}>
            <UnScheduleLectureItem data={item} />
          </div>
        )
      })}
    </div>
  )
}

export default UnScheduleLecture
