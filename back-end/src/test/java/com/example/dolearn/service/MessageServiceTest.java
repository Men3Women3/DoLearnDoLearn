package com.example.dolearn.service;

import com.example.dolearn.domain.Message;
import com.example.dolearn.domain.User;
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
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
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

    @DisplayName("메세지 가져오기 서비스")
    @Test
    public void getDetailMessageTest() {
        Message message = Message.builder().content("test").isChecked(1).build();
        User user = User.builder().name("test").build();

        message.setUser(user);

        Optional<Message> result = Optional.of(message);

        when(messageRepository.findById(anyLong())).thenReturn(result);

        MessageDto messageDto = messageService.getMessage(1L);

        assertThat(messageDto).isNotNull();
        assertThat(messageDto.getIsChecked()).isEqualTo(1L);
    }

    @DisplayName("특정유저가 받은 메세지 가져오기")
    @Test
    public void getMessageList() {
        Message message1 = Message.builder().content("test").isChecked(0).build();
        Message message2 = Message.builder().content("test").isChecked(0).build();

        User user = User.builder().id(1L).name("test").build();

        message1.setUser(user);
        message2.setUser(user);

        when(userRepository.findUserById(anyLong())).thenReturn(Optional.of(user));

        List<MessageDto> result = messageService.getMessageList(1L);

        assertThat(result.size()).isEqualTo(2);
    }
}
