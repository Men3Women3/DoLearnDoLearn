package com.example.dolearn.dto;

import com.example.dolearn.domain.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class UserDto {
    private Long id;

    private String name;

    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String info;

    private String gender;

    private Integer point;

    private String instagram;

    private String facebook;

    private String blog;

    private String imgSrc;

    private String refreshToken;

    private String accessToken;

    Date joinDate;

    public User toEntity() {
        return User.builder()
                .id(id)
                .name(name)
                .email(email)
                .password(password)
                .info(info)
                .gender(gender)
                .point(point)
                .instagram(instagram)
                .facebook(facebook)
                .blog(blog)
                .imgSrc(imgSrc)
                .refreshToken(refreshToken)
                .joinDate(joinDate)
                .build();
    }
}
