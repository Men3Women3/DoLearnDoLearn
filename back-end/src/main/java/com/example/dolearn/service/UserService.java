package com.example.dolearn.service;

import com.example.dolearn.dto.UserDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public UserDto signup(UserDto userDto){
        if (userRepository.findOneByEmail(userDto.getEmail()) != null) {
            throw new CustomException(ErrorCode.USER_DUPLICATION);
        }
        return userRepository.save(userDto.toEntity()).toDto();
    }

    public UserDto login(UserDto loginUserDto) {
        UserDto userDto = userRepository.findOneByEmail(loginUserDto.getEmail()).toDto();
        if(userDto == null){
            throw new CustomException(ErrorCode.NO_USER);
        }
        if (!passwordEncoder.matches(loginUserDto.getPassword(), userDto.getPassword())) {
            throw new CustomException(ErrorCode.NO_USER);
        }
        return userDto;
    }

    @Transactional
    public UserDto updateToken(UserDto userDto, String refreshToken, String accessToken) {
        userDto.setRefreshToken(refreshToken);
        userDto.setAccessToken(accessToken);
        return userRepository.save(userDto.toEntity()).toDto();
    }
}
