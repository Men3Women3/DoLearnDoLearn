package com.example.dolearn.service;

import com.example.dolearn.domain.Message;
import com.example.dolearn.domain.User;
import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.repository.MessageRepository;
import com.example.dolearn.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class MessageService {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;

    public boolean createMessage(MessageDto messageDto) {

        Long rid = messageDto.getRid();

        Optional<User> result = userRepository.findById(rid);

        Message message = Message.builder()
                        .content(messageDto.getContent())
                        .build();

        message.setUser(result.get());

        messageRepository.save(message);
        return true;
    }

    public void updateCheck(MessageDto messageDto) {
        //메세지 확인 시간 수정
        Optional<Message> result = messageRepository.findById(messageDto.getId());
        Message message = result.get();

        message.update(messageDto.getIsChecked(),Timestamp.valueOf(LocalDateTime.now()));
        messageRepository.save(message);
    }
}
