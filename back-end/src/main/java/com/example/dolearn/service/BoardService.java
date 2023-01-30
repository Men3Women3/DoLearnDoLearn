package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.User;
import com.example.dolearn.domain.UserBoard;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.repository.BoardRepository;
import com.example.dolearn.repository.UserBoardRepository;
import com.example.dolearn.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Slf4j
public class BoardService {

    @Autowired
    private BoardRepository bRepo;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserBoardRepository userBoardRepository;

    @Transactional
    public BoardDto insert(BoardDto boardDto) throws Exception {
        boardDto.setTimes();
        Board board =boardDto.toEntity();

        BoardDto result = bRepo.save(board).toDto();

        User user = userRepository.findOneById(board.getUid()).get();

        UserBoard userBoard = UserBoard.builder()
                .uid(board.getUid()).bid(board.getId()).user(user).board(board).user_type("학생").build();

        userBoardRepository.save(userBoard);

        log.info("저장 요청: {}",board);
        log.info("작성자 정보 저장: {}",userBoard);

        return result;
    }

    @Transactional
    public List<BoardDto> selectAll() throws Exception{
        List<Board> boardList = bRepo.findAll();
        List<BoardDto> boardDtoList = new ArrayList<>();

        if(boardList.isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        for(int i=boardList.size()-1;i>=0;i--){
            BoardDto boardDto = boardList.get(i).toDto();
            boardDtoList.add(boardDto);
        }

        return boardDtoList;
    }

    @Transactional
    public BoardDto selectDetail(Long id) throws Exception{
        if(bRepo.findById(id).isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);

        BoardDto result = bRepo.findById(id).get().toDto();

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