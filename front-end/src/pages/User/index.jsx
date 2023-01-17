import React from "react";
import Navbar from "../../components/Navbar";
// import CardBox from "../../components/CardBox"
import Profile from "../../components/Profile/index";

const User = () => {
  return (
    <div>
      <Navbar />
      {/* <CardBox> */}
      <div style={{ display: "flex", width: "100vw" }}>
        <Profile />
      </div>
      {/* </CardBox> */}
    </div>
  );
};

export default User;
