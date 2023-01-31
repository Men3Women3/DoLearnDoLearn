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
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
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
    @Transactional
    class signup{

        private String email;
        private String password;

        @Test
        @DisplayName("회원가입 성공")
        void success() {
            UserDto userDto = UserDto.builder().email(email).password(password).build();

            when(userRepository.save(any(User.class))).thenReturn(userDto.toEntity());

            UserDto result = userService.signup(userDto);

            assertThat(result.getEmail()).isEqualTo(email);
        }

        @Test
        @DisplayName("회원가입 실패 - 중복된 이메일")
        void failByEmail() {
            UserDto userDto = UserDto.builder().email(email).password(password).build();

            when(userRepository.findOneByEmail(email)).thenReturn(Optional.ofNullable(userDto.toEntity()));

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.signup(userDto);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("이미 존재하는 이메일입니다.", exception.getMessage());
        }
    }

    @Nested
    @Transactional
    class login{

        private String name;
        private String email;
        private String password;
        private String encodedPassword;

        @BeforeEach
        void setup(){
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
            UserDto userDto = UserDto.builder().build();

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
            assertEquals("비밀번호가 옳지 않습니다.", exception.getMessage());
        }
    }

    @Nested
    @Transactional
    class logout{

        private Long id;
        private String name;
        private String email;
        private String password;

        @BeforeEach
        void setup(){
            id = 1L;
            email = "ssafy@naver.com";
        }

        @Test
        @DisplayName("로그아웃 성공")
        void success() {
            UserDto reqUserDto = UserDto.builder().name(name).email(email).password(password).build();

            when(userRepository.save(any(User.class))).thenReturn(reqUserDto.toEntity());
            when(userRepository.findOneById(any(Long.class))).thenReturn(Optional.ofNullable(reqUserDto.toEntity()));

            UserDto userDto = userService.logout(id);

            assertNull(userDto.getRefreshToken());
        }

        @Test
        @DisplayName("로그아웃 실패 - 존재하지 않은 사용자")
        void failById() {
            when(userRepository.findOneById(id)).thenReturn(Optional.ofNullable(null));

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto result = userService.logout(id);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals(exception.getMessage(), "없는 사용자입니다.");
        }
    }

    @Nested
    @Transactional
    class updateInfo{

        private Long id;
        private String email;
        private String imgPath;
        private String imgUrl;
        private String info;
        private String blog;
        private String facebook;
        private String instagram;
        private String youtube;

        @BeforeEach
        void setup(){
            id = 1L;
            email = "ssafy@naver.com";
            imgPath = "새로운 이미지 path";
            imgUrl = "새로운 이미지 url";
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
                    .imgPath(imgPath).imgUrl(imgUrl).info(info).instagram(instagram).blog(blog).facebook(facebook).youtube(youtube)
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
            UserDto reqUserDto = UserDto.builder().id(id).email(email)
                    .imgPath(imgPath).imgUrl(imgUrl).info(info).instagram(instagram).blog(blog).facebook(facebook).youtube(youtube)
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
            id = 1L;
            email = "ssafy@naver.com";
        }

        @Test
        @DisplayName("중복되지 않는 이메일")
        void success() {
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

    @Nested
    @Transactional
    class delete{

        private Long id;

        @BeforeEach
        void setup(){
            id = 1L;
        }

        @Test
        @DisplayName("사용자 정보 조회 성공")
        void success() {
            UserDto reqUserDto = UserDto.builder().id(id).build();

            when(userRepository.findOneById(id)).thenReturn(Optional.ofNullable(reqUserDto.toEntity()));

            userService.delete(id);
        }

        @Test
        @DisplayName("사용자 정보 조회 실패 - 존재하지 않는 사용자")
        void failById() {
            Exception exception = assertThrows(CustomException.class, ()->{
                userService.delete(id);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("없는 사용자입니다.", exception.getMessage());
        }
    }

    @Nested
    @Transactional
    class updatePoint{

        private Long id;
        private Integer point;
        private String email;

        @BeforeEach
        void setup(){
            id = 1L;
            email = "ssafy@naver.com";
            point = 100;
        }

        @Test
        @DisplayName("포인트 수정 성공")
        void success() {
            UserDto reqUserDto = UserDto.builder().id(id).email(email).point(point).build();
            UserDto resUserDto = UserDto.builder().id(id).email(email).point(point+50).build();

            when(userRepository.findOneById(id)).thenReturn(Optional.ofNullable(reqUserDto.toEntity()));
            when(userRepository.save(any(User.class))).thenReturn(resUserDto.toEntity());

            Map<String, Object> params = new HashMap<>();
            params.put("id", id);
            params.put("point", point);
            UserDto userDto = userService.updatePoint(params);

            assertEquals(50, userDto.getPoint() - reqUserDto.getPoint());
        }

        @Test
        @DisplayName("사용자 정보 수정 실패 - 기입되지 않은 정보")
        void failByRequiredInput() {
            Map<String, Object> params = new HashMap<>();
            params.put("id", id);

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto userDto = userService.updatePoint(params);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("기입되지 않은 정보가 있습니다", exception.getMessage());
        }

        @Test
        @DisplayName("사용자 정보 수정 실패 - 존재하지 않는 사용자")
        void failById() {
            Map<String, Object> params = new HashMap<>();
            params.put("id", 100L);
            params.put("point", point);

            Exception exception = assertThrows(CustomException.class, ()->{
                UserDto userDto = userService.updatePoint(params);
            });

            assertTrue(exception instanceof CustomException);
            assertEquals("없는 사용자입니다.", exception.getMessage());
        }
    }
}