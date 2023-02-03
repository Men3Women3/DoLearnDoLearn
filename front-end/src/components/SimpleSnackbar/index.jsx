import React from "react"
import { useState } from "react"
import { Snackbar } from "@mui/material"
import Slide from "@mui/material"

const SimpleSnackbar = ({ content, state, handleClose }) => {
  console.log({ content }, { state })
  return (
    <div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        autoHideDuration={1000}
        TransitionComponent={state.Transition}
        message={content}
      ></Snackbar>
    </div>
  )
}

export default SimpleSnackbar
