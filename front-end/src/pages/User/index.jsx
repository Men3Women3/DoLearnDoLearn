import React from "react"
import Navbar from "../../components/Navbar"
import CardBox from "../../components/CardBox"
import Profile from "../../components/Profile/index"

const User = () => {
  return (
    <div>
      <Navbar />
      <CardBox>
        <Profile />
      </CardBox>
    </div>
  )
}

export default User
