package com.example.dolearn.service;

import com.example.dolearn.dto.UserDto;
import com.example.dolearn.exception.UserDuplicateException;
import com.example.dolearn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public UserDto signup(UserDto userDto){
        if (userRepository.findOneByEmail(userDto.getEmail()).orElse(null) != null) {
            throw new UserDuplicateException(userDto);
        }

        UserDto newUserDto = UserDto.builder()
                .email(userDto.getEmail())
                .name(userDto.getName())
                .password(userDto.getPassword())          // 나중에 encoding 처리하기
                .build();

        return userRepository.save(newUserDto);
    }
}
