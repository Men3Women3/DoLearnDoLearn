import React, { useContext, useEffect, useState } from "react";
import { LoginStateContext } from "../../App";
import { SButton, SGroup, SRadioInput, SList } from "./styles";
import {
  deleteEnrollAPI,
  enrollClassAPI,
  enrollLecturerAPI,
  fixClassAPI,
} from "../../utils/api/boardAPI";
import axios from "axios";

const LectureModalButton = ({ data, open, setOpen, handleOpen }) => {
  const { isLogined, userInfo } = useContext(LoginStateContext);

  // api 요청 내용 ===================================
  // 수강 신청
  const enrollClass = () => {
    enrollClassAPI(userInfo.id, data.id);
  };

  // 강사 신청
  const enrollLecturer = () => {
    enrollLecturerAPI(userInfo.id, data.id);
    setOpen(false);
  };

  // 신청 취소
  const deleteClass = () => {
    deleteEnrollAPI(userInfo.id, data.id);
    setOpen(false);
  };

  // 방장의 강의 확정
  const fixClass = () => {
    fixClassAPI(data.id);
    setOpen(false);
  };
  // =================================================

  const SERVER_URL = "http://localhost:8080";
  const [lecList, setLecList] = useState([]);
  const handleLecList = async () => {
    const board = data.id;
    const res = await axios.get(`${SERVER_URL}/board/instructor-list/${board}`);
    // setLecList(res.data.response);
    console.log(res.data.response[0].user.name);
  };

  const [stuList, setStuList] = useState([]);
  const handleStuList = async () => {
    const board = data.id;
    const res = await axios.get(`${SERVER_URL}/board/student-list/${board}`);
    // setStuList(res.data.response);
    if (res.data.response === "신청한 학생이 없습니다") {
      console.log(res.data.response);
    } else {
      console.log(res.data.response[0].uid);
    }
  };

  return (
    <>
      <button onClick={(handleLecList, handleStuList)}>테스트</button>
      {/* 1. 방장 / 강의 미확정 */}
      {isLogined && data.uid === userInfo.id && data.isFixed === 0 ? (
        <SGroup>
          {lecList.map((item, i) => {
            return (
              <SList key={i}>
                <label>
                  <SRadioInput
                    type="radio"
                    name="lecturer"
                    value={item[i].user.name}
                  />
                  <span>{item[i].user.name}</span>
                </label>
              </SList>
            );
          })}
          <SButton onClick={fixClass}>모집완료</SButton>
          <SButton onClick={deleteClass}>신청취소</SButton>
        </SGroup>
      ) : (
        ""
      )}
      {/* 2. 신청자 */}
      {isLogined && data.isFixed === 0 ? (
        <SGroup>
          <SButton>Live 입장</SButton>
          <SButton onClick={deleteClass}>신청취소</SButton>
        </SGroup>
      ) : (
        ""
      )}
      {/* 3. 미신청자 */}
      {isLogined ? (
        <SGroup>
          <SButton onClick={enrollLecturer}>강사 신청</SButton>
          <SButton onClick={enrollClass}>수강생 신청</SButton>
        </SGroup>
      ) : (
        ""
      )}
    </>
  );
};

export default LectureModalButton;
