package com.example.dolearn.repository;

import com.example.dolearn.dto.FixedLectureDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.example.dolearn.domain.QBoard.board;
import static com.example.dolearn.domain.QLecture.lecture;
import static com.example.dolearn.domain.QUserLecture.userLecture;

@Repository
public class FixedLectureRepository {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    public List<FixedLectureDto> findFixedLecture(Long uid) {
        List<FixedLectureDto> result = jpaQueryFactory
                .select(Projections.constructor(FixedLectureDto.class, lecture.id, board.title, board.summary, board.startTime, board.endTime))
                .from(userLecture)
                .innerJoin(userLecture.lecture, lecture)
                .innerJoin(lecture.board, board)
                .where(userLecture.user.id.eq(uid))
                .fetch();
        return result;
    }
}
