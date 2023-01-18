package com.example.dolearn.service;

import com.example.dolearn.domain.Message;
import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.repository.MessageRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class MessageServiceTest {

    MessageService messageService;

    @MockBean
    MessageRepository messageRepository;

    @BeforeEach
    void setUp() {

        messageService = new MessageService(messageRepository);
    }

    @DisplayName("메세지 확인 업데이트 테스트")
    @Test
    public void messageCheckUpdateTest() {
        //given
        MessageDto messageDto = MessageDto.builder()
                .id(1L)
                .rid(1L)
                .content("강의가 취소되었습니다.")
                .isChecked(0).build();

        messageRepository.save(messageDto.toEntity());

        //when
        messageService.updateCheck(messageDto);

        //then
        assertThat(messageDto.getIsChecked()).isEqualTo(1);
        assertThat(messageDto.getCreatedTime()).isNotNull();
    }
}
