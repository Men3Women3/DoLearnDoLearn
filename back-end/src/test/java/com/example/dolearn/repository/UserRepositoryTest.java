package com.example.dolearn.repository;

import com.example.dolearn.domain.User;
import com.example.dolearn.dto.UserDto;
import org.hibernate.exception.ConstraintViolationException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.NoSuchElementException;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    private Long id;
    private String name;
    private String email;
    private String password;
    private  String info;
    private  String gender;
    private  Integer point;
    private  String instagram;
    private  String facebook;
    private  String blog;
    private String imgSrc;
    private String refreshToken;
    private String accessToken;
    Date joinDate;

    @BeforeEach
    void setup(){
        // DB에 없는 데이터로 초기화
        id = 4L;
        name = "가입자명";
        email = "abcd@daum.net";
        password = "abcdpassord";
    }

    @Nested
    @Transactional
    class Save {
        @Test
        @DisplayName("사용자 추가 성공")
        public void success() {
            UserDto userDto = UserDto.builder().name(name).email(email).password(password).build();

            User user = userRepository.save(userDto.toEntity());

            assertThat(user.getName()).isEqualTo(name);
            assertThat(user.getPassword()).isEqualTo(password);
        }

        @Test
        @DisplayName("사용자 추가 실패 - 이메일 중복")
        public void fail() {
            email = "ssafy@naver.com";
            UserDto userDto = UserDto.builder().name(name).email(email).password(password).build();

            Exception exception = assertThrows(DataIntegrityViolationException.class, ()->{
                userRepository.save(userDto.toEntity());
            });

            assertTrue(exception instanceof DataIntegrityViolationException);
            assertTrue(exception.getCause() instanceof ConstraintViolationException);
        }
    }

    @Nested
    @Transactional
    class FindOneByEmail {
        @Test
        @DisplayName("이메일로 사용자 찾기 성공")
        public void success() {
            email = "ssafy@naver.com";
            name = "민싸피";

            User user = userRepository.findOneByEmail(email).get();

            assertThat(user.getName()).isEqualTo(name);
        }

        @Test
        @DisplayName("이메일로 사용자 찾기 실패 - 해당 이메일 가진 사용자 없음")
        public void fail() {
            Exception exception = assertThrows(NoSuchElementException.class, ()->{
                userRepository.findOneByEmail(email).get();
            });

            assertTrue(exception instanceof NoSuchElementException);
            assertNull(exception.getCause());
        }
    }

    @Nested
    @Transactional
    class FindOneById {
        @Test
        @DisplayName("ID로 사용자 찾기 성공")
        public void success() {
            id = 1L;
            name = "민싸피";

            User user = userRepository.findOneById(id).get();

            assertThat(user.getName()).isEqualTo(name);
        }

        @Test
        @DisplayName("이메일로 사용자 찾기 실패 - 해당 이메일 가진 사용자 없음")
        public void fail() {
            Exception exception = assertThrows(NoSuchElementException.class, ()->{
                userRepository.findOneById(id).get();
            });

            assertTrue(exception instanceof NoSuchElementException);
            assertNull(exception.getCause());
        }
    }
}
