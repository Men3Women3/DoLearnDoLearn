package com.example.dolearn.repository;


import com.example.dolearn.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository <Board, Long>, QBoardRepository{
    Board save(Board board);

    List<Board> findAll();

    Optional<Board> findById(Long id);

    @Modifying
    @Query(value = "delete from board where id=:bid")
    int deleteBoard(@Param("bid") Long board_id);

    List<Board> findByTitleContaining(String keyword);

    List<Board> findByContentContaining(String keyword);

    List<Board> findBySummaryContaining(String keyword);

}
