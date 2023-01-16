package com.example.dolearn.controller;

import com.example.dolearn.dto.UserDto;
import com.example.dolearn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping
    public ResponseEntity<?> signup(@RequestBody UserDto userDto){
        return new ResponseEntity<>(userService.signup(userDto), HttpStatus.OK);
    }
}
