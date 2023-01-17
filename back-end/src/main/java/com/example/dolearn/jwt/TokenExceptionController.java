package com.example.dolearn.jwt;

import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TokenExceptionController {
    
    @GetMapping("/exception/entrypoint")
    public void entryPoint() {
        throw new CustomException(ErrorCode.NO_LOGIN);
    }
}