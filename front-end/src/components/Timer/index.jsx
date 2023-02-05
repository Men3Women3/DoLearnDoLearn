import React, { useEffect, useState } from 'react';
import { SAlert, STimer } from './styles';
import useInterval from '../../hooks/useInterval';

const useResultOfIntervalCalculator = (calculator, delay) => {
  const [result, setResult] = useState(calculator());
  useInterval(() => {
    const newResult = calculator();
    if (newResult !== result) setResult(newResult);
  }, delay);

  return result;
};

const Timer = () => {
  const classTime = '2023-02-06 01:12:00';
  const isNotYet = useResultOfIntervalCalculator(
    () => new Date(classTime) - new Date() > 0,
    10
  );

  const [time, setTime] = useState(320); // 여기서 타이머 시간 설정(1시간 or 2시간)
  const [targetTime, setTargetTime] = useState(0); // 마지막 시간(0시 0분 0초)

  useEffect(() => {
    const id = setInterval(() => {
      if (time === targetTime) {
        // alert('강의가 종료되었습니다. 수고하셨습니다.');
        clearInterval(id); // clearing을 통해 해당 interval 정리
      } else {
        setTime(time - 1);
      }
    }, 1000); // 1초 단위로 작동

    return () => {
      clearInterval(id);
    };
  }, [time, targetTime]);

  const hours = Math.floor(time / 3600); // 시
  const minutes = Math.floor((time % 3600) / 60); // 분
  const seconds = time % 60; // 초

  if (isNotYet) {
    return <STimer>수업 시작 전입니다.</STimer>;
  } else {
    if (time < 300) {
      return (
        <SAlert>
          {hours} : {minutes} : {seconds}
        </SAlert>
      );
    } else {
      return (
        <STimer>
          {hours} : {minutes} : {seconds}
        </STimer>
      );
    }
  }
};

export default Timer;
