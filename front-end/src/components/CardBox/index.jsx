import React from "react"

const CardBox = (props) => {
  return (
    <div
      style={{
        width: "70vw",
        backgroundColor: "white",
        boxShadow: "3px 3px 50px 1px #8c8c8c66",
        borderRadius: "30px",
        margin: "20px",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  )
}

export default CardBox
