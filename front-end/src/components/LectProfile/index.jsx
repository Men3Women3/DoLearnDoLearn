import React from "react";
import { useParams } from "react-router";
import Profile from "../Profile";

const LecProfile = () => {
  // URL의 강사 아이디를 useParama로 받아오기
  const id = useParams().lid;

  // 당사자 정보인 경우에만 프로필 수정 버튼 보이도록 통제
  const isMe = "other";

  // lid로 강사 프로필 정보 가져오기
  // 1. 위의 id를 바탕으로 강사 정보 데이터 받아오기
  // 2.

  return (
    <div>
      <div>LecProfile</div>
      {/* <Profile  /> */}
    </div>
  );
};

export default LecProfile;
