package com.example.dolearn.repository;

import com.example.dolearn.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserDto, Long> {
    public Optional<UserDto> findOneByEmail(String email);
}
