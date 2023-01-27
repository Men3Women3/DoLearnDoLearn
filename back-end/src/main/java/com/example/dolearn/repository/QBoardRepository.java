package com.example.dolearn.repository;

import com.example.dolearn.domain.Board;

import java.util.List;

public interface QBoardRepository {

    List<Board> findRequestLectureByUid(Long uid);
}
