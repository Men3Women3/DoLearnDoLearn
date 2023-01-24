import React from "react"

import {
  SMessageIcon,
  SMain,
  S,
  SMessageIconTrashIcon,
  STrashIcon,
} from "./styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faEnvelopeOpen,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons"
import { Grid } from "@mui/material"

const MessageItem = ({ data }) => {
  return (
    <>
      <SMain
        onClick={(event) => {
          alert("메시지가 눌렸습니다")
        }}
      >
        <div
          className={
            data.is_checked
              ? "main__container message__read"
              : "main__container message__unread"
          }
        >
          <div className="message-icon">
            {data.is_checked ? (
              <div className="message-icon__read">
                <SMessageIcon icon={faEnvelopeOpen} />
              </div>
            ) : (
              <div className="message-icon__unread">
                <SMessageIcon icon={faEnvelope} />
              </div>
            )}
          </div>
          <div className="message-sender">
            <p>{data.sender}</p>
          </div>
          <div className="message-content">{data.content}</div>
          <div className="message-time">
            <p>{data.created_time}</p>
          </div>
          <div className="trash-icon">
            <div
              className={
                data.is_checked ? "message-icon__read" : "message-icon__unread"
              }
            >
              <STrashIcon
                icon={faTrashCan}
                onClick={(event) => {
                  event.stopPropagation()
                  alert("휴지통이 눌렸습니다")
                }}
              />
            </div>
          </div>
        </div>
      </SMain>
    </>
  )
}

export default MessageItem
