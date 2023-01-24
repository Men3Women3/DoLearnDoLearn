package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository bRepo;

    @Transactional
    public Board insert(BoardDto boardDto) throws ParseException {
        return bRepo.save(boardDto.toEntity());
    }

    @Transactional
    public List<Board> selectAll(){
        return bRepo.findAll();
    }

    @Transactional
    public Optional<Board> selectDetail(Long id){
        return bRepo.findById(id);
    }

    @Transactional
    public void deleteBoard(Long id){
        bRepo.deleteById(id);
    }

    @Transactional
    public List<Board> searchBoardTitle(String keyword){
        return bRepo.findByTitleContaining(keyword);
    }

    @Transactional
    public List<Board> searchBoardContent(String keyword){
        return bRepo.findByContentContaining(keyword);
    }

    @Transactional
    public Board update(Long id){
        Optional<Board> result = bRepo.findById(id);
        Board b = result.get();
        b.setFixed(1);

        return bRepo.save(b);
    }
}