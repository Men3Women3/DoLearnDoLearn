package com.example.dolearn.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@DynamicInsert
@Entity(name="user")
public class UserDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30, nullable = false)
    private String name;

    @Column(length = 100, nullable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Column(length = 3000)
    private String info;

    @Column(length = 4)
    private String gender;

    @Column
    private Integer point;

    @Column(length = 50)
    private String instagram;

    @Column(length = 200)
    private String facebook;

    @Column(length = 200)
    private String blog;

    @Column(name="img_src", length = 200)
    private String imgSrc;

    @Column(name="refresh_token", length = 500)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String refreshToken;

    @Column(name="join_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    Date joinDate;
}
