package com.example.dolearn.dto;

import com.example.dolearn.domain.Board;
import lombok.*;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class BoardDto {
    private Long id;

    private Long uid; //user table의 id (foreign key)

    private Long tid;//thumbnail table의 id (foreign key)

    private String title;

    private int max_cnt;

    private String content;

    private String summary;

    private Timestamp start_time;

    private Timestamp end_time;

    private Timestamp deadline;

    private int is_fixed;

//    private Timestamp created_time;

    public Board toEntity(){
        return Board.builder()
                .id(id)
                .uid(uid)
                .tid(tid)
                .title(title)
                .max_cnt(max_cnt)
                .content(content)
                .summary(summary)
                .start_time(start_time)
                .end_time(end_time)
                .deadline(deadline)
                .is_fixed(is_fixed).build();
    }
}
