package com.example.dolearn.dto;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BoardApplicantDto {
    private Long id;

    private String name;

    private String email;

    private String password;

    private String info;

    private Integer point;

    private String instagram;

    private String facebook;

    private String blog;

    Date joinDate;

    private String refreshToken;

    private String imgSrc;

    private String gender;

//    private String accessToken;

    private Long bid;

    private String user_type;
}
