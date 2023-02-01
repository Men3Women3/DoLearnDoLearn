import React, { useEffect, useState } from "react";
import { lecturerNameAPI } from "../../utils/api/boardAPI";
import { SBox, SList, SListBox } from "./styles";

const LecturerList = ({ data }) => {
  const [nameList, setNameList] = useState([]);
  useEffect(() => {
    lecturerNameAPI(data.id, setNameList);
  }, []);

  const openProfile = () => {
    // 강사 프로필 띄우기
    console.log("프로필 버튼 작동 확인");
  };

  if (nameList.length > 0) {
    return (
      <SBox>
        <h4 className="title">신청 강사</h4>

        <SListBox>
          {nameList.map((item, i) => {
            return (
              <>
                <SList key={i}>
                  <div className="full-list">
                    {/* 신청한 강사의 uid를 value로 지정해 나중에 api로 서버에 확정 전송 시 이 value를 담아서 보냄 */}
                    <input type="radio" name="lecturer" value={item.uid} />
                    {/* 강사의 이름(user.name)을 순서대로 출력 */}
                    <span onClick={openProfile}>{item.user.name}</span>
                  </div>
                </SList>
              </>
            );
          })}
        </SListBox>
      </SBox>
    );
  } else {
    return (
      <SBox>
        <div className="empty-list">강사 대기중</div>
      </SBox>
    );
  }
};

export default LecturerList;
