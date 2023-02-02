package com.example.dolearn.dto;

import com.querydsl.core.annotations.QueryProjection;
import com.querydsl.core.types.dsl.DateTimePath;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
@Builder
public class FixedLectureDto {

    Long id;

    private String title;

    private String summary;

    private Date startTime;

    private Date endTime;

    public FixedLectureDto(Long id, String title, String summary, Date startTime, Date endTime) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}