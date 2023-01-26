package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository bRepo;

    @Transactional
    public BoardDto insert(BoardDto boardDto) throws ParseException {
        return bRepo.save(boardDto.toEntity()).toDto();
    }

    @Transactional
    public List<BoardDto> selectAll() throws Exception{
        List<Board> boardList = bRepo.findAll();
        List<BoardDto> boardDtoList = new ArrayList<>();

        for(Board board: boardList){
            BoardDto boardDto = board.toDto();
            boardDtoList.add(boardDto);
        }

        return boardDtoList;
    }

    @Transactional
    public Optional<BoardDto> selectDetail(Long id) throws Exception{
        Optional<BoardDto> result = Optional.ofNullable(bRepo.findById(id).get().toDto());

        if(result.isEmpty()) throw new NullPointerException();

        return result;
    }

    @Transactional
    public int deleteBoard(Long id){
        return bRepo.deleteBoard(id);
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
    public BoardDto update(Long id) throws Exception{
        Optional<BoardDto> result = Optional.ofNullable(bRepo.findById(id).get().toDto());

        if(result.isEmpty()) throw new NullPointerException();

        BoardDto board = result.get();
        board.setFixed(1);

        return bRepo.save(board.toEntity()).toDto();
    }
}