import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { lecturerNameAPI } from "../../utils/api/boardAPI"
import { SBox, SContent, SList, SListBox } from "./styles"

const LecturerList = ({ data, setLuid }) => {
  const [nameList, setNameList] = useState([])
  // const [Luid, setLuid] = useState(0);

  const handleProfile = (lid) => {
    window.open(`/board/profile/${lid}`)
  }

  useEffect(() => {
    lecturerNameAPI(data.id, setNameList)
  }, [])

  // if (nameList.length > 0) {
  return (
    <>
      <SBox>
        {nameList.length ? (
          <div className="title">신청 강사 현황 ({nameList.length}명)</div>
        ) : (
          <div className="title">신청 강사 현황</div>
        )}

        <SContent>
          {nameList.length ? (
            <SListBox>
              {nameList.map((item) => {
                return (
                  <SList key={item}>
                    <div
                      className="full-list"
                      onChange={(e) => setLuid(e.target.value)}
                    >
                      {/* 신청한 강사의 uid를 value로 지정해 나중에 api로 서버에 확정 전송 시 이 value를 담아서 보냄 */}
                      <input type="radio" name="lecturer" value={item.uid} />
                      {/* 강사의 이름(user.name)을 순서대로 출력 */}
                      <span
                        className="instructor"
                        onClick={(e) => handleProfile(item.uid)}
                      >
                        {item.user.name}
                      </span>
                    </div>
                  </SList>
                )
              })}
            </SListBox>
          ) : (
            <div className="empty-list">⏳모집 중입니다..!</div>
          )}
        </SContent>
      </SBox>
    </>
  )
  // } else {
  //   return (
  //     <SBox>
  //       <div className="empty-list">강사 대기중</div>
  //     </SBox>
  //   );
  // }
}

export default LecturerList
