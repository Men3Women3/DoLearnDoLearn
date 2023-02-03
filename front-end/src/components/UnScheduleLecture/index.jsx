import React, { useContext } from "react";
import UnScheduleLectureItem from "../UnScheduleLectureItem";
import profileImg from "../../assets/images/thumbnail.png";
import { Menu, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { SnippetFolder } from "@mui/icons-material";
import {
  getUnScheduledLecture,
  getUnScheduledLectureAPI,
  getUnScheduledLectureHostAPI,
  getUnScheduledLectureInstructorAPI,
  getUnScheduledLectureStudentAPI,
} from "../../utils/api/userAPI";
import { LoginStateContext } from "../../App";
import { Scontainer } from "./styles";

const UnScheduleLecture = () => {
  const getUserInfo = useContext(LoginStateContext); // 유저정보
  const [unScheduledLectureList, setUnScheduledLectureList] = useState([]); // 미확인 강의 리스트
  const [filterValue, setFilterValue] = useState("all"); // 필터 정보

  const handleChange = (e) => {
    // 필터값 변경
    setFilterValue(e.target.value);
  };

  // 필터값에 따라 API 다르게 요청
  const handleFilterData = () => {
    // 모두보기
    if (filterValue === "all") {
      getUnScheduledLectureAPI(
        getUserInfo.userInfo.id,
        setUnScheduledLectureList
      );
    }
    // 방장으로 신청한 글 보기
    else if (filterValue === "host") {
      getUnScheduledLectureHostAPI(
        getUserInfo.userInfo.id,
        setUnScheduledLectureList
      );
    }
    // 강사로 신청한 글 보기
    else if (filterValue === "instructor") {
      getUnScheduledLectureInstructorAPI(
        getUserInfo.userInfo.id,
        setUnScheduledLectureList
      );
    }
    // 학생으로 신청한 글 보기
    else {
      getUnScheduledLectureStudentAPI(
        getUserInfo.userInfo.id,
        setUnScheduledLectureList
      );
    }
  };

  // 렌더링시 미확인 강의 목록 받아옴
  useEffect(() => {
    getUnScheduledLectureAPI(
      getUserInfo.userInfo.id,
      setUnScheduledLectureList
    );
  }, []);

  useEffect(() => {
    // 필터 값 변경시, handlefilterData 함수 실행
    handleFilterData();
  }, [filterValue]);

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
            <MenuItem value="instructor">내가 강사인 글 보기</MenuItem>
            <MenuItem value="student">내가 수강생인 글 보기</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Scontainer>
        {unScheduledLectureList.length === 0 ? (
          <p>조건에 부합하는 강의 스케줄이 존재하지 않습니다</p>
        ) : (
          unScheduledLectureList.map((item) => {
            return (
              <div key={item.id} style={{ margin: "15px 0" }}>
                <UnScheduleLectureItem data={item} />
              </div>
            );
          })
        )}
      </Scontainer>
    </>
  );
};

export default UnScheduleLecture;
