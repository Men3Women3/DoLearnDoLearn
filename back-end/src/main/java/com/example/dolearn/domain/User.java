package com.example.dolearn.domain;

import com.example.dolearn.dto.UserDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name="user")
public class User {
    @Id
    @Column(name="ID")
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
    private String refreshToken;

    @Column(name="join_date")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date joinDate;

    @Builder.Default
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Message> messageList = new ArrayList<>();

    @PrePersist
    public void setDefaultValue(){
        this.info = "";
        this.point = 0;
        this.instagram = "";
        this.facebook = "";
        this.blog = "";
        this.imgSrc = "";
    }


    public UserDto toDto() {
        return UserDto.builder()
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

