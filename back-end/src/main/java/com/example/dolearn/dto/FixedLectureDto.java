package com.example.dolearn.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date startTime;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date endTime;

    public FixedLectureDto(Long id, String title, String summary, Date startTime, Date endTime) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}