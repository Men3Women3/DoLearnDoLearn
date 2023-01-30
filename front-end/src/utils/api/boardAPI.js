import axios from "axios";
const SERVER_URL = "http://localhost:8080/board";

// 강의 목록 요청 API
export const boardListAPI = async (setList) => {
  try {
    const res = await axios.get(`${SERVER_URL}/list`);
    setList(res.data.response);
  } catch (err) {
    console.log(err);
    console.log("강의 목록을 불러오지 못했습니다.");
  }
};

// 신규 강의 등록 API

// 수강 신청 API
export const enrollClassAPI = async (userInfo.id, data.id) => {
    try {
        await axios.post(`${SERVER_URL}/student`, {
            uid: userInfo.id,
            bid: data.id
        });
        console.log("수강 신청 성공");
    } catch(err) {
        console.log(err);
    }
};

// 강사 신청 API
// 신청 취소 API
// 강의 확정 API
