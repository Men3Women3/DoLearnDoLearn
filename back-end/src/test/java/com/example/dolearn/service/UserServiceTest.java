package com.example.dolearn.service;

import com.example.dolearn.domain.User;
import com.example.dolearn.dto.UserDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.repository.UserRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @InjectMocks
    UserService userService;

    @Mock
    UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Nested
    class signup{

        private String name;
        private String email;
        private String password;

        @BeforeEach
        void setup(){
            // DB에 없는 데이터로 초기화
            name = "가입자명";
            email = "abcd@daum.net";
            password = "abcdpassord";
        }

        @Test
        @DisplayName("회원가입 성공")
        void success() {
            UserDto userDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.save(any(User.class))).thenReturn(userDto.toEntity());

            UserDto result = userService.signup(userDto);

            assertThat(result.getEmail()).isEqualTo(email);
        }

        @Test
        @DisplayName("회원가입 실패 - 중복된 이메일")
        void failByEmail() {
            email = "ssafy@naver.com";

            UserDto userDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(userDto.toEntity()));

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.signup(userDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals(exception.getMessage(), "이미 존재하는 이메일입니다.");
        }
    }

    @Nested
    class login{

        private String name;
        private String email;
        private String password;

        @BeforeEach
        void setup(){
            // DB에 없는 데이터로 초기화
            name = "가입자명";
            email = "abcd@daum.net";
            password = "abcdpassord";
        }

        @Test
        @DisplayName("로그인 성공")
        void success() {
            name = "민싸피";
            email = "ssafy@naver.com";
            password = "$2a$10$Ul5NqDvSKVE/pbZhr5TlduldDXNk8ZztWAg8gWGxjB0zuK9tn9QHy";

            UserDto reqUserDto = UserDto.builder().email(email).password("abcd!1234").build();
            UserDto loginuUserDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(loginuUserDto.toEntity()));
            when(passwordEncoder.matches("abcd!1234", password)).thenReturn(true);

            UserDto userDto = userService.login(reqUserDto);

            assertEquals(name, userDto.getName());
        }

        @Test
        @DisplayName("로그인 실패 - 중복된 이메일")
        void failByEmail() {
            UserDto userDto = UserDto.builder().email(email).password(password).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(userDto.toEntity()));

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.login(userDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals(exception.getMessage(), "없는 사용자입니다.");
        }

        @Test
        @DisplayName("로그인 실패 - 잘못된 비밀번호")
        void failByPassword() {
            password = "$2a$10$Ul5NqDvSKVE/pbZhr5TlduldDXNk8ZztWAg8gWGxjB0zuK9tn9QHy";

            UserDto reqUserDto = UserDto.builder().email(email).password("이상한 비번").build();
            UserDto loginuUserDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(loginuUserDto.toEntity()));
            when(passwordEncoder.matches("이상한 비번", password)).thenReturn(false);

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.login(reqUserDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals(exception.getMessage(), "없는 사용자입니다.");
        }
    }
}