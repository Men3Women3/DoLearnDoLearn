package com.example.dolearn.service;

import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

@Transactional
@RequiredArgsConstructor
@Service
public class MessageService {

    private final MessageRepository messageRepository;

    public boolean createMessage(MessageDto messageDto) {

        messageRepository.save(messageDto.toEntity());
        return true;
    }

    public void updateCheck(MessageDto messageDto) {
        //메세지 확인 시간 수정
        messageDto.setCreatedTime(LocalDateTime.now());
        //메세지 확인
        messageDto.setIsChecked(1);
        messageRepository.save(messageDto.toEntity());
    }
}
