package com.example.dolearn.exception.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    // common
    INVALID_INPUT(HttpStatus.METHOD_NOT_ALLOWED, "405", "기입되지 않은 정보가 있습니다"),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "500", "서버 내부 에러"),

    // user
    EMAIL_DUPLICATION(HttpStatus.CONFLICT, "409", "이미 존재하는 이메일입니다."),
    NO_USER(HttpStatus.BAD_REQUEST, "400", "없는 사용자입니다."),
    NO_LOGIN(HttpStatus.UNAUTHORIZED, "401", "로그인이 필요합니다"),

    // jwt
    INVALID_TOKEN(HttpStatus.FORBIDDEN, "403", "유효하지 않은 토큰입니다"),

    NO_MESSSAGE(HttpStatus.NOT_FOUND,"404","없는 메세지 입니다.");

    private HttpStatus httpStatus;
    private String code;
    private String message;
}
