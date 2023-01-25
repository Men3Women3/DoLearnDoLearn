package com.example.dolearn.controller;

import com.example.dolearn.config.SecurityConfig;
import com.example.dolearn.dto.UserDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.jwt.JwtTokenProvider;
import com.example.dolearn.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.HttpServletRequest;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@WebMvcTest(UserController.class)
@Import(SecurityConfig.class)
public class UserControllerTest {

    MockMvc mockMvc;

    @MockBean
    UserService userService;

    @MockBean
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    WebApplicationContext context;

    @BeforeEach
    public void setUp() {
        this.mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(springSecurity())
                .alwaysDo(print())
                .build();
    }

    @Nested
    class signup{

        @Test
        @DisplayName("회원가입 성공")
        void success() throws Exception {
            UserDto userDto = UserDto.builder().build();

            when(userService.signup(any(UserDto.class))).thenReturn(userDto);

            mockMvc.perform(post("/user")
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .content(toJson(userDto)))
                    .andExpect(status().isOk());
        }

        @Test
        @DisplayName("회원가입 실패 - 이메일 중복")
        void failByEmail() throws Exception {
            UserDto userDto = UserDto.builder().build();

            when(userService.signup(any(UserDto.class))).thenThrow(new CustomException(ErrorCode.EMAIL_DUPLICATION));

            mockMvc.perform(post("/user")
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .content(toJson(userDto)))
                    .andExpect(status().isConflict());
        }
    }

    @Nested
    class login{

        @Test
        @DisplayName("로그인 성공")
        void success() throws Exception {
            UserDto userDto = UserDto.builder().build();

            when(userService.login(any(UserDto.class))).thenReturn(userDto);
            when(jwtTokenProvider.createRefreshToken(any(String.class))).thenReturn("refresh-token");
            when(jwtTokenProvider.createAccessToken(any(String.class))).thenReturn("access-token");
            when(userService.updateToken(any(UserDto.class), any(String.class), any(String.class))).thenReturn(userDto);

            mockMvc.perform(post("/user/login")
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .content(toJson(userDto)))
                    .andExpect(status().isOk());
        }

        @Test
        @DisplayName("로그인 실패 - 존재하지 않는 이메일")
        void failByEmail() throws Exception {
            UserDto userDto = UserDto.builder().build();

            when(userService.login(any(UserDto.class))).thenThrow(new CustomException(ErrorCode.NO_USER));

            mockMvc.perform(post("/user/login")
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .content(toJson(userDto)))
                    .andExpect(status().isBadRequest());
        }

        @Test
        @DisplayName("로그인 실패 - 비밀번호 오류")
        void failByPassword() throws Exception {
            UserDto userDto = UserDto.builder().build();

            when(userService.login(any(UserDto.class))).thenThrow(new CustomException(ErrorCode.INVALID_PASSWORD));

            mockMvc.perform(post("/user/login")
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .content(toJson(userDto)))
                    .andExpect(status().isBadRequest());
        }
    }

    @Nested
    class update{

        @Test
        @DisplayName("사용자 정보 수정 성공")
        void success() throws Exception {
            UserDto userDto = UserDto.builder().build();

            when(userService.updateInfo(any(UserDto.class))).thenReturn(userDto);

            mockMvc.perform(put("/user")
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .content(toJson(userDto)))
                    .andExpect(status().isOk());
        }

        @Test
        @DisplayName("사용자 정부 수정 실패 - 기입하지 않은 정보")
        void failByInput() throws Exception {
            UserDto userDto = UserDto.builder().build();

            when(userService.updateInfo(any(UserDto.class))).thenThrow(new CustomException(ErrorCode.INVALID_INPUT));

            mockMvc.perform(put("/user")
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .content(toJson(userDto)))
                    .andExpect(status().isMethodNotAllowed());
        }

        @Test
        @DisplayName("사용자 정부 수정 실패 - 존재하지 않는 사용자")
        void failByNoUser() throws Exception {
            UserDto userDto = UserDto.builder().build();

            when(userService.updateInfo(any(UserDto.class))).thenThrow(new CustomException(ErrorCode.NO_USER));

            mockMvc.perform(put("/user")
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .content(toJson(userDto)))
                    .andExpect(status().isBadRequest());
        }
    }

    private static String toJson(UserDto userDto) {
        try {
            return new ObjectMapper().writeValueAsString(userDto);
        } catch(Exception e) {
            throw new RuntimeException(e);
        }
    }
}
