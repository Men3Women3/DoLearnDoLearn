package com.example.dolearn.service;

import com.example.dolearn.domain.Message;
import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.repository.MessageRepository;
import com.example.dolearn.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.transaction.Transactional;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class MessageServiceTest {

    MessageService messageService;

    @MockBean
    MessageRepository messageRepository;

    @MockBean
    UserRepository userRepository;

    @BeforeEach
    void setUp() {

        messageService = new MessageService(messageRepository,userRepository);
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

        Optional<Message> result = Optional.of(messageDto.toEntity());
        Message message = Message.builder().isChecked(1).content("test").build();

        when(messageRepository.findById(any())).thenReturn(result);

        when(messageRepository.save(any())).thenReturn(message);
        //when
        messageService.updateCheck(messageDto);

        //then
        assertThat(message.getIsChecked()).isEqualTo(1);
    }
}
