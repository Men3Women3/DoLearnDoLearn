package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.User;
import com.example.dolearn.domain.UserBoard;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.dto.UserDto;
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
        return ubRepo.findByBid(bid);
    }

    public UserBoard applyClass(UserBoard userBoard) throws Exception{
        Optional<User> user = userRepository.findOneById(userBoard.getUid());
        Optional<Board> board = boardRepository.findById(userBoard.getBid());
        UserDto userDto = null;
        BoardDto boardDto=null;

        if(user.isPresent()){
            userDto = user.get().toDto();
        }

        if(board.isPresent()){
            boardDto = board.get().toDto();
        }

        UserBoard result = UserBoard.builder()
                .id(userBoard.getId()).bid(userBoard.getBid()).uid(userBoard.getUid())
                .user(userDto.toEntity()).board(boardDto.toEntity()).user_type(userBoard.getUser_type()).build();

        return ubRepo.save(result);
    }

    @Transactional
    public int cancelApply(Long uid, Long bid){
        return ubRepo.delete(uid, bid);
    }
}
