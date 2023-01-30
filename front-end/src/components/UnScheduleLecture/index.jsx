import React, { useContext } from "react"
import UnScheduleLectureItem from "../UnScheduleLectureItem"
import profileImg from "../../assets/images/thumbnail.png"
import { Menu, Typography } from "@mui/material"
import { Modal } from "@mui/material"
import { Box } from "@mui/material"
import { Select } from "@mui/material"
import { MenuItem } from "@mui/material"
import { FormControl } from "@mui/material"
import { useState, useEffect } from "react"
import { SnippetFolder } from "@mui/icons-material"
import {
  getUnScheduledLecture,
  getUnScheduledLectureAPI,
} from "../../utils/api/userAPI"
import { LoginStateContext } from "../../App"

const UnScheduleLecture = () => {
  const getUserInfo = useContext(LoginStateContext)
  // 현재 로그인한 유저 데이터
  const user = getUserInfo.name
  // api로 받아오는 데이터(임시)
  const [totalUnScheduledLecture, setTotalUnScheduledLecture] = useState([
    {
      id: 1,
      time: "2023. 01. 16. 14:00 ~ 16:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "김싸피",
      teacher: "김싸피",
    },
    {
      id: 2,
      time: "2023. 01. 16. 16:00 ~ 18:00",
      title: "git 가르쳐주세요!",
      profileImg: { profileImg },
      host: "이싸피",
      teacher: "김싸피",
    },
    {
      id: 3,
      time: "2023. 01. 16. 18:00 ~ 20:00",
      title: "덧셈 가르쳐주세요!",
      profileImg: { profileImg },
      host: "박싸피",
      teacher: "김싸피",
    },
    {
      id: 4,
      time: "2023. 01. 16. 20:00 ~ 22:00",
      title: "요리 가르쳐주세요!",
      profileImg: { profileImg },
      host: "정싸피",
      teacher: "정싸피",
    },
    {
      id: 5,
      time: "2023. 01. 16. 22:00 ~ 24:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "장싸피",
      teacher: "박싸피",
    },
    {
      id: 6,
      time: "2023. 01. 17. 20:00 ~ 22:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "한싸피",
      teacher: "박싸피",
    },
    {
      id: 7,
      time: "2023. 01. 18. 22:00 ~ 24:00",
      title: "WebSocket 가르쳐주세요!",
      profileImg: { profileImg },
      host: "구싸피",
      teacher: "박싸피",
    },
  ])
  // select 선택시 받을 값
  const [filterValue, setFilterValue] = useState("all")
  // 필터된 데이터
  const [filteredData, setFilteredData] = useState(totalUnScheduledLecture)

  const handleChange = (e) => {
    // 모든 데이터에서 필터할 수 있도록 데이터 초기화
    setFilteredData(totalUnScheduledLecture)
    // 필터값 변경
    setFilterValue(e.target.value)
  }

  const handleFilterData = () => {
    if (filterValue === "all") {
      return
    } else if (filterValue === "host") {
      setFilteredData((data) => data.filter((x) => x.host === user))
    } else if (filterValue === "teacher") {
      setFilteredData((data) => data.filter((x) => x.teacher === user))
    } else {
      setFilteredData((data) =>
        data.filter((x) => x.teacher !== user && x.host !== user)
      )
    }
  }

  // 렌더링시 미확인 강의 목록 받아옴
  // useEffect(() => {
  //   getUnScheduledLectureAPI(1, setTotalUnScheduledLecture)
  //   setFilteredData(totalUnScheduledLecture)
  // }, [])

  useEffect(() => {
    // 필터 값 변경시, handlefilterData 함수 실행
    handleFilterData()
  }, [filterValue])

  console.log("데이터가 들어오나?", filteredData)
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>매칭되기 전 강의 목록입니다</h2>
        <FormControl sx={{ minWidth: 180 }} size="small">
          <Select value={filterValue} onChange={handleChange}>
            <MenuItem value="all">모두 보기</MenuItem>
            <MenuItem value="host">내가 방장인 글 보기</MenuItem>
            <MenuItem value="teacher">내가 강사인 글 보기</MenuItem>
            <MenuItem value="student">내가 수강생인 글 보기</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        {filteredData.length === 0 ? (
          <p>조건에 부합하는 강의 스케줄이 존재하지 않습니다</p>
        ) : (
          filteredData.map((item) => {
            return (
              <div key={item.id} style={{ margin: "15px 0" }}>
                <UnScheduleLectureItem data={item} />
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default UnScheduleLecture
