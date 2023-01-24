package com.example.dolearn.dto;

import com.example.dolearn.domain.Message;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MessageDto {

    private Long id;
    private Long rid;
    private Long lid; //강의 아이디
    private String content;
    private int isChecked;
    private Date createdTime;
    private Date checkTime; //메세지 확인 시간

    public Message toEntity() {

        return Message.builder()
                .content(this.content)
                .checkTime(this.checkTime)
                .isChecked(this.isChecked)
                .build();
    }
}
