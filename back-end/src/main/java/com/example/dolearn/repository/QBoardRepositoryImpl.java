package com.example.dolearn.repository;

import com.example.dolearn.domain.Board;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

import static com.example.dolearn.domain.QBoard.board;
import static com.example.dolearn.domain.QUserBoard.userBoard;

public class QBoardRepositoryImpl extends QuerydslRepositorySupport implements QBoardRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public QBoardRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        super(Board.class);
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<Board> findRequestLectureByUid(Long uid) {
        return jpaQueryFactory
                .selectFrom(board)
                .leftJoin(board.userBoardList, userBoard)
                .where(board.isFixed.eq(0), (board.uid.eq(uid).or(userBoard.uid.eq(uid))))
                .fetch();
    }

    @Override
    public List<Board> findFixedLectureByUid(Long uid) {
        return jpaQueryFactory
                .selectFrom(board)
                .leftJoin(board.userBoardList, userBoard)
                .where(board.isFixed.eq(1), (board.uid.eq(uid).or(userBoard.uid.eq(uid))))
                .fetch();
    }
}
