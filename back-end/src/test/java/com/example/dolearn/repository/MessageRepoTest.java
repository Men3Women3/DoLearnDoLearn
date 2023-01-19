package com.example.dolearn.repository;

import com.example.dolearn.domain.Message;
import com.example.dolearn.domain.User;
import com.example.dolearn.dto.MessageDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@Transactional
@SpringBootTest
public class MessageRepoTest {

    @Autowired
    private MessageRepository messageRepository;

    @Test
    public void saveTest() {

        User user = User.builder()
                        .id(1L)
                        .name("test")
                        .build();

        Message message = Message.builder().content("test").build();
        message.setUser(user);

        Message result = messageRepository.save(message);

        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getContent()).isEqualTo("test");
        assertThat(result.getIsChecked()).isEqualTo(1);
    }
}
