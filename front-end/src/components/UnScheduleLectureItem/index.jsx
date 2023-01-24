import React from "react"
import { Typography } from "@mui/material"
import { Modal } from "@mui/material"
import { Box } from "@mui/material"
import { useState } from "react"

// import profileImg from "../../assets/images/thumbnail.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { SMain } from "./styles"

const UnScheduleLectureItem = ({ data }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleClickItem = () => {
    console.log("잘눌림!!")
    setOpen(true)
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }
  return (
    <>
      <SMain onClick={handleClickItem}>
        <div className="main__container">
          <div className="lecture-info__section">
            <p>
              <FontAwesomeIcon icon={faCalendarDays} />
              &nbsp;{data.time}
            </p>
            <span>{data.title}</span>
          </div>
          <div className="host__section">
            <img src={data.profileImg.profileImg} />
            <span>{data.host}</span>
          </div>
        </div>
      </SMain>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.time}&{data.host}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default UnScheduleLectureItem
