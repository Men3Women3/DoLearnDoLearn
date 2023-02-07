import axios from "axios";
import { baseURL } from "./baseURL";

const axiosDefaultURL = baseURL;

// 유저 정보를 최신화하는 함수 (유저 정보를 가져와서 갱신시키는 함수)
export const getUnreadMessageCnt = (setUnreadMessageCnt) => {
  const id = localStorage.getItem("id");
  const accessToken = localStorage.getItem("accessToken");
  // api를 통해 유저 정보를 받아와서 저장
  axios
    // ####################################################
    // 수정 필요!!!!!!!!!!!
    // ####################################################
    .get(`${axiosDefaultURL}/message/uncheck/user/${id}`, {
      headers: {
        Authentication: accessToken,
      },
    })
    .then((response) => {
      // 유저 정보 갱신
      const unreadMessage = response.data.response;
      setUnreadMessageCnt(unreadMessage.length);
    })
    .catch((error) => {
      // 실패하면
      const errorCode = error.response.data.code;
      if (errorCode === "403") {
        // 로컬스토리지에 있는 리프레시 토큰으로 엑세스 토큰 재발급 api 요청
        const refreshToken = localStorage.getItem("refreshToken");
        axios
          .post(
            `${axiosDefaultURL}/user/access`,
            {},
            {
              headers: {
                Authentication: refreshToken,
              },
            }
          )
          .then((response) => {
            // 요청 성공하면 응답받은 엑세스 토큰을 로컬 스토리지에 저장
            const responseData = response.data.response;
            localStorage.setItem("accessToken", responseData);
          })
          .then((response) => {
            const id = localStorage.getItem("id");
            const accessToken = localStorage.getItem("accessToken");
            // api를 통해 메시지 정보를 받아와서 저장
            axios
              // ####################################################
              // 수정 필요!!!!!!!!!!!
              // ####################################################
              .get(`${axiosDefaultURL}/message/uncheck/user/${id}`, {
                headers: {
                  Authentication: accessToken,
                },
              })
              .then((response) => {
                // 유저 정보 갱신
                const unreadMessage = response.data.response;
                setUnreadMessageCnt(unreadMessage.length);
              })
              .catch((error) => {
                console.log(error.response);
              });
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    });
};

// 받은 메시지 모두 불러오는 요청
export const getMessageListAPI = async (userId, setMessageData) => {
  const res = await axios.get(`${axiosDefaultURL}/message/user/${userId}`);
  setMessageData(res.data.response);
};

// 메시지 삭제 요청
export const deleteMessageAPI = async (messageId) => {
  const accessToken = localStorage.getItem("accessToken");
  axios.delete(
    `${axiosDefaultURL}/message/${messageId}`,
    {},
    {
      headers: {
        // ------------------------------------------
        // -----------------수정 필요----------------
        // 일단은 갱신 신경안쓰고 로컬스토리지에 들어있는 엑세스토큰으로 변경 시도!!
        // ------------------------------------------
        // ------------------------------------------
        Authentication: accessToken,
      },
    }
  );
};

// 메시지 읽음 상태로 상태 변경
export const changeMessageReadStateAPI = async (id) => {
  const accessToken = localStorage.getItem("accessToken");
  await axios.put(
    `${axiosDefaultURL}/message`,
    { id },
    {
      headers: {
        // ------------------------------------------
        // -----------------수정 필요----------------
        // 일단은 갱신 신경안쓰고 로컬스토리지에 들어있는 엑세스토큰으로 변경 시도!!
        // ------------------------------------------
        // ------------------------------------------
        Authentication: accessToken,
      },
    }
  );
};

// 메시지 보내기
export const sendMessageAPI = async (
  bid,
  content,
  type,
  setStateMessageUpdate
) => {
  const accessToken = localStorage.getItem("accessToken");
  await axios.post(
    `${axiosDefaultURL}/message`,
    { bid, content, type },
    {
      headers: {
        // ------------------------------------------
        // -----------------수정 필요----------------
        // 일단은 갱신 신경안쓰고 로컬스토리지에 들어있는 엑세스토큰으로 변경 시도!!
        // ------------------------------------------
        // ------------------------------------------
        Authentication: accessToken,
      },
    }
  );
  setStateMessageUpdate(true);
  console.log("메시지 보내기 성공");
};
