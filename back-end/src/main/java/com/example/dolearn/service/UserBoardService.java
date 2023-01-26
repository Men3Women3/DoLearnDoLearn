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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UserBoardService {

    @Autowired
    UserBoardRepository ubRepo;

    @Autowired
    BoardRepository boardRepository;

    @Autowired
    UserRepository userRepository;

    public List<UserBoard> getInstructors(Long bid){
        return ubRepo.findInstructors(bid);
    }

    public List<UserBoard> getStudents(Long bid){
        return ubRepo.findStudents(bid);
    }


    @Transactional
    public UserBoardDto applyClass(UserBoard userBoard) throws Exception{
        Optional<User> user = userRepository.findOneById(userBoard.getUid());
        Optional<Board> board = boardRepository.findById(userBoard.getBid());

        if(user.isEmpty()||board.isEmpty()) throw new NullPointerException();

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
        return ubRepo.delete(uid, bid);
    }
}
