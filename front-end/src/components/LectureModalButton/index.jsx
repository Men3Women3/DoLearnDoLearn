import React, { useContext } from "react";
import { LoginStateContext } from "../../App";
import { SButton, SGroup } from "./styles";
import {
  deleteEnrollAPI,
  enrollClassAPI,
  enrollLecturerAPI,
  fixClassAPI,
} from "../../utils/api/boardAPI";

const LectureModalButton = ({ data }) => {
  const { isLogined, userInfo } = useContext(LoginStateContext);

  // api 요청 내용 ===================================
  const enrollClass = () => {
    enrollClassAPI(userInfo.id, data.id);
  };

  // 강사 신청
  const enrollLecturer = () => {
    enrollLecturerAPI(userInfo.id, data.id);
  };

  // 신청 취소
  const deleteClass = () => {
    deleteEnrollAPI(userInfo.id, data.id);
  };

  // 강의 확정
  const fixClass = () => {
    fixClassAPI(data.id);
  };
  // =================================================
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
