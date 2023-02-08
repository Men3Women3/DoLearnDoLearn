import axios from "axios";
import { baseURL } from "./baseURL";
import { getScheduledLectureAPI } from "./userAPI";

const axiosDefaultURL = baseURL;

// 확정된 강의의 강사 id를 가져오는 함수
export const getLecturerId = (roomId, setLecturerId) => {
  axios
    .get(`${baseURL}/lecture/instructor/${roomId}`)
    .then((response) => {
      setLecturerId(response.data.response);
    })
    .catch((error) => console.log(error.response));
};

export const cancleFixedLectureAPI = (lid, uid, setScheduledLecture) => {
  axios
    .delete(`${baseURL}/lecture/apply`, {
      data: { lid, uid },
    })
    .then((res) => {
      console.log("해당 강의가 정상적으로 취소되었습니다");
      // 다시 확정 강의(일정) 받아오기 요청
      getScheduledLectureAPI(uid, setScheduledLecture);
    })
    .catch((e) => {
      console.log("에러발생", e);
    });
};
