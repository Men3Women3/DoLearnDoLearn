import axios from "axios";
const axiosDefaultURL = "http://localhost:8080";

// 유저 회원탈퇴 api를 요청하는 함수
export const deleteUserAPI = () => {
  // 로컬스토리지에서 엑세스토큰과 유저 id 가져오기
  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("id");

  // 회원 탈퇴 api 요청
  axios
    .delete(`${axiosDefaultURL}/user/${userId}`, {
      Authentication: accessToken,
    })
    .then((response) => {
      // 회원 탈퇴 요청 api 성공하면 로컬스토리지 비우고 메인페이지 이동시키기
      localStorage.clear();
      // 라우터를 이동시키지 않고, window를 이동시켜서 정보를 새로 할당받게 한다.
      // 라우터를 이동시키면 정보가 남아있어서 문제 발생
      const mainPage = window.location.origin;
      window.location.href = mainPage;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

// 유저 로그아웃 api를 요청하는 함수
export const logoutAPI = (setIsLogined) => {
  const accessToken = localStorage.getItem("accessToken");
  const id = localStorage.getItem("id");
  // 엑세스 토큰이 있으면
  if (accessToken !== null) {
    // logout api 연결
    axios
      .post(
        `${axiosDefaultURL}/user/logout/${id}`,
        {},
        {
          headers: {
            Authentication: accessToken,
          },
        }
      )
      .then((response) => {
        // 요청 성공하면
        // 로그아웃 처리
        setIsLogined(false);
        // localStorage 비우기
        localStorage.clear();
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
              // 새로 저장한 엑세스 토큰으로 로그아웃 api 요청
              const accessToken = localStorage.getItem("accessToken");
              axios
                .post(
                  // id 수정해야 됨
                  `${axiosDefaultURL}/user/logout/1`,
                  {},
                  {
                    headers: {
                      Authentication: accessToken,
                    },
                  }
                )
                .then((response) => {
                  // 요청 성공하면
                  // 로그아웃 처리
                  setIsLogined(false);
                  // localStorage 비우기
                  localStorage.clear();
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
  }
};

// 유저 정보를 최신화하는 함수 (유저 정보를 가져와서 갱신시키는 함수)
export const getUserInfoAndUpdate = (setUserInfo) => {
  const id = localStorage.getItem("id");
  const accessToken = localStorage.getItem("accessToken");
  // api를 통해 유저 정보를 받아와서 저장
  axios
    .get(`${axiosDefaultURL}/user/${id}`, {
      headers: {
        Authentication: accessToken,
      },
    })
    .then((response) => {
      // 유저 정보 갱신
      const userData = response.data.response;
      setUserInfo(userData);
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
            // api를 통해 유저 정보를 받아와서 저장
            axios
              .get(`${axiosDefaultURL}/user/${id}`, {
                headers: {
                  Authentication: accessToken,
                },
              })
              .then((response) => {
                // 유저 정보 갱신
                const userData = response.data.response;
                setUserInfo(userData);
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

// 로그인 api를 요청하는 함수
export const loginAPI = (
  email,
  password,
  handleUserInfo,
  handleIsLogined,
  setIsCorrectEmail,
  setIsCorrectPassword,
  navigate
) => {
  // 자동로그아웃을 위한 핸들러 변수
  let timeoutHandler = null;
  // 리프레시 토큰 유효시간 : 1일
  // 자동로그아웃 -> 23시간 후 실행
  const logoutTimeInterval = 1000 * 60 * 60 * 23;
  // 테스트용 5초 후 자동로그아웃
  // const logoutTimeInterval = 1000 * 5;

  axios
    .post(`${axiosDefaultURL}/user/login`, {
      email,
      password,
    })
    .then((response) => {
      const responseData = response.data.response;
      localStorage.clear();
      // 로그인 성공하면 localStorage에 토큰과 유저 id 저장
      localStorage.setItem("accessToken", responseData.accessToken);
      localStorage.setItem("refreshToken", responseData.refreshToken);
      localStorage.setItem("id", responseData.id);
      // 유저 정보 상태 변경
      handleUserInfo(responseData);
      // 로그인 상태 변경
      handleIsLogined();

      // setTimeout() 함수를 통해 리프레시 토큰 끝나기 1시간 전에 자동로그아웃 시키기
      // 유저가 리프레시 토큰 유효기간 만료 전 로그인과 로그아웃을 연속으로 실행할 경우를 방지하기 위해
      // setTimeout()을 먼저 clear 시키고 setTimeout() 함수 로직 작성
      clearTimeout(timeoutHandler);
      timeoutHandler = setTimeout(() => {
        const accessToken = localStorage.getItem("accessToken");
        const id = localStorage.getItem("id");
        if (accessToken !== null) {
          // logout api 연결
          axios
            .post(
              `${axiosDefaultURL}/user/logout/${id}`,
              {},
              {
                headers: {
                  Authentication: accessToken,
                },
              }
            )
            .then((response) => {
              // 요청 성공하면
              // 로그아웃 처리
              // localStorage 비우기
              localStorage.clear();
              // 적용을 위해 페이지 새로고침
              window.location.reload();
            })
            .catch((error) => {
              console.log(error.response);
            });
        }
      }, logoutTimeInterval);

      // 메인페이지로 이동
      navigate("/");
    })
    .catch((error) => {
      console.log(error.response);
      if (error.response.data.response === "이메일 형식에 맞지 않습니다.") {
        setIsCorrectEmail("이메일 형식에 맞지 않습니다.");
        setIsCorrectPassword("");
      } else if (error.response.data.response === "없는 사용자입니다.") {
        setIsCorrectEmail("이메일을 확인해주세요.");
        setIsCorrectPassword("");
      } else if (
        error.response.data.response ===
        "비밀번호는 9~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
      ) {
        setIsCorrectPassword(
          "비밀번호는 9~16자 영문 대 소문자, 숫자, 특수문자를 사용합니다."
        );
        setIsCorrectEmail("");
      } else if (error.response.data.response === "비밀번호가 옳지 않습니다.") {
        setIsCorrectPassword("비밀번호가 옳지 않습니다.");
        setIsCorrectEmail("");
      }
    });
};

// 회원가입 api를 요청하는 함수
export const signupAPI = (
  username,
  email,
  password,
  selfIntroduction,
  blogLink,
  youtubeLink,
  instagramLink,
  facebookLink,
  navigate
) => {
  axios
    .post(`${axiosDefaultURL}/user`, {
      // 보내야 될 데이터
      name: username,
      email,
      password,
      info: selfIntroduction,
      blog: blogLink,
      youtube: youtubeLink,
      instagram: instagramLink,
      facebook: facebookLink,
    })
    .then((response) => {
      console.log("서버에 데이터 보내기 성공!");
      // 회원가입 성공했으면 메인 페이지로 이동
      navigate("/login");
    })
    .catch((error) => {
      console.log("서버에 데이터 보내기 실패!");
      console.log(error);
    });
};

// 미확정 강의 내역 불러오는 api를 요청하는 함수
export const getUnScheduledLectureAPI = (userId, setTotalSchedule) => {
  const accessToken = localStorage.getItem("accessToken");
  axios
    .get(
      `${axiosDefaultURL}/user/request-lecture/${userId}`,
      {},
      {
        headers: {
          Authentication: accessToken,
        },
      }
    )
    .then((res) => {
      console.log("요청은 되었니?");
      console.log(res);
      setTotalSchedule(res.data.response);
    });
};
