package com.example.dolearn.domain;

import com.example.dolearn.dto.UserBoardDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "user_board")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class UserBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "bid")
    private Board board;

    @Column(name = "user_type")
    private String user_type;

    public UserBoardDto toDto(){
        return UserBoardDto.builder()
                .id(id).uid(user.getId()).bid(board.getId()).board(board).user(user).user_type(user_type).build();
    }
}