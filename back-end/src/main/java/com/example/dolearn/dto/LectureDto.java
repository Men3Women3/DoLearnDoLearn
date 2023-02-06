package com.example.dolearn.dto;

import com.example.dolearn.domain.Lecture;
import com.fasterxml.jackson.annotation.JsonFormat;
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
    private int memberCnt;
    private int isDeleted;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date endRealTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createdTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date startRealTime;

    public Lecture toEntity() throws ParseException {
        return Lecture.builder()
                .createdDate(createdTime)
                .isDeleted(isDeleted)
                .memberCnt(memberCnt)
                .endRealTime(endRealTime)
                .startRealTime(startRealTime)
                .build();
    }
}
