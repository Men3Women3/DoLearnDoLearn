package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.User;
import com.example.dolearn.domain.UserBoard;
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
        UserBoard result = null;

        if(user.isPresent() && board.isPresent()){
            result = UserBoard.builder()
                    .id(userBoard.getId()).bid(userBoard.getBid()).uid(userBoard.getUid())
                    .user(user.get()).board(board.get()).user_type(userBoard.getUser_type()).build();
        }

        return ubRepo.save(result);
    }

    @Transactional
    public int cancelApply(Long uid, Long bid){
        return ubRepo.delete(uid, bid);
    }
}
