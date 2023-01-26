package com.example.dolearn.domain;

import com.example.dolearn.dto.BoardDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(name = "board")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
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

    @Builder.Default
    @JsonIgnore
    @OneToMany(mappedBy = "board")
    private List<UserBoard> userBoardList = new ArrayList<>();

    public void setFixed(int is_fixed){
        this.is_fixed= is_fixed;
    }

    public BoardDto toDto() throws ParseException {
        return BoardDto.builder()
                .id(id).uid(uid).tid(tid).title(title).max_cnt(max_cnt).content(content).summary(summary).start_time(stringConverter(start_time))
                .end_time(stringConverter(end_time)).deadline(stringConverter(deadline)).is_fixed(is_fixed).created_time(created_time).build();
    }

    public String stringConverter(Date input){
        SimpleDateFormat foramatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        String date = foramatter.format(input);

        return date;
    }
}