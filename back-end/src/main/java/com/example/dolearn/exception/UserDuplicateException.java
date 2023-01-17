package com.example.dolearn.exception;

import com.example.dolearn.dto.UserDto;

public class UserDuplicateException extends RuntimeException {
    public UserDuplicateException(UserDto useDto){
        super(useDto.getEmail()+"is duplicated");
    }
}