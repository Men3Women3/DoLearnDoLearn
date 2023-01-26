package com.example.dolearn.dto;

import com.example.dolearn.domain.Board;
import lombok.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BoardDto {
    private Long id;

    private Long uid; //user table의 id (foreign key)

    private Long tid;//thumbnail table의 id (foreign key)

    private String title;

    private int max_cnt;

    private String content;

    private String summary;

    private String start_time;

    private String end_time;

    private String deadline;

    private int is_fixed;

    private Date created_time;

    public Board toEntity() throws ParseException {
        return Board.builder()
                .id(id)
                .uid(uid)
                .tid(tid)
                .title(title)
                .max_cnt(max_cnt)
                .content(content)
                .summary(summary)
                .start_time(dateConverter(start_time))
                .end_time(dateConverter(end_time))
                .deadline(dateConverter(deadline))
                .is_fixed(is_fixed)
                .created_time(created_time).build();
    }

    public void setFixed(int is_fixed){
        this.is_fixed= is_fixed;
    }

    public Date dateConverter(String input) throws ParseException {
        SimpleDateFormat foramatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        Date date = foramatter.parse(input);

        return date;
    }
}
