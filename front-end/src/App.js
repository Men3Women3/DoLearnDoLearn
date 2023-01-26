import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pMinDelay from "p-min-delay";
import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Loading from "./pages/Loading";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// 코드 스플리팅 (Code Splitting)
const Home = React.lazy(() => pMinDelay(import("./pages/Home/index"), 1000));
const Login = React.lazy(() => pMinDelay(import("./pages/Login/index"), 1000));
const SingUp = React.lazy(() =>
  pMinDelay(import("./pages/SignUp/index"), 1000)
);
const User = React.lazy(() => pMinDelay(import("./pages/User/index")));
const NotFound = React.lazy(() =>
  pMinDelay(import("./pages/NotFound/index"), 1000)
);
const Board = React.lazy(() => pMinDelay(import("./pages/Board"), 0)); // delay 0
const WriteBoard = React.lazy(() => pMinDelay(import("./pages/WriteBoard"), 0)); // 요 친구도 delay 0
const Lecture = React.lazy(() => pMinDelay(import("./pages/Lecture"), 0)); // 나도 delay 0 할래

// 로그인 상태가 담긴 context API
export const LoginStateContext = React.createContext();
// 로그인 상태를 관리하는 함수가 담긴 context API
export const LoginStateHandlerContext = React.createContext();

// 기본 도메인 주소
const axiosDefaultURL = "http://localhost:8080";

function App() {
  const [isLogined, setIsLogined] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }

    // 로컬 스토리지에 유저 id가 있으면
    if (localStorage.getItem("id") !== null) {
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
          const userData = response.data.response;
          setUserInfo(userData);
        })
        .catch((error) => console.log(error.response));
    }
  });

  // 로그인 상태 관리 함수
  const handleIsLogined = () => {
    setIsLogined(!isLogined);
  };

  // 로그아웃 상태 관리 함수 (많이 어지럽다,,,,)
  // 순서 : 로컬스토리지에 엑세스 토큰이 있다 -> 로그아웃 api 요청 -> 성공하면(엑세스 토큰이 유효하면) 로그아웃 처리(로컬스토리지 비우고, IsLogined false처리)
  //                                                           -> 실패하면(엑세스 토큰이 유효하지 않으면) 로컬 스토리지에 있는 리프레시 토큰으로 엑세스 토큰 재발급 api(1) 요청
  //                                                           -> (1) 성공하면(리프레시 토큰이 유효하면) 응답받은 엑세스 토큰으로 로그아웃 api(2) 요청
  //                                                           -> (2) 성공하면 로그아웃 처리(로컬스토리지 비우고, IsLogined false처리)
  //                                                           -> (1) 실패하면(리프레시 토큰이 유효하지 않으면) (비워 놓음?) 리프레시 토큰 끝나기 5분 전에 자동 로그아웃시키기(로그인 시 적용)
  //                                                           -> (2) 실패하면 ??? (실패할 가능성 낮아 보임)
  const handleLogout = () => {
    const accessToken = localStorage.getItem("accessToken");
    // 엑세스 토큰이 있으면
    if (accessToken !== null) {
      // logout api 연결
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

  // 유저의 정보를 저장하는 함수
  const handleUserInfo = (info) => {
    setUserInfo(info);
  };

  return (
    <ThemeProvider theme={theme}>
      <LoginStateContext.Provider value={{ isLogined, userInfo }}>
        <LoginStateHandlerContext.Provider
          value={{ handleIsLogined, handleLogout, handleUserInfo }}
        >
          <Suspense fallback={<Loading />}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/login"
                  element={isLogined ? <Home /> : <Login />}
                />
                <Route
                  path="/signup"
                  element={isLogined ? <Home /> : <SingUp />}
                />
                <Route path="/board" element={<Board />} />
                <Route path="/write" element={<WriteBoard />} />
                <Route
                  path={"/mypage"}
                  element={isLogined ? <User /> : <Home />}
                />
                <Route path="/lecture" element={<Lecture />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </LoginStateHandlerContext.Provider>
      </LoginStateContext.Provider>
    </ThemeProvider>
  );
}

export default App;
