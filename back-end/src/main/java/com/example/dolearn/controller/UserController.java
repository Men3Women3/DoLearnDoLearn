package com.example.dolearn.controller;

import com.example.dolearn.dto.UserDto;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.jwt.JwtTokenProvider;
import com.example.dolearn.response.ErrorResponse;
import com.example.dolearn.response.SeccessResponse;
import com.example.dolearn.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    private UserService userService;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping
    public ResponseEntity<?> signup(@RequestBody UserDto userDto){
        try{
            return new ResponseEntity<>(new SeccessResponse(userService.signup(userDto)), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.EMAIL_DUPLICATION), HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto loginUserDto) {
        try{
            UserDto userDto = userService.login(loginUserDto);
            String checkEmail = userDto.getEmail();
            String refreshToken = jwtTokenProvider.createRefreshToken(checkEmail);
            String accessToken = jwtTokenProvider.createAccessToken(refreshToken);
            return new ResponseEntity<>(new SeccessResponse(userService.updateToken(userDto, refreshToken, accessToken)), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_USER), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/access")
    public ResponseEntity<?> getAccessToken(@RequestHeader(value = "Authentication") String token) {
        try{
            String accessToken = jwtTokenProvider.createAccessToken(token);
            return new ResponseEntity<>(new SeccessResponse(accessToken), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INVALID_TOKEN), HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/logout/{user_id}")
    public ResponseEntity<?> logout(@PathVariable("user_id") Long id) {
        try{
            return new ResponseEntity<>(new SeccessResponse(userService.logout(id)), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INVALID_TOKEN), HttpStatus.UNAUTHORIZED);
        }
    }
}
