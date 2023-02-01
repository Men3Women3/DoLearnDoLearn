import React, { useContext, useEffect, useState } from "react";
import { LoginStateContext } from "../../App";
import { Flag } from "../BoardList";
import { SButton, SButtonBox } from "./styles";
import {
  cancelEnrollAPI,
  enrollClassAPI,
  enrollLecturerAPI,
  fixClassAPI,
  lecturerNameAPI,
  lecListAPI,
  stuListAPI,
  deleteClassAPI,
} from "../../utils/api/boardAPI";

const LectureModalButton = ({ data, setOpen }) => {
  const { isLogined, userInfo } = useContext(LoginStateContext);
  const { flag, setFlag } = useContext(Flag);

  // api 요청 내용 ===================================
  // 수강 신청
  const enrollClass = async () => {
    await enrollClassAPI(userInfo.id, data.id);
    setFlag(!flag);
    setOpen(false);
  };

  // 강사 신청
  const enrollLecturer = async () => {
    await enrollLecturerAPI(userInfo.id, data.id);
    setFlag(!flag);
    setOpen(false);
  };

  // 폐강
  const deleteClass = async () => {
    await deleteClassAPI(data.id);
    setFlag(!flag);
    setOpen(false);
  };

  // 신청 취소
  const cancelClass = async () => {
    await cancelEnrollAPI(userInfo.id, data.id);
    setFlag(!flag);
    setOpen(false);
  };

  // 강의 확정
  const fixClass = async () => {
    await fixClassAPI(data.id);
    setFlag(!flag);
    setOpen(false);
  };

  // 강사 목록 호출
  // LectureModal 클릭시 즉시 확인
  const [nameList, setNameList] = useState([]);
  const [stuList, setStuList] = useState([]);
  const [lecList, setLecList] = useState([]);
  useEffect(() => {
    lecturerNameAPI(data.id, setNameList);
    lecListAPI(data.id, setLecList);
    stuListAPI(data.id, setStuList);
  }, []);

  // 테스트용
  // console.log(stuList);
  console.log(lecList);

  // =================================================

  if (data.uid === userInfo.id) {
    if (data.isFixed === 0) {
      return (
        <>
          {/* 신청 강사 목록이 비어있지 않은 경우에는 목록을 보여주고 그 외에는 공백 */}
          <SButtonBox>
            <SButton onClick={fixClass}>모집완료</SButton>
            <SButton onClick={deleteClass}>강의삭제</SButton>
          </SButtonBox>
        </>
      );
    } else {
      return (
        <SButtonBox>
          <SButton>Live 입장</SButton>
          <SButton onClick={cancelClass}>신청취소</SButton>
        </SButtonBox>
      );
    }
  } else if (lecList.includes(userInfo.id) || stuList.includes(userInfo.id)) {
    if (data.isFixed === 0) {
      return (
        <SButtonBox>
          <SButton onClick={cancelClass}>신청취소</SButton>
        </SButtonBox>
      );
    } else {
      return (
        <SButtonBox>
          <SButton>Live 입장</SButton>
          <SButton onClick={cancelClass}>신청취소</SButton>
        </SButtonBox>
      );
    }
  } else if (isLogined) {
    return (
      <SButtonBox>
        <SButton onClick={enrollLecturer}>강사 신청</SButton>
        <SButton onClick={enrollClass}>수강생 신청</SButton>
      </SButtonBox>
    );
  } else {
    return "";
  }
};

export default LectureModalButton;
