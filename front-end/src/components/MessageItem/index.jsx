import React from "react";
import { useState } from "react";

import MessageDeleteModal from "../MessageDeleteModal";
import MessageDetailModal from "../MessageDetailModal";
import { SMessageIcon, SMain, STrashIcon } from "./styles";

import {
  faEnvelope,
  faEnvelopeOpen,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

const MessageItem = ({ data }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const handleModalOpen = (target) => {
    if (target === "delete") {
      setDeleteModalOpen(true);
    } else if (target === "detail") {
      setDetailModalOpen(true);
    }
  };
  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };
  const handleDetailModalClose = () => {
    setDetailModalOpen(false);
  };

  return (
    <>
      <SMain>
        <div
          className={
            data.is_checked
              ? "main__container message__read"
              : "main__container message__unread"
          }
          onClick={() => handleModalOpen("detail")}
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
                onClick={(e) => {
                  // 이벤트 버블링 방지
                  e.stopPropagation();
                  handleModalOpen("delete");
                }}
              />
            </div>
          </div>
        </div>
        {deleteModalOpen ? (
          <MessageDeleteModal
            data={data}
            open={deleteModalOpen}
            handleClose={handleDeleteModalClose}
          />
        ) : null}
        {detailModalOpen ? (
          <MessageDetailModal
            data={data}
            open={detailModalOpen}
            handleClose={handleDetailModalClose}
          />
        ) : null}
      </SMain>
    </>
  );
};

export default MessageItem;
