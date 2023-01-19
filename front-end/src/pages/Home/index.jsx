import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/index"
import SmallSchedule from "../../components/SmallSchedule/index"
import Typing from "../../components/Typing/index"
import { SContainer } from "./styles"
import mainImg from "../../assets/images/main_img.svg"
import { useNavigate } from "react-router"
import Lottie from 'react-lottie';
import animationData from '../../assets/images/OnlineCourse-Bake';

const Home = () => {
  const [isLogined, setIsLogined] = useState(false)
  const navigate = useNavigate()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <SContainer>
      <Navbar />
      <section className="main__section">
        <div
          className={isLogined ? "added-margin-right" : "normal-margin-right"}
        >
          <div className="main__content">
            <h3>강의 찾기 어려울 땐</h3>
            <h1>두런두런</h1>
            <span># 실시간 # 강의 # 채팅</span>
            <span># 나만의 수업 # 포인트</span>
          </div>
          {isLogined && (
            <img className="main__small-img" src={mainImg} alt="mainImg" />
          )}
        </div>
        <div className='lottie-container'>

        {!isLogined && (
          // <img className="main__normal-img" src={mainImg} alt="mainImg" />
          <Lottie 
          options={defaultOptions}
            // height={400}
            // width={600}
          />
        )}
        </div>
        {isLogined && <SmallSchedule />}
      </section>
      <Typing />

    </SContainer>
  )
}

export default Home
