package com.example.dolearn.dto;

import com.example.dolearn.domain.UserBoard;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class UserBoardDto {

    private Long id;

    private Long uid;

    private Long bid;

    private String user_type;

    public UserBoard toEntity(){
        return UserBoard.builder()
                .uid(uid)
                .bid(bid)
                .user_type(user_type)
                .build();
    }
}
