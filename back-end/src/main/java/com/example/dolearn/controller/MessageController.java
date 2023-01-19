package com.example.dolearn.controller;

import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.response.ErrorResponse;
import com.example.dolearn.response.SuccessResponse;
import com.example.dolearn.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
@Slf4j
public class MessageController {

    private MessageService messageService;
    private String success = "SUCCESS";
    private String fail = "FAIL";

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }
    // 차후 수정 필요
    @PostMapping
    public ResponseEntity<?> createMessage(@RequestBody MessageDto messageDto) {

        log.info("create message 호출");
        log.info(" content : {}",messageDto.getContent());
        log.info(" rid : {}", messageDto.getRid());
        //메세지 생성하는 메소드
        if(messageService.createMessage(messageDto)) {

            return new ResponseEntity<String>(success, HttpStatus.CREATED);
        }

        return new ResponseEntity<String>(fail, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PutMapping
    public ResponseEntity<?> updateCheck(@RequestBody MessageDto messageDto) {
        //확인표시로 업데이트
        log.info("update message 호출");
        log.info(" rid : {}", messageDto.getRid());
        messageService.updateCheck(messageDto);
        return new ResponseEntity<String>(success, HttpStatus.OK);
    }

//    @GetMapping("/{user_id}")
//    public ResponseEntity<?> getMessageList(@PathVariable String user_id) {
//
//        List<MessageDto> messageDtoList = messageService.getMessageList(user_id);
//
//        return new ResponseEntity<>(messageDtoList, HttpStatus.OK);
//    }

    @GetMapping("/{message_id}")
    public ResponseEntity<?> getMessageDetail(@PathVariable long message_id) {
        log.info("message detail 호출!");
        log.info(" message id : {}", message_id);

        try {
            return new ResponseEntity<>(new SuccessResponse(messageService.getMessage(message_id)), HttpStatus.NOT_FOUND);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_MESSSAGE),
                                        HttpStatus.NOT_FOUND);
        }
    }
}
