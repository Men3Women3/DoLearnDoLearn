import React, { useContext, useEffect, useState } from "react";
import { LoginStateContext } from "../../App";
import { SButton, SButtonBox, SListBox, SBox } from "./styles";
import {
  deleteEnrollAPI,
  enrollClassAPI,
  enrollLecturerAPI,
  fixClassAPI,
  lecturerListAPI,
  studentListAPI,
} from "../../utils/api/boardAPI";

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

  // 강의 확정
  const fixClass = () => {
    fixClassAPI(data.id);
    setOpen(false);
  };

  // 강사 목록 호출
  // LectureModal 클릭시 즉시 확인
  const [nameList, setNameList] = useState([]); // 강사 목록용 배열
  const [lecList, setLecList] = useState([]); // 강사 id용 배열
  const [stuList, setStuList] = useState([]); // 신청자 id용 배열
  useEffect(() => {});
  lecturerListAPI(data.id, setNameList, setLecList);
  studentListAPI(data.id, setStuList);

  // 수강생 목록 호출

  // =================================================

  return (
    <>
      {/* <button onClick={handlestuList}>테스트</button> */}
      {/* 1. 방장 / 강의 미확정 */}
      {isLogined && data.uid === userInfo.id && data.isFixed === 0 ? (
        <>
          {/* 신청 강사 목록이 비어있지 않은 경우에는 목록을 보여주고 그 외에는 공백 */}
          {lecList.length > 0 ? (
            <SBox>
              {lecList.map((item, i) => {
                return (
                  // 여기 수정하자 =======================
                  <SListBox key={i}>
                    <div>
                      {/* 신청한 강사의 uid를 value로 지정해 나중에 api로 서버에 확정 전송 시 이 value를 담아서 보냄 */}
                      <input type="radio" name="lecturer" value={item.uid} />
                      {/* 강사의 이름(user.name)을 순서대로 출력 */}
                      <span>{item.user.name}</span>
                    </div>
                  </SListBox>
                );
              })}
            </SBox>
          ) : (
            ""
          )}
          <SButtonBox>
            <SButton onClick={fixClass}>모집완료</SButton>
            <SButton onClick={deleteClass}>신청취소</SButton>
          </SButtonBox>
        </>
      ) : (
        ""
      )}
      {/* 2. 신청자 */}
      {/* 로그인을 한 사용자고 강사 혹은 수강생으로 신청한 이력이 있는 경우 */}
      {isLogined &&
      (lecList.includes(userInfo.id) || stuList.includes(userInfo.id)) ? (
        <SButtonBox>
          <SButton>Live 입장</SButton>
          <SButton onClick={deleteClass}>신청취소</SButton>
        </SButtonBox>
      ) : (
        ""
      )}
      {/* 3. 미신청자 */}
      {isLogined ? (
        <SButtonBox>
          <SButton onClick={enrollLecturer}>강사 신청</SButton>
          <SButton onClick={enrollClass}>수강생 신청</SButton>
        </SButtonBox>
      ) : (
        ""
      )}
    </>
  );
};

export default LectureModalButton;
