import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import SmallSchedule from "../../components/SmallSchedule/index";
import Typing from "../../components/Typing/index";
import { SContainer } from "./styles";
import mainImg from "../../assets/images/main_img.svg";
import { useNavigate } from "react-router";
import Lottie from "react-lottie";
import animationData from "../../assets/images/OnlineCourse-Bake";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import SmallScheduleToggle from "../../components/SmallScheduleToggle";

const Home = () => {
  const [isLogined, setIsLogined] = useState(true);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <SContainer>
      <Grid container>
        {/* navbar 부분 그리드 */}
        <Grid item xs={0} md={1.5} />
        <Grid item xs={12} md={9}>
          <Navbar />
        </Grid>
        <Grid item xs={0} md={1.5} />
      </Grid>

      <section className="main__section">
        <div>
          <div className="main__content">
            <h3>강의 찾기 어려울 땐</h3>
            <h1>두런두런</h1>
            <span># 실시간 # 강의 # 채팅</span>
            <span># 나만의 수업 # 포인트</span>
          </div>
        </div>
        <div className="lottie-container">
          <Lottie
            options={defaultOptions}
            // height={400}
            // width={600}
          />
        </div>
        <SmallScheduleToggle />
      </section>
      <Typing />
    </SContainer>
  );
};

export default Home;
