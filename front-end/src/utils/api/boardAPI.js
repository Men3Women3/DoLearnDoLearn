import axios from "axios";

const SERVER_URL = "http://localhost:8080/board";

// 강의 목록 요청 API
export const boardListAPI = async (setList) => {
  try {
    const res = await axios.get(`${SERVER_URL}/list`);
    setList(res.data.response);
  } catch (err) {
    console.log(err);
    console.log("강의 목록 출력 실패");
  }
};

// 신규 강의 등록 API
export const newBoardAPI = async (
  uid,
  tid,
  title,
  maxCnt,
  content,
  summary,
  startTime,
  endTime,
  deadline,
  isFixed
) => {
  try {
    await axios.post(`${SERVER_URL}`, {
      uid,
      tid,
      title,
      maxCnt,
      content,
      summary,
      startTime,
      endTime,
      deadline,
      isFixed,
    });
  } catch (err) {
    console.log(err);
    console.log("신규 강의 등록 실패");
  }
};

// 수강 신청 API
export const enrollClassAPI = async (uid, bid) => {
  try {
    await axios.post(`${SERVER_URL}/student`, {
      uid,
      bid,
    });
    console.log("수강 신청 성공");
  } catch (err) {
    console.log(err);
    console.log("수강 신청 실패");
  }
};

// 강사 신청 API
export const enrollLecturerAPI = async (uid, bid) => {
  try {
    await axios.post(`${SERVER_URL}/instructor`, {
      uid,
      bid,
    });
    console.log("강사 신청 성공");
  } catch (err) {
    console.log(err);
    console.log("강사 신청 실패");
  }
};

// 신청 취소 API
export const deleteEnrollAPI = async (user, lecture) => {
  try {
    await axios.delete(`${SERVER_URL}/apply/${user}/${lecture}`);
    console.log("신청 취소 성공");
  } catch (err) {
    console.log(err);
    console.log("신청 취소 실패");
  }
};

// 강의 확정 API
export const fixClassAPI = async (lecture) => {
  try {
    await axios.put(`${SERVER_URL}/${lecture}`);
    console.log("강의 확정 성공");
  } catch (err) {
    console.log(err);
    console.log("강의 확정 실패");
  }
};
