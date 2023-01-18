import React from "react";
import Navbar from "../../components/Navbar";
import CardBox from "../../components/CardBox";
// import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile/index";
import ProfileSidebar from "../../components/ProfileSidebar";

const User = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", width: "100vw" }}>
        <ProfileSidebar />

        <CardBox>
          <Profile />
        </CardBox>
      </div>
    </div>
  );
};

export default User;
