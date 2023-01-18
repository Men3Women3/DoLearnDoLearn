package com.example.dolearn.repository;

import com.example.dolearn.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
    
    public User findOneByEmail(String email);
}
