package com.example.dolearn.repository;


import com.example.dolearn.domain.Board;
import com.example.dolearn.dto.BoardDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository <Board, Long>{
    public Board save(Board board);

    public List<Board> findAll();

//    public Optional<Board> findById(Long board_id);

//    public int deleteBoard(Long board_id);

//    public List<UserDto> findById(Long board_id);

//    public List<BoardDto> findByTitleLike(String keyword);

}
