package com.example.dolearn.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

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
    private Timestamp start_time;

    @Column(name = "end_time")
    private Timestamp end_time;

    @Column(name = "deadline")
    private Timestamp deadline;

    @Column(name = "is_fixed")
    private int is_fixed;
    @CreationTimestamp
    @Column(name = "created_time")
    private LocalDateTime created_time= LocalDateTime.now();

    @Builder
    public Board(Long id, Long uid, Long tid, String title, int max_cnt, String content, String summary, Timestamp start_time, Timestamp end_time, Timestamp deadline, int is_fixed){
        id= this.id;
        uid= this.uid;
        tid= this.tid;
        title= this.title;
        max_cnt= this.max_cnt;
        content= this.content;
        summary= this.summary;
        start_time= this.start_time;
        end_time= this.end_time;
        deadline= this.deadline;
        is_fixed= this.is_fixed;
    }
}
