package com.example.dolearn.domain;

import com.example.dolearn.dto.BoardDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity(name = "board")
@NoArgsConstructor
@Getter
@DynamicUpdate //Update 시에 변경된 필드만 대응
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "uid")
    private Long uid; //user table의 id (foreign key)

    @Column(name = "tid")
    private Long tid; //thumbnail table의 id (foreign key)

    @Column(name = "title")
    private String title;

    @Column(name = "max_cnt")
    private int max_cnt;

    @Column(name = "content")
    private String content;

    @Column(name = "summary")
    private String summary;

    @Column(name = "start_time")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date start_time;

    @Column(name = "end_time")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date end_time;

    @Column(name = "deadline")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date deadline;

    @Column(name = "is_fixed")
    private int is_fixed;
    @Column(name = "created_time")
    @CreationTimestamp
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_time;

    @Builder
    public Board(Long id, Long uid, Long tid, String title, int max_cnt, String content, String summary, Date start_time, Date end_time, Date deadline, int is_fixed){
        this.id= id;
        this.uid= uid;
        this.tid= tid;
        this.title = title;
        this.max_cnt= max_cnt;
        this.content= content;
        this.summary= summary;
        this.start_time= start_time;
        this.end_time= end_time;
        this.deadline= deadline;
        this.is_fixed= is_fixed;
    }

    public void setFixed(int is_fixed){
        this.is_fixed= is_fixed;
    }

    public BoardDto toDto() throws ParseException {
        return new BoardDto(id,uid,tid,title,max_cnt,content,summary,stringConverter(start_time),stringConverter(end_time),stringConverter(deadline),is_fixed);
    }

    public String stringConverter(Date input) throws ParseException {
        SimpleDateFormat foramatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        String date = foramatter.format(input);

        return date;
    }
}
