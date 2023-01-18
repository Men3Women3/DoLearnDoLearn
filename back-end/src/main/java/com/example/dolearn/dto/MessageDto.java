package com.example.dolearn.dto;

import com.example.dolearn.domain.Message;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MessageDto {

    private Long id;
    private Long rid;
    private String content;
    private int is_checked;
    private LocalDateTime createdTime;
    private LocalDateTime checkTime; //메세지 확인 시간

    public Message toEntity() {

        return Message.builder()
                .content(this.content).
                createdTime(LocalDateTime.now())
                .build();
    }
}
