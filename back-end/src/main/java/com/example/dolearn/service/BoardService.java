package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository bRepo;

    @Transactional
    public Board insert(BoardDto boardDto){
        return bRepo.save(boardDto.toEntity());
    }

    @Transactional
    public List<Board> selectAll(){
        return bRepo.findAll();
    }
}
