import React, { useContext } from "react";
import { LoginStateContext } from "../../App";
import { SButton, SGroup } from "./styles";
import axios from "axios";

const LectureModalButton = ({ data }) => {
  const BOARD_URL = "http://localhost:8080/board";

  const { isLogined, userInfo } = useContext(LoginStateContext);

  // api 요청 내용 ==============================================================
  // 수강 신청
  const enrollClass = async () => {
    try {
      await axios.post(`${BOARD_URL}/student`, {
        uid: userInfo.id,
        bid: data.id,
      });
      console.log("수강 신청 성공");
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
      console.log("강사 신청 성공");
    } catch (err) {
      console.log(err);
    }
  };

  // 신청 취소
  const deleteClass = async () => {
    const user = userInfo.id;
    const lecture = data.id;
    try {
      await axios.delete(`${BOARD_URL}/apply/${user}/${lecture}`);
      console.log("신청 취소 성공");
    } catch (err) {
      console.log(err);
    }
  };

  // 강의 확정
  const fixClass = async () => {
    const lecture = data.id;
    try {
      await axios.put(`${BOARD_URL}/${lecture}`);
      console.log("강의 확정 성공");
    } catch (err) {
      console.log(err);
    }
  };
  // ============================================================================

  return (
    <>
      {/* 1. 방장 / 강의 미확정 */}
      {isLogined && data.uid === userInfo.id && data.isFixed === 0 ? (
        <SGroup>
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
