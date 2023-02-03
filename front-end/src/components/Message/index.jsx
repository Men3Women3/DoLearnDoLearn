import React, { useContext, useEffect, useState } from "react";
import { UnreadMessageContext } from "../../App";
import { getMessageListAPI } from "../../utils/api/messageAPI";
import MessageItem from "../MessageItem";
import Pagination from "../Pagination";

const Message = () => {
  const userId = localStorage.getItem("id");
  const { unreadMessageCnt, setStateMessageUpdate } =
    useContext(UnreadMessageContext);
  const [messageData, setMessageData] = useState([]);
  // 메시지 읽음 여부 처리할 변수
  const [checkState, setCheckState] = useState(false);
  // 메시지 삭제 여부 처리할 변수
  const [checkDeleteState, setCheckDeleteState] = useState(false);
  const limit = 6;
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offset = (page - 1) * limit; // 첫 게시물의 위치

  // 메시지를 읽었다면(checkState가 true일 때), 다시 모든 메시지 불러옴
  useEffect(() => {
    // 다시 체크해주기 위해 초기화
    setCheckState(false);
    getMessageListAPI(userId, setMessageData);
  }, [checkState]);

  // 메시지 지웠다면(checkDeleteState가 trud일 때), 다시 모든 메시지 불러옴
  useEffect(() => {
    setCheckDeleteState(false);
    getMessageListAPI(userId, setMessageData);
  }, [checkDeleteState]);

  return (
    <>
      {messageData.length === 0 ? (
        <p>메시지함이 비어있습니다</p>
      ) : (
        <div>
          <p>아직 읽지 않은 메시지가 {unreadMessageCnt}통 있습니다</p>
          {messageData.slice(offset, offset + limit).map((item) => {
            return (
              <div key={item.id} style={{ margin: "15px 0" }}>
                <MessageItem
                  data={item}
                  // readMessage={readMessage}
                  setCheckState={setCheckState}
                  setCheckDeleteState={setCheckDeleteState}
                />
              </div>
            );
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
  );
};

export default Message;
