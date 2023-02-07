import React, { useEffect, useState } from "react";
import { SAlert, STimer } from "./styles";
import useInterval from "../../hooks/useInterval";

const useResultOfIntervalCalculator = (calculator, delay) => {
  const [result, setResult] = useState(calculator());
  useInterval(() => {
    const newResult = calculator();
    if (newResult !== result) setResult(newResult);
  }, delay);

  return result;
};

const Timer = (props) => {
  // const classTime = "2023-02-06 09:37:00";
  const classTime = props.startTime;
  const isNotYet = useResultOfIntervalCalculator(
    () => new Date(classTime) - new Date() > 0,
    10
  );

  const durationTime =
    Number(props.endTime.slice(11, 13)) - Number(props.startTime.slice(11, 13));
  console.log(durationTime, "맞게 했나???");

  // const currentTimeCheck = () => {

  // }

  const [time, setTime] = useState(durationTime * 60 * 60); // 여기서 타이머 시간 설정(1시간 or 2시간)
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

  const hours = String(Math.floor(time / 3600)); // 시
  const minutes = String(Math.floor((time % 3600) / 60)); // 분
  const seconds = String(time % 60); // 초

  if (isNotYet) {
    return <STimer>수업 시작 전입니다.</STimer>;
  } else {
    if (time < 300) {
      return (
        <SAlert>
          {hours.padStart(2, "0")} : {minutes.padStart(2, "0")} :{" "}
          {seconds.padStart(2, "0")}
        </SAlert>
      );
    } else {
      return (
        <STimer>
          {hours.padStart(2, "0")} : {minutes.padStart(2, "0")} :{" "}
          {seconds.padStart(2, "0")}
        </STimer>
      );
    }
  }
};

export default Timer;
