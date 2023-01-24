package com.example.dolearn.service;

import com.example.dolearn.domain.UserBoard;
import com.example.dolearn.repository.UserBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserBoardService {

    @Autowired
    UserBoardRepository ubRepo;

    public List<UserBoard> getInstructors(Long bid){
        List<UserBoard> boardList = ubRepo.findByBid(bid);
        List<UserBoard> result = new ArrayList<>();

        for (int i=0;i<boardList.size();i++){
            if(boardList.get(i).getUser_type()=="강사"){
                result.add(boardList.get(i));
            }
        }

        return result;
    }

    public UserBoard applyClass(UserBoard userBoard){

        return ubRepo.save(userBoard);
    }

    @Transactional
    public UserBoard cancelApply(Long uid, Long bid){
        return ubRepo.delete(uid, bid);
    }
}
