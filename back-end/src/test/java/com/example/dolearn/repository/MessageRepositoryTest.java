package com.example.dolearn.repository;

import com.example.dolearn.config.TestConfig;
import com.example.dolearn.domain.Message;
import net.bytebuddy.utility.dispatcher.JavaDispatcher;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@Import(TestConfig.class)
@TestPropertySource("classpath:application-test.properties")
public class MessageRepositoryTest {

    @Autowired
    private MessageRepository messageRepository;

    @DisplayName("레포지토리 저장 테스트")
    @Test
    public void messageRepositorySaveTest() {

        Message message = Message
                .builder()
                .id(1L)
                .content("test")
                .isChecked(0)
                .build();

        Message result = messageRepository.save(message);

        assertThat(result.getContent()).isEqualTo(message.getContent());
        assertThat(result.getId()).isEqualTo(result.getId());
        assertThat(result.getIsChecked()).isEqualTo(result.getIsChecked());
    }
}
