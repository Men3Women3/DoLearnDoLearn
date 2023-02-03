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
        List<UserBoard> instructorList = ubRepo.findInstructors(bid); //강사 리스트 받아오기

        return instructorList;
    }
    public List<UserBoard> getStudents(Long bid){
        List<UserBoard> studentList = ubRepo.findStudents(bid);//학생 리스트 받아오기

        return studentList;
    }

    public List<UserBoard> getApplicationList(Long uid){
        List<UserBoard> applicationList = ubRepo.checkApply(uid);//해당 유저가 신청한 목록 받아오기

        return applicationList;
    }

    @Transactional
    public UserBoardDto applyClass(UserBoard userBoard){
        Optional<User> user = userRepository.findOneById(userBoard.getUid()); //user data 받아오기
        Optional<Board> board = boardRepository.findById(userBoard.getBid()); //board data 받아오기

        if(board.isEmpty()) throw new CustomException(ErrorCode.NO_BOARD); //board가 없는 경우 오류 발생

        else if(user.isEmpty()) throw new CustomException(ErrorCode.NO_USER); //user가 없는 경우 오류 발생

        UserBoard result= UserBoard.builder()
                .id(userBoard.getId()).uid(userBoard.getUid()).bid(userBoard.getBid()).board(board.get())
                .user(user.get()).userType(userBoard.getUserType()).build(); //UserBoard data 생성

        if(result.getUserType().equals("강사")){ //강사로 신청한 경우
            return ubRepo.save(result).toDto(); //강사로 신청 적용
        }
        else{ //학생으로 신청한 경우
            if(result.getBoard().getMaxCnt()>ubRepo.findStudents(userBoard.getBid()).size()){ //신청할 강의의 최대 학생수를 넘지 않았다면
                return ubRepo.save(result).toDto(); //수강 신청 적용
            }
            else{ //넘었다면
                throw new CustomException(ErrorCode.EXEED_STUDENTS); //오류 발생
            }
        }
    }

    @Transactional
    public int cancelApply(Long uid, Long bid){
        log.info("삭제 응답: {}, {}",uid,bid);

        if(boardRepository.findById(bid).isEmpty()) throw new CustomException(ErrorCode.NO_BOARD); //삭제할 board가 없는 경우 오류 발생

        if(userRepository.findOneById(uid).isEmpty()) throw new CustomException(ErrorCode.NO_USER); //user가 없는 경우 오류 발생

        return ubRepo.delete(uid, bid); //삭제 적용
    }
}
