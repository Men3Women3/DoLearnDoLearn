import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/index';
import SmallSchedule from '../../components/SmallSchedule/index';
import Typing from '../../components/Typing/index';
import { SContainer } from './styles';
import mainImg from '../../assets/images/main_img.svg';
import { useNavigate } from 'react-router';
import Lottie from 'react-lottie';
import animationData from '../../assets/images/HOME';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import SmallScheduleToggle from '../../components/SmallScheduleToggle';

const Home = () => {
  const [isLogined, setIsLogined] = useState(true);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
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

      <section className='main__section'>
        <div>
          <div className='main__content'>
            {/* <h1>Do Learn, Do Run </h1> */}
            {/* <h3>우리가 만들고, 우리가 배우고</h3> */}
            <h3>원하는 강의</h3>
            <h3>이젠 찾지말고 직접 만들어요</h3>
            <h1>두런두런에서</h1>
            {/* <h3>우리가 만들어가는 강의</h3>
            <h1>두런두런 하세요</h1> */}
            <h4>#실시간 &nbsp;#신개념 &nbsp;#맞춤형 강의 &nbsp;#채팅</h4>
            <h4>#나만의 수업 &nbsp;#마일리지 획득</h4>
          </div>
        </div>
        <div className='lottie-container'>
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
