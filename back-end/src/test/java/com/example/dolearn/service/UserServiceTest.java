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
}