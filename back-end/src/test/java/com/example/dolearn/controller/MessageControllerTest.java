package com.example.dolearn.controller;

import com.example.dolearn.dto.MessageDto;
import com.example.dolearn.service.MessageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.aspectj.bridge.Message;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureWebMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = MessageController.class)
public class MessageControllerTest {

    @MockBean
    private MessageService messageService;

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    private MockMvc mockMvc;

    @DisplayName("메세지 생성 테스트")
    @Test
    public void messageCreateTest() throws Exception {

        MessageDto messageDto = MessageDto.builder()
                                .id(1L)
                                .rid(1L)
                                .content("test")
                                .isChecked(1).build();

        when(messageService.createMessage(messageDto)).thenReturn(true);

        mockMvc.perform(post("/message")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(messageDto)))
                .andExpect(status().isCreated())
                .andExpect(content().string(containsString("SUCCESS")));
    }

    @DisplayName("메세지 확인 업데이트 테스트")
    @Test
    public void messageUpdateTest() throws Exception {
        MessageDto messageDto = MessageDto.builder()
                .id(1L)
                .rid(1L)
                .content("test")
                .isChecked(1).build();

        mockMvc.perform(put("/message")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(messageDto)))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("SUCCESS")));
    }
}
