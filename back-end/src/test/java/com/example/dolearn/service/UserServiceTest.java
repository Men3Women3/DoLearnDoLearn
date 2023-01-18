package com.example.dolearn.service;

import com.example.dolearn.domain.User;
import com.example.dolearn.dto.UserDto;
import com.example.dolearn.repository.UserRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @InjectMocks
    UserService userService;

    @Mock
    UserRepository userRepository;

    @Nested
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
        void success() {
            UserDto userDto = UserDto.builder().name(name).email(email).password(password).build();
            when(userRepository.save(any(User.class))).thenReturn(userDto.toEntity());

            UserDto result = userService.signup(userDto);

            assertThat(result.getEmail()).isEqualTo(email);
        }
    }
}