package com.example.dolearn.service;

import com.example.dolearn.domain.*;
import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class MessageService {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final LectureRepository lectureRepository;
    private final UserLectureRepository userLectureRepository;

    public List<MessageDto> createMessage(MessageDto messageDto) {

        Long lectureId = messageDto.getLid();
        Optional<Lecture> result = lectureRepository.findById(lectureId);
        //강의 아이디가 유효하다면
        if(result.isPresent()) {

            List<MessageDto> ret = new ArrayList<>();

            //강의 아이디로 정보 가져오기
            List<UserLecture> userLectureList = userLectureRepository.findByLectureId(lectureId);

            //위에서 받아온 수신자로 메세지 받도록
            for(UserLecture userLecture : userLectureList) {
                Message message = Message.builder().content(messageDto
                        .getContent())
                        .isChecked(0)
                        .build();

                message.setUser(userLecture.getUser());

                messageRepository.save(message);
                ret.add(message.toMessageDto());
            }

            return ret;
        }

        throw new CustomException(ErrorCode.NO_LECTURE);
    }

    public void updateCheck(MessageDto messageDto) {

        Optional<Message> result = messageRepository.findById(messageDto.getId());

        if(result.isPresent()) {

            Message message = result.get();
            message.update(1,Timestamp.valueOf(LocalDateTime.now()));
            messageRepository.save(message);
            return;
        }

        throw new CustomException(ErrorCode.NO_MESSSAGE);
    }


    public List<MessageDto> getMessageList(Long userId) {

        //특정 유저 정보 가져오기
        Optional<User> result = userRepository.findOneById(userId);

        if(result.isPresent()) {
            User user = result.get();

            List<Message> messageList = user.getMessageList();
            List<MessageDto> ret = new ArrayList<>();

            for(Message m : messageList) {
                ret.add(m.toMessageDto());
            }
            return ret;
        }
        //사용자 정보 없을 때
        throw new CustomException(ErrorCode.NO_USER);
    }

    public MessageDto getMessage(long message_id) {

        Optional<Message> message = messageRepository.findById(message_id);
        //null이 아니면
        if(message.isPresent()) {
            return message.get().toMessageDto();
        }

        throw new CustomException(ErrorCode.NO_MESSSAGE);
    }

    public void deleteMessage(long message_id) throws Exception {

        Optional<Message> message = messageRepository.findById(message_id);

        if(message.isPresent()) {

            messageRepository.deleteById(message_id);
            return;
        }

        throw new CustomException(ErrorCode.NO_MESSSAGE);
    }

    public List<MessageDto> getUnCheckMessageList(Long user_id) {

        Optional<User> result = userRepository.findOneById(user_id);

        if(result.isPresent()) {
            User user = result.get();

            List<Message> messageList = user.getMessageList();
            List<MessageDto> ret = new ArrayList<>();

            for(Message m : messageList) {
                //읽지 않은 메세지만 반환
                if(m.getIsChecked() == 0) {
                    ret.add(m.toMessageDto());
                }
            }

            return ret;
        }
        //사용자 정보 없을 때
        throw new CustomException(ErrorCode.NO_USER);
    }
}
