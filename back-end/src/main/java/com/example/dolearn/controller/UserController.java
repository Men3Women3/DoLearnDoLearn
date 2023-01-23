package com.example.dolearn.controller;

import com.example.dolearn.dto.UserDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.jwt.JwtTokenProvider;
import com.example.dolearn.response.ErrorResponse;
import com.example.dolearn.response.SuccessResponse;
import com.example.dolearn.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Email;

@Validated
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
    public ResponseEntity<?> signup(@Valid @RequestBody UserDto userDto){
        try{
            return new ResponseEntity<>(new SuccessResponse(userService.signup(userDto)), HttpStatus.OK);
        } catch (CustomException e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.EMAIL_DUPLICATION), HttpStatus.CONFLICT);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody UserDto reqUserDto) {
        try{
            UserDto userDto = userService.login(reqUserDto);
            String checkEmail = userDto.getEmail();
            String refreshToken = jwtTokenProvider.createRefreshToken(checkEmail);
            String accessToken = jwtTokenProvider.createAccessToken(refreshToken);
            return new ResponseEntity<>(new SuccessResponse(userService.updateToken(userDto, refreshToken, accessToken)), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_USER), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/access")
    public ResponseEntity<?> getAccessToken(@RequestHeader(value = "Authentication") String token) {
        try{
            String accessToken = jwtTokenProvider.createAccessToken(token);
            return new ResponseEntity<>(new SuccessResponse(accessToken), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INVALID_TOKEN), HttpStatus.FORBIDDEN);
        }
    }

    @PostMapping("/logout/{id}")
    public ResponseEntity<?> logout(@PathVariable("id") Long id) {
        try{
            return new ResponseEntity<>(new SuccessResponse(userService.logout(id)), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_USER), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity<?> update(@Valid @RequestBody UserDto reqUserDto) {
        try{
            return new ResponseEntity<>(new SuccessResponse(userService.updateInfo(reqUserDto)), HttpStatus.OK);
        } catch (CustomException e) {
            if (e.getErrorCode().getHttpStatus() == HttpStatus.METHOD_NOT_ALLOWED){
                return new ResponseEntity<>(new ErrorResponse(ErrorCode.INVALID_INPUT), HttpStatus.METHOD_NOT_ALLOWED);
            } else {
                return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_USER), HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/check-email/{email}")
    public ResponseEntity<?> checkEmail(@PathVariable("email") @Email(message = "이메일 형식에 맞지 않습니다.") String email){
        try{
            userService.checkEmail(email);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.EMAIL_DUPLICATION), HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(new SuccessResponse(SUCCESS), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getInfo(@PathVariable("id") Long id){
        try{
            return new ResponseEntity<>(new SuccessResponse(userService.getInfo(id)), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_USER), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        try{
            userService.delete(id);
            return new ResponseEntity<>(new SuccessResponse(SUCCESS), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_USER), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/token-test")
    public String tokenTest(){
        return "응답";
    }
}
