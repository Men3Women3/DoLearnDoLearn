package com.example.dolearn.service;

import com.example.dolearn.domain.User;
import com.example.dolearn.dto.UserDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserDto signup(UserDto reqUserDto){
        if (userRepository.findOneByEmail(reqUserDto.getEmail()).isPresent()) {
            throw new CustomException(ErrorCode.EMAIL_DUPLICATION);
        }
        reqUserDto.setPassword(passwordEncoder.encode(reqUserDto.getPassword()));
        
        return userRepository.save(reqUserDto.toEntity()).toDto();
    }

    public UserDto login(UserDto reqUserDto) {
        UserDto userDto = userRepository.findOneByEmail(reqUserDto.getEmail()).get().toDto();
        if(userDto == null){
            throw new CustomException(ErrorCode.NO_USER);
        }
        if (!passwordEncoder.matches(reqUserDto.getPassword(), userDto.getPassword())) {
            throw new CustomException(ErrorCode.NO_USER);
        }
        return userDto;
    }

    public UserDto updateToken(UserDto reqUserDto, String refreshToken, String accessToken) {
        reqUserDto.setRefreshToken(refreshToken);
        reqUserDto.setAccessToken(accessToken);
        userRepository.save(reqUserDto.toEntity());
        return reqUserDto;
    }

    public UserDto logout(Long id) {
        UserDto userDto = userRepository.findOneById(id).get().toDto();
        if(userDto == null){
            throw new CustomException(ErrorCode.NO_USER);
        }
        userDto.setRefreshToken(null);
        return userRepository.save(userDto.toEntity()).toDto();
    }

    public UserDto updateInfo(UserDto reqUserDto){
        if(reqUserDto.getId() == null || reqUserDto.getImgSrc() == null || reqUserDto.getInfo() == null || reqUserDto.getBlog() == null || reqUserDto.getFacebook() == null || reqUserDto.getInstagram() == null){
            throw new CustomException(ErrorCode.INVALID_INPUT);
        }
        Optional<User> user = userRepository.findOneById(reqUserDto.getId());
        if(!user.isPresent()){
            throw new CustomException(ErrorCode.NO_USER);
        }
        UserDto userDto = user.get().toDto();
        userDto.setImgSrc(reqUserDto.getImgSrc());
        userDto.setInfo(reqUserDto.getInfo());
        userDto.setBlog(reqUserDto.getBlog());
        userDto.setInstagram(reqUserDto.getInstagram());
        userDto.setFacebook(reqUserDto.getFacebook());
        return userRepository.save(userDto.toEntity()).toDto();
    }

    public void checkEmail(String email){
        if(userRepository.findOneByEmail(email).isPresent()) {
            throw new CustomException(ErrorCode.EMAIL_DUPLICATION);
        }
    }
}
