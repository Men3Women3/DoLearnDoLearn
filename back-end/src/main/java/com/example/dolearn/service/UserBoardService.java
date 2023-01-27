package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.User;
import com.example.dolearn.domain.UserBoard;
import com.example.dolearn.dto.UserBoardDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.repository.BoardRepository;
import com.example.dolearn.repository.UserBoardRepository;
import com.example.dolearn.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserBoardService {

    @Autowired
    UserBoardRepository ubRepo;

    @Autowired
    BoardRepository boardRepository;

    @Autowired
    UserRepository userRepository;

    public List<UserBoard> getInstructors(Long bid){
        List<UserBoard> instructorList = ubRepo.findInstructors(bid);

        if(instructorList.isEmpty()) throw new CustomException(ErrorCode.NO_INSTRUCTORS);

        return instructorList;
    }

    public List<UserBoard> getStudents(Long bid){
        List<UserBoard> studentList = ubRepo.findStudents(bid);

        if(studentList.isEmpty()) throw new CustomException(ErrorCode.NO_STUDENTS);

        return studentList;
    }


    @Transactional
    public UserBoardDto applyClass(UserBoard userBoard) throws Exception{
        Optional<User> user = userRepository.findOneById(userBoard.getUid());
        Optional<Board> board = boardRepository.findById(userBoard.getBid());

        if(board.isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        else if(user.isEmpty()) throw new CustomException(ErrorCode.NO_USER);

        UserBoard result= UserBoard.builder()
                .id(userBoard.getId()).uid(userBoard.getUid()).bid(userBoard.getBid()).board(board.get())
                .user(user.get()).user_type(userBoard.getUser_type()).build();

        if(result.getUser_type().equals("강사")){
            return ubRepo.save(result).toDto();
        }
        else{
            if(result.getBoard().getMaxCnt()>ubRepo.countStudents(userBoard.getBid())){
                return ubRepo.save(result).toDto();
            }
            else{
                throw new CustomException(ErrorCode.EXEED_STUDENTS);
            }
        }
    }

    @Transactional
    public int cancelApply(Long uid, Long bid){
        log.info("삭제 응답: {}, {}",uid,bid);

        if(ubRepo.checkApply(uid, bid).isEmpty()) throw new CustomException(ErrorCode.NO_APPLICANT);

        if(boardRepository.findById(bid).isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        if(userRepository.findOneById(uid).isEmpty()) throw new CustomException(ErrorCode.NO_USER);

        return ubRepo.delete(uid, bid);
    }
}
