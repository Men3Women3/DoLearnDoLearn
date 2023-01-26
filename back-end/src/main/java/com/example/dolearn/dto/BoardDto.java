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

    private int maxCnt;

    private String content;

    private String summary;

    private String startTime;

    private String endTime;

    private String deadline;

    private int isFixed;

    private Date createdTime;

    public Board toEntity() throws ParseException {
        return Board.builder()
                .id(id)
                .uid(uid)
                .tid(tid)
                .title(title)
                .maxCnt(maxCnt)
                .content(content)
                .summary(summary)
                .startTime(dateConverter(startTime))
                .endTime(dateConverter(endTime))
                .deadline(dateConverter(deadline))
                .isFixed(isFixed)
                .createdTime(createdTime).build();
    }

    public void setFixed(int isFixed){
        this.isFixed = isFixed;
    }

    public Date dateConverter(String input) throws ParseException {
        SimpleDateFormat foramatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        Date date = foramatter.parse(input);

        return date;
    }
}
