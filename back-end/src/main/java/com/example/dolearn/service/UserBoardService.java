package com.example.dolearn.service;

import com.example.dolearn.domain.BoardApplicant;
import com.example.dolearn.domain.UserBoard;
import com.example.dolearn.repository.UserBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserBoardService {

    @Autowired
    UserBoardRepository ubRepo;

    public List<BoardApplicant> getInstructors(Long id){
        return ubRepo.findInst(id);
    }

    public void applyClass(UserBoard userBoard){
        ubRepo.save(userBoard);
    }

    @Transactional
    public void cancelApply(Long uid, Long bid){
        ubRepo.delete(uid, bid);
    }
}
