package com.example.dolearn.repository;

import com.example.dolearn.domain.UserLecture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface UserLectureRepository extends JpaRepository<UserLecture,Long> {

    @Query(value = "select * from member_lecture where lid=:lid and member_type='학생'", nativeQuery = true)
    List<UserLecture> findByLectureId(@Param("lid") Long lid);
}
