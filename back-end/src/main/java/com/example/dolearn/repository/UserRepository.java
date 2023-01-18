package com.example.dolearn.repository;

import com.example.dolearn.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<UserDto, Long> {
    
    public UserDto findOneByEmail(String email);
}
