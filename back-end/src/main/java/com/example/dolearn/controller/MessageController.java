package com.example.dolearn.controller;

import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/message")
public class MessageController {

    private MessageService messageService;
    private String success = "SUCCESS";
    private String fail = "FAIL";

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public ResponseEntity<?> createMessage(@RequestBody MessageDto messageDto) {

        if(messageService.createMessage(messageDto)) {

            return new ResponseEntity<String>(success, HttpStatus.CREATED);
        }

        return new ResponseEntity<String>(fail, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
