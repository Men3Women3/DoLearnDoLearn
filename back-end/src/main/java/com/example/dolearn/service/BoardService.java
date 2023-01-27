package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.util.*;

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

        if(boardList.isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        for(Board board: boardList){
            BoardDto boardDto = board.toDto();
            boardDtoList.add(boardDto);
        }

        return boardDtoList;
    }

    @Transactional
    public Optional<BoardDto> selectDetail(Long id) throws Exception{
        if(bRepo.findById(id).isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        Optional<BoardDto> result = Optional.ofNullable(bRepo.findById(id).get().toDto());

        return result;
    }

    @Transactional
    public int deleteBoard(Long id) throws Exception{
//        if(bRepo.findById(id).isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        return bRepo.deleteBoard(id);
    }

    public List<BoardDto> searchResult(List<Board> bListByTitle, List<Board> bListByContent) throws Exception{
        List<BoardDto> result = new ArrayList<>();

        if(bListByContent.isEmpty() && bListByTitle.isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        Set<Board> set = new LinkedHashSet<>(bListByTitle);
        set.addAll(bListByContent);

        List<Board> bListResult = new ArrayList<>(set);

        for(int i=0;i<bListResult.size();i++){
            result.add(bListResult.get(i).toDto());
        }

        return result;
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

        if(result.isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        if(result.get().getIsFixed()==1) throw new CustomException(ErrorCode.FIXED_LECTURE);

        BoardDto board = result.get();
        board.setFixed(1);

        return bRepo.save(board.toEntity()).toDto();
    }
}