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
import { getUserInfoAndUpdate, logoutAPI } from "./utils/api/userAPI";

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
      // 유저 정보 최신화시키기
      getUserInfoAndUpdate(setUserInfo);
    }
  }, []);

  // 로그인 상태 관리 함수
  const handleIsLogined = () => {
    setIsLogined(!isLogined);
  };

  // 유저 로그아웃 함수
  const handleLogout = () => {
    logoutAPI(setIsLogined);
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
