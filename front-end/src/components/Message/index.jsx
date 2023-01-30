import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import MessageItem from "../MessageItem"
import Pagination from "../Pagination"

const SERVER_URL = "http://localhost:8080"
const Message = () => {
  const [messageData, setMessageData] = useState([])
  const limit = 6
  const [page, setPage] = useState(1) // 현재 페이지 번호
  const offset = (page - 1) * limit // 첫 게시물의 위치

  // 받은 메시지 모두 불러오는 요청
  const axios_get = async () => {
    const userId = localStorage.getItem("id")
    // =================테스트로 1번 유저꺼 가져옴==================
    // 수정필요!!!!!
    // =============================================================
    const res = await axios.get(`${SERVER_URL}/message/user/1`)
    setMessageData(res.data.response)
  }

  const readMessage = () => {
    console.log("여기 들어오나요")
    axios_get()
  }
  // 렌더링 될 때마다 해당 유저가 받은 모든 메시지 불러옴
  useEffect(() => {
    axios_get()
  }, [])

  return (
    <>
      {messageData.length === 0 ? (
        <p>메시지함이 비어있습니다</p>
      ) : (
        <div>
          <p>아직 읽지 않은 메시지가 {messageData.length}통 있습니다</p>
          {messageData.slice(offset, offset + limit).map((item) => {
            return (
              <div key={item.id} style={{ margin: "15px 0" }}>
                <MessageItem data={item} readMessage={readMessage} />
              </div>
            )
          })}
        </div>
      )}
      {messageData.length < 7 ? null : (
        <Pagination
          total={messageData.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  )
}

export default Message
