import React, { useContext, useState } from "react";
import { LoginStateContext } from "../../App";
import { SButton, SButtonGroup } from "./styles";
import axios from "axios";

const LectureModalButton = ({ data }) => {
  const BOARD_URL = "http://localhost:8080/board";

  const { isLogined, userInfo } = useContext(LoginStateContext);
  const [instructorList, setInstructorList] = useState([]);

  console.log(isLogined);
  // api 요청 내용 ==============================================================
  // 신청한 강사 목록
  const bringList = async (lecture) => {
    try {
      const res = await axios.get(`${BOARD_URL}/instructor-list/${lecture}`);
      setInstructorList(res);
    } catch (err) {
      console.log(err);
    }
  };

  // 수강 신청
  const enrollClass = async () => {
    try {
      await axios.post(`${BOARD_URL}/student`, {
        uid: userInfo.id,
        bid: data.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 강사 신청
  const enrollLecturer = async () => {
    try {
      await axios.post(`${BOARD_URL}/instructor`, {
        uid: userInfo.id,
        bid: data.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 신청 취소
  const deleteClass = async (user, lecture) => {
    try {
      await axios.delete(`${BOARD_URL}/apply/${user}/${lecture}`);
    } catch (err) {
      console.log(err);
    }
  };

  // 강의 확정
  const fixClass = async (lecture) => {
    try {
      await axios.put(`${BOARD_URL}/${lecture}`);
    } catch (err) {
      console.log(err);
    }
  };
  // ============================================================================

  return (
    <>
      {/* 1. 방장 / 강의 미확정 */}
      <SButtonGroup>
        <SButton onClick={fixClass}>모집완료</SButton>
        <SButton onClick={deleteClass}>신청취소</SButton>
      </SButtonGroup>
      {/* 2. 방장 내지는 신청자 / 강의 확정 */}
      <SButtonGroup>
        <SButton>Live 입장</SButton>
        <SButton onClick={deleteClass}>신청취소</SButton>
      </SButtonGroup>
      {/* 3. 미신청자 */}
      <SButtonGroup>
        <SButton onClick={enrollLecturer}>강사 신청</SButton>
        <SButton onClick={enrollClass}>수강생 신청</SButton>
      </SButtonGroup>
      {/* 4. 미로그인 */}
    </>
  );
};

export default LectureModalButton;
