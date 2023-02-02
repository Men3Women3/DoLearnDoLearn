import React from "react";
import { useParams } from "react-router";
import Profile from "../Profile";

const LecProfile = () => {
  // URL의 강사 아이디를 useParama로 받아오기
  const lid = useParams();

  // lid로 강사 프로필 정보 가져오기

  console.log(lid);

  return (
    <div>
      <div>LecProfile</div>
      {/* <Profile /> */}
    </div>
  );
};

export default LecProfile;
