package com.example.dolearn.exception.error;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

// 동일한 포맷으로 error를 return하기 위한 class
@Data
@NoArgsConstructor
public class ErrorResponse {
    private String code;
    private HttpStatus httpStatus;
    private String message;

    public ErrorResponse(ErrorCode code) {
        this.httpStatus = code.getHttpStatus();
        this.message = code.getMessage();
        this.code = code.getCode();
    }

    public static ErrorResponse of(ErrorCode code) {
        return new ErrorResponse(code);
    }
}
