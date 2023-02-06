import axios from "axios";
import { baseURL } from "./baseURL";

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
