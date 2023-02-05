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

    private Long bid;

    private Long uid;

    private String title;

    private String content;

    private String summary;

    private int maxCnt;

    private int students;

    private int instructors;

    private int isFixed;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date startTime;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date endTime;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date deadline;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date createdTime;

    public FixedLectureDto(Long id, Long bid, Long uid, String title, String content, String summary,
                           int maxCnt, long instructors, long students, int isFixed,
                           Date startTime, Date endTime, Date deadline, Date createdTime) {
        this.id = id;
        this.bid = bid;
        this.uid = uid;
        this.title = title;
        this.content = content;
        this.summary = summary;
        this.maxCnt = maxCnt;
        this.instructors = (int)instructors;
        this.students = (int)students;
        this.isFixed = isFixed;
        this.startTime = startTime;
        this.endTime = endTime;
        this.deadline = deadline;
        this.createdTime = createdTime;
    }
}