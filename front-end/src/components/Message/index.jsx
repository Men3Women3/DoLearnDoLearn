import React from "react"
import { useState } from "react"
import MessageItem from "../MessageItem"

const Message = () => {
  const [messageData, setMessageData] = useState([
    {
      id: 1,
      is_checked: true,
      is_confirm: true,
      title: "WebSocket 가르쳐주세요!",
      start_time: "2023.01.14 14:00",
      end_time: "2023.01.14 16:00",
      created_time: "01.12 15:27",
      content: "[확정] WebSocket 가르쳐주세요!",
      sender: "관리자",
    },
    {
      id: 2,
      is_checked: false,
      is_confirm: false,
      title: "WebSocket 가르쳐주세요!",
      start_time: "2023.01.14 14:00",
      end_time: "2023.01.14 16:00",

      created_time: "01.12 11:53",
      content: "[폐강] WebSocket 가르쳐주세요!가르쳐주세요!",
      sender: "관리자",
    },
    {
      id: 3,
      is_checked: true,
      is_confirm: true,
      title: "WebSocket 가르쳐주세요!",
      start_time: "2023.01.14 14:00",
      end_time: "2023.01.14 16:00",

      created_time: "01.10 10:01",
      content:
        "[확정] WebSocket 가르쳐주세요!WebSocket 가르쳐주세요!WebSocket 가르쳐주세요!",
      sender: "관리자",
    },
    {
      id: 4,
      is_checked: false,
      is_confirm: false,
      title: "WebSocket 가르쳐주세요!",
      start_time: "2023.01.14 14:00",
      end_time: "2023.01.14 16:00",

      created_time: "01.04 21:01",
      content: "[폐강] WebSocket 가르쳐주세요!",
      sender: "관리자",
    },
    {
      id: 5,
      is_checked: true,
      is_confirm: true,
      title: "WebSocket 가르쳐주세요!",
      start_time: "2023.01.14 14:00",
      end_time: "2023.01.14 16:00",

      created_time: "12.27 04:33",
      content: "[확정] WebSocket 가르쳐주세요!",
      sender: "관리자",
    },
    {
      id: 6,
      is_checked: true,
      is_confirm: true,
      title: "WebSocket 가르쳐주세요!",
      start_time: "2023.01.14 14:00",
      end_time: "2023.01.14 16:00",

      created_time: "12.27 04:33",
      content: "[확정] WebSocket 가르쳐주세요!",
      sender: "관리자",
    },
    {
      id: 7,
      is_checked: false,
      is_confirm: false,
      title: "WebSocket 가르쳐주세요!",
      start_time: "2023.01.14 14:00",
      end_time: "2023.01.14 16:00",

      created_time: "12.27 04:33",
      content: "[폐강] WebSocket 가르쳐주세요!",
      sender: "관리자",
    },
  ])
  return (
    <>
      {messageData.length === 0 ? (
        <p>메시지함이 비어있습니다</p>
      ) : (
        <div>
          <p>아직 읽지 않은 메시지가 {messageData.length}통 있습니다</p>
          {messageData.map((item) => {
            return (
              <div key={item.id} style={{ margin: "15px 0" }}>
                <MessageItem data={item} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Message
