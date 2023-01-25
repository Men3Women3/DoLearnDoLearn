package com.example.dolearn.handler;

import com.example.dolearn.domain.User;
import com.example.dolearn.dto.OAuthAttributes;
import com.example.dolearn.jwt.JwtTokenProvider;
import com.example.dolearn.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@Slf4j
public class Oauth2SuccessHandler implements AuthenticationSuccessHandler {

    private JwtTokenProvider jwtTokenProvider;
    private UserRepository userRepository;

    public Oauth2SuccessHandler(JwtTokenProvider jwtTokenProvider,UserRepository userRepository) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.userRepository = userRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        OAuthAttributes oAuthAttributes = (OAuthAttributes) authentication.getPrincipal();
        log.info("email : {}",oAuthAttributes.getEmail());
        String refreshToken = jwtTokenProvider.createRefreshToken(oAuthAttributes.getEmail());
        String accessToken = jwtTokenProvider.createAccessToken(refreshToken);

        log.info("refreshToken : {}",refreshToken);
        log.info("accessToken : {}",accessToken);

        Optional<User> user = userRepository.findOneByEmail(oAuthAttributes.getEmail());
        //user가 존재한다면 토큰 갱신
        if(user.isPresent()) {
            user.get().updateRefreshToken(refreshToken);
            userRepository.save(user.get());
        }

        response.setHeader("refreshToken",refreshToken);
        response.setHeader("accessToken",accessToken);

    }
}
