package com.example.dolearn.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.ManyToAny;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Entity(name="message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="MESSAGE_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;

    @Column(length=100,nullable = false)
    private String content;

    @Column(name="is_checked", columnDefinition = "TINYINT", length=1)
    private int isChecked;

    @Column(name="createdTime")
    @CreationTimestamp
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdTime;

    @Column(name="check_time")
    @CreationTimestamp
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime checkTime; //메세지 확인 시간

    @Builder
    public Message(String content, LocalDateTime createdTime,LocalDateTime checkTime,int isChecked) {
        this.content = content;
        this.createdTime = createdTime;
        this.isChecked = isChecked;
        this.checkTime = checkTime;
    }
}
