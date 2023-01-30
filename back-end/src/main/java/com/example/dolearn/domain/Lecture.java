package com.example.dolearn.domain;

import com.example.dolearn.dto.LectureDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name="lecture")
public class Lecture {

    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="member_cnt", nullable = false)
    private int userCnt;

    @Column(length = 100, nullable = true)
    private String link;

    @Column(name="is_deleted", columnDefinition = "TINYINT", length=1)
    private int isDeleted;

    @Column(name="created_time")
    @CreationTimestamp
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @Column(name="start_realtime")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date startRealTime;

    @Column(name="end_realtime")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date endRealTime;

    @JoinColumn(name="bid")
    @OneToOne
    private Board board;

    public LectureDto toMessageDto() {
        return null;
    }
}
