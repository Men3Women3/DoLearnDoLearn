package com.example.dolearn.dto;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.Lecture;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.ParseException;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LectureDto {

    private Long id;
    private Long bid; //thumbnail table의 id (foreign key)
    private int userCnt;
    private String link; // 강의 링크
    private int isDeleted;
    private Date endRealTime;
    private Date createdTime;
    private Date startRealTime;

    public Lecture toEntity() throws ParseException {
        return Lecture.builder()
                .createdDate(createdTime)
                .isDeleted(isDeleted)
                .userCnt(userCnt)
                .endRealTime(endRealTime)
                .startRealTime(startRealTime)
                .link(link)
                .build();
    }
}
