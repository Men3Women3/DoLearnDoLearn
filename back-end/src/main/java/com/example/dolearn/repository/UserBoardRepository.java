package com.example.dolearn.repository;

import com.example.dolearn.domain.UserBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserBoardRepository extends JpaRepository <UserBoard, Long> {
//    @Query(value = "select * from applicant where bid=:bid and user_type='강사'", nativeQuery = true)
//    public List<BoardApplicant> findInst(@Param("bid") Long bid);

    @Query(value = "select * from user_board where bid=:bid and user_type='강사'", nativeQuery = true)
    List<UserBoard> findInstructors(@Param("bid") Long bid);

    @Query(value = "select * from user_board where bid=:bid and user_type='학생'", nativeQuery = true)
    List<UserBoard> findStudents(@Param("bid") Long bid);

    @Query(value = "select count(*) from user_board where bid=:bid and user_type='학생'",nativeQuery = true)
    int countStudents(@Param("bid") Long bid);

    UserBoard save(UserBoard userBoard);

    @Modifying
    @Query(value = "delete from user_board where uid=:uid and bid=:bid")
    int delete(@Param("uid") Long uid, @Param("bid") Long bid);
}
