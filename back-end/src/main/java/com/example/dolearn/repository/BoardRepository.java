package com.example.dolearn.repository;


import com.example.dolearn.domain.Board;
<<<<<<< HEAD
import com.example.dolearn.dto.BoardDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
=======
import org.springframework.data.jpa.repository.JpaRepository;
>>>>>>> 3aa42c5e6155d5b3b16e7ca6776799bcbb00100f
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository <Board, Long>{
    public Board save(Board board);

    public List<Board> findAll();

    public Optional<Board> findById(Long id);

    public void deleteById(Long board_id);

    public List<Board> findByTitleContaining(String keyword);

    public List<Board> findByContentContaining(String keyword);

}
