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
            // 존재하는 데이터로 초기화
            name = "민싸피";
            email = "ssafy@naver.com";
        }

        @Test
        @DisplayName("회원가입 성공")
        void success() {
            name = "가입자명";
            email = "abcd@daum.net";
            password = "abcdpassord";

            UserDto userDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.save(any(User.class))).thenReturn(userDto.toEntity());

            UserDto result = userService.signup(userDto);

            assertThat(result.getEmail()).isEqualTo(email);
        }

        @Test
        @DisplayName("회원가입 실패 - 중복된 이메일")
        void failByEmail() {

            UserDto userDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(userDto.toEntity()));

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.signup(userDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("이미 존재하는 이메일입니다.", exception.getMessage());
        }
    }

    @Nested
    class login{

        private String name;
        private String email;
        private String password;
        private String encodedPassword;

        @BeforeEach
        void setup(){
            // 존재하는 데이터로 초기화
            name = "민싸피";
            email = "ssafy@naver.com";
            password = "abcd!1234";
            encodedPassword = "$2a$10$Ul5NqDvSKVE/pbZhr5TlduldDXNk8ZztWAg8gWGxjB0zuK9tn9QHy";

        }

        @Test
        @DisplayName("로그인 성공")
        void success() {
            UserDto reqUserDto = UserDto.builder().email(email).password(password).build();
            UserDto loginuUserDto = UserDto.builder().name(name).email(email).password(encodedPassword).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(loginuUserDto.toEntity()));
            when(passwordEncoder.matches(password, encodedPassword)).thenReturn(true);

            UserDto userDto = userService.login(reqUserDto);

            assertEquals(name, userDto.getName());
        }

        @Test
        @DisplayName("로그인 실패 - 존재하지 않은 이메일")
        void failByEmail() {
            name = "가입자명";
            email = "abcd@daum.net";
            password = "abcdpassord";

            UserDto userDto = UserDto.builder().email(email).password(password).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(userDto.toEntity()));

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.login(userDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("없는 사용자입니다.", exception.getMessage());
        }

        @Test
        @DisplayName("로그인 실패 - 잘못된 비밀번호")
        void failByPassword() {
            password = "이상한 비번";

            UserDto reqUserDto = UserDto.builder().email(email).password(password).build();
            UserDto loginuUserDto = UserDto.builder().name(name).email(email).password(encodedPassword).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(loginuUserDto.toEntity()));
            when(passwordEncoder.matches(password, encodedPassword)).thenReturn(false);

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.login(reqUserDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("없는 사용자입니다.", exception.getMessage());
        }
    }

    @Nested
    class logout{

        private Long id;
        private String name;
        private String email;
        private String password;

        @BeforeEach
        void setup(){
            // 존재하는 데이터로 초기화
            id = 1L;
            email = "ssafy@naver.com";
        }

        @Test
        @DisplayName("로그아웃 성공")
        void success() {
            UserDto reqUserDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.save(any(User.class))).thenReturn(reqUserDto.toEntity());
            when(userRepository.findOneById(id)).thenReturn(Optional.ofNullable(reqUserDto.toEntity()));

            UserDto userDto = userService.logout(id);

            assertNull(userDto.getRefreshToken());
        }

        @Test
        @DisplayName("로그아웃 실패 - 존재하지 않은 사용자")
        void failById() {
            id = 10L;
            name = "가입자명";
            email = "abcd@daum.net";
            password = "abcdpassord";

            UserDto reqUserDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.findOneById(id)).thenReturn(Optional.ofNullable(null));

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.logout(id);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals(exception.getMessage(), "없는 사용자입니다.");
        }
    }

    @Nested
    class updateInfo{

        private Long id;
        private String email;
        private String imgSrc;
        private String info;
        private String blog;
        private String facebook;
        private String instagram;
        private String youtube;

        @BeforeEach
        void setup(){
            // 수정할 데이터로 초기화
            id = 1L;
            email = "ssafy@naver.com";
            imgSrc = "새로운 이미지 링크";
            info = "안녕하세요";
            blog = "새로운 블로그 링크";
            facebook = "새로운 페이스북 링크";
            instagram = "새로운 인스타 링크";
            youtube = "새로운 유튜브 링크";
        }

        @Test
        @DisplayName("사용자 정보 수정 성공")
        void success() {
            UserDto reqUserDto = UserDto.builder().id(id).email(email)
                    .imgSrc(imgSrc).info(info).instagram(instagram).blog(blog).facebook(facebook).youtube(youtube)
                    .build();

            when(userRepository.findOneById(id)).thenReturn(Optional.ofNullable(reqUserDto.toEntity()));
            when(userRepository.save(any(User.class))).thenReturn(reqUserDto.toEntity());

            UserDto userDto = userService.updateInfo(reqUserDto);

            assertEquals(email, userDto.getEmail());
        }

        @Test
        @DisplayName("사용자 정보 수정 실패 - 기입되지 않은 정보")
        void failByRequiredInput() {
            UserDto reqUserDto = UserDto.builder().id(id).email(email)
                    .blog(blog).build();

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.updateInfo(reqUserDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("기입되지 않은 정보가 있습니다", exception.getMessage());
        }

        @Test
        @DisplayName("사용자 정보 수정 실패 - 존재하지 않는 사용자")
        void failById() {
            id = 150L;
            UserDto reqUserDto = UserDto.builder().id(id).email(email)
                    .imgSrc(imgSrc).info(info).instagram(instagram).blog(blog).facebook(facebook).youtube(youtube)
                    .build();

            when(userRepository.findOneById(id)).thenReturn(Optional.ofNullable(null));

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.updateInfo(reqUserDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("없는 사용자입니다.", exception.getMessage());
        }
    }

    @Nested
    class getInfo{

        private Long id;
        private String email;

        @BeforeEach
        void setup(){
            // 존재하는 데이터로 초기화
            id = 1L;
            email = "ssafy@naver.com";
        }

        @Test
        @DisplayName("사용자 정보 조회 성공")
        void success() {
            UserDto reqUserDto = UserDto.builder().id(id).email(email).build();

            when(userRepository.findOneById(id)).thenReturn(Optional.ofNullable(reqUserDto.toEntity()));

            UserDto userDto = userService.getInfo(id);

            assertEquals(email, userDto.getEmail());
        }

        @Test
        @DisplayName("사용자 정보 조회 실패 - 존재하지 않는 사용자")
        void failById() {
            id = 150L;
            UserDto reqUserDto = UserDto.builder().id(id).email(email).build();

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.getInfo(id);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("없는 사용자입니다.", exception.getMessage());
        }
    }

    @Nested
    class checkEmail{

        private Long id;
        private String email;

        @BeforeEach
        void setup(){
            // 존재하는 데이터로 초기화
            id = 1L;
            email = "ssafy@naver.com";
        }

        @Test
        @DisplayName("중복되지 않는 이메일")
        void success() {
            email = "abcd@daum.net";

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(null));

            userService.checkEmail(email);
        }

        @Test
        @DisplayName("중복된 이메일")
        void failByEmail() {
            UserDto reqUserDto = UserDto.builder().id(id).email(email).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(reqUserDto.toEntity()));

            Exception exception = assertThrows(CustomException.class, ()->{
                userService.checkEmail(email);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("이미 존재하는 이메일입니다.", exception.getMessage());
        }
    }
}