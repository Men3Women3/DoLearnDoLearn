package com.example.dolearn.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
@Entity(name="user_lecture")
@Table(name="member_lecture")
public class UserLecture {
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="uid", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name="lid", nullable = false)
    private Lecture lecture;

    @Column(name="member_type", length = 10, nullable = false)
    private String memberType;

}
