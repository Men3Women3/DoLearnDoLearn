package com.example.dolearn.domain;

import com.example.dolearn.dto.BoardApplicantDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "applicant") //생성한 view
@NoArgsConstructor
@Getter
public class BoardApplicant {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "info")
    private String info;

    @Column(name = "point")
    private Integer point;

    @Column(name = "instagram")
    private String instagram;

    @Column(name = "facebook")
    private String facebook;

    @Column(name = "blog")
    private String blog;

    @Column(name = "joinDate")
    Date joinDate;

    @Column(name = "refreshToken")
    private String refreshToken;

    @Column(name = "imgSrc")
    private String imgSrc;

    @Column(name = "gender")
    private String gender;

//    private String accessToken;

    @Column(name = "bid")
    private Long bid;

    @Column(name = "user_type")
    private String user_type;

    public BoardApplicantDto toDto(){
        return new BoardApplicantDto(id,name,email,password,info,point,instagram,facebook,blog,joinDate,refreshToken,imgSrc,gender,bid,user_type);
    }
}
