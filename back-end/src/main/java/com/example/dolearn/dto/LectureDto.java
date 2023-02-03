package com.example.dolearn.dto;

import com.example.dolearn.domain.Lecture;
import lombok.*;

import java.text.ParseException;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class LectureDto {

    private Long id;
    private Long bid; //thumbnail table의 id (foreign key)
    private int userCnt;
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
                .build();
    }
}
