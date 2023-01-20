package com.example.dolearn.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "user_board")
@NoArgsConstructor
@Getter
public class UserBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "uid")
    private Long uid;

    @Column(name = "bid")
    private Long bid;

    @Column(name = "user_type")
    private String user_type;

    @Builder
    public UserBoard(Long uid, Long bid, String user_type){
        this.uid=uid;
        this.bid=bid;
        this.user_type=user_type;
    }
}
