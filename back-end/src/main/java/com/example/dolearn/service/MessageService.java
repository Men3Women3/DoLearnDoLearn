package com.example.dolearn.service;

import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.repository.MessageRepository;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    private MessageRepository messageRepository;

    public boolean createMessage(MessageDto messageDto) {

        messageRepository.save(messageDto.toEntity());

        return true;
    }
}
