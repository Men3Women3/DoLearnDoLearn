import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { lecProfileAPI } from "../../utils/api/boardAPI";
import Profile from "../Profile";

const LecProfile = () => {
  // URL의 강사 아이디를 useParama로 받아오기
  const id = useParams().lid;
  const [data, setData] = useState([]);
  const isMe = "other";

  useEffect(() => {
    lecProfileAPI(id, setData);
  }, []);

  return (
    <div>
      <Profile handleProfileEditBtn={null} user={data} userState={isMe} />
    </div>
  );
};

export default LecProfile;
