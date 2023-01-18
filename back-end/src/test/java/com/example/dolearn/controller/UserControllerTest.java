package com.example.dolearn.controller;

import com.example.dolearn.config.SecurityConfig;
import com.example.dolearn.dto.UserDto;
import com.example.dolearn.jwt.JwtTokenProvider;
import com.example.dolearn.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithAnonymousUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
                .build();
    }

    @Nested
    @WithAnonymousUser
    class signup{

        private String name;
        private String email;
        private String password;

        @BeforeEach
        void setup(){
            name = "가입자명";
            email = "abcd@daum.net";
            password = "abcdpassord";
        }

        @Test
        @DisplayName("새로운 사용자 회원가입")
        void success() throws Exception {
            UserDto userDto = UserDto.builder().name(name).email(email).password(password).build();
            when(userService.signup(any(UserDto.class))).thenReturn(userDto);

            mockMvc.perform(post("/user")
                    .contentType(MediaType.APPLICATION_JSON)
                    .with(csrf())
                    .content(toJson(userDto)))
                    .andExpect(status().isOk());
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
